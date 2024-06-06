import type { PokeApiPokemonDetail } from "@shared/pokeapi";

import { useInfiniteQuery } from "@tanstack/react-query";

import { client } from "@shared/pokeapi";

/**
 * Extract the ID from a URL
 * e.g. 'https://pokeapi.co/api/v2/pokemon/1/' -> '1'
 */
function getIdFromUrl(url: string): string {
	const match = url.match(/\/(\d+)\/$/);
	if (!match) {
		throw new Error(`Failed to get Pokemon ID from URL ${url}`);
	}
	return match[1];
}

if (import.meta.vitest) {
	const { expect, it } = import.meta.vitest;

	it("gets ID from url correctly", () => {
		expect(getIdFromUrl("https://pokeapi.co/api/v2/pokemon/1/")).toBe("1");
		expect(getIdFromUrl("https://pokeapi.co/api/v2/pokemon/151/")).toBe("151");
	});
}

/**
 * Extract the offset from a URL
 */
function getParam(param: string, url: string): string {
	const parsed = new URL(url);
	return parsed.searchParams.get(param) ?? "";
}

/**
 * Fetches all Pokemon from the API
 * First uses the list endpoint to get the list of Pokemon,
 * then uses the retrieve endpoint to get the details of each Pokemon.
 *
 * In an ideal world, our list endpoint would return some details in a "summary" struct.
 * But given what I've chosen to integrate with, we're chaining requests.
 * This won't scale well, so we should keep the page size small.
 *
 * We do our processing and additional fetching in the queryFn to make use
 * of react-query's caching capabilities.
 */
type PagingQuery = { limit: number; offset: number };

export function useFetchPokemon({ limit, offset }: PagingQuery) {
	return useInfiniteQuery({
		// This is defined simply to help with writing the queryFn, usually would rely on inference.
		getNextPageParam: (p): PagingQuery | undefined => {
			return p.next
				? {
						limit: Number(getParam("limit", p.next)),
						offset: Number(getParam("offset", p.next)),
					}
				: undefined;
		},
		getPreviousPageParam: (p): PagingQuery | undefined => {
			return p.previous
				? {
						limit: Number(getParam("limit", p.previous)),
						offset: Number(getParam("offset", p.previous)),
					}
				: undefined;
		},
		initialPageParam: undefined,
		maxPages: 1,
		queryFn: async ({
			pageParam,
		}: {
			pageParam: PagingQuery | undefined;
		}): Promise<{
			count?: number | undefined;
			next?: null | string | undefined;
			previous?: null | string | undefined;
			results?: PokeApiPokemonDetail[];
		}> => {
			const list = await client.pokemonList({
				queries: pageParam
					? { limit: pageParam.limit, offset: pageParam.offset }
					: { limit, offset },
			});

			if (!list.results || list.results.length === 0) {
				return {
					...list,
					results: [],
				};
			}

			const detailedPokemon = await Promise.all(
				list.results.map((p) => {
					return client.pokemonRetrieve({ params: { id: getIdFromUrl(p.url) } });
				}),
			);

			return {
				...list,
				results: detailedPokemon,
			};
		},
		queryKey: ["all-pokemon", { limit, offset }],
	});
}
