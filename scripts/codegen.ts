import type { OpenAPIObject } from "openapi3-ts";

import SwaggerParser from "@apidevtools/swagger-parser";
import camelCase from "lodash.camelcase";
import { Octokit } from "octokit";
import { generateZodClientFromOpenAPI, getHandlebars } from "openapi-zod-client";

import "dotenv/config";

const octokit = new Octokit();

const fetchApiData = async () => {
	const { data: api_data } = await octokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
		headers: {
			"X-GitHub-Api-Version": "2022-11-28",
		},

		owner: "PokeAPI",
		path: "openapi.yml",
		repo: "pokeapi",
	});

	if (Array.isArray(api_data) || api_data.type !== "file" || !api_data.download_url) {
		throw new Error(`❌ Failed to fetch OpenAPI spec`);
	}

	console.info("✅ Fetched OpenAPI spec");
	return api_data as { [key: string]: unknown; download_url: string };
};

// XXX: Handlebars has some issues with type definitions — it's an older library.
// As these are build-time dependencies only, we can safely ignore our lint rules
// Not something you do in runtime.
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handlebars = getHandlebars();
// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
handlebars.registerHelper("camelCase", camelCase);

const generateClient = async (
	api_data: { [key: string]: unknown; download_url: string },
	distPath: string,
	templatePath: string,
) => {
	const openApiDoc = (await SwaggerParser.parse(api_data.download_url)) as OpenAPIObject;

	await generateZodClientFromOpenAPI({
		distPath: distPath,
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		handlebars,
		openApiDoc,
		options: {
			shouldExportAllSchemas: true,
			withAlias: true,
		},
		templatePath: templatePath,
	})
		.then(() => {
			console.info("✅ Generated\t\t", distPath);
		})
		.catch((error) => {
			console.error("❌ Error while generating\t\t", distPath, error);
		});
};

const main = async () => {
	const apiData = await fetchApiData();

	await generateClient(
		apiData,
		"packages/shared/pokeapi/src/schema.ts",
		"packages/shared/pokeapi/src/template.hbs",
	);
};

void main();
