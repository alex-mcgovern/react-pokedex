/* eslint-disable @typescript-eslint/no-redundant-type-constituents */
import { Pill } from "boondoggle";

import { capitalize } from "@shared/utils";

// Regrettably the pokemon-type defined in the OpenAPI spec is just `string`
// So have to manually define the type here.

// By typing it as string and then
// adding specific pokemon types to the enum, we can allow any string, while
// getting intellisense for the specific types.
// Note: This is a bit of hack, so requires overriding @typescript-eslint/no-redundant-type-constituents
type PokemonType =
	| "bug"
	| "dark"
	| "dragon"
	| "electric"
	| "fairy"
	| "fighting"
	| "fire"
	| "flying"
	| "ghost"
	| "grass"
	| "ground"
	| "ice"
	| "normal"
	| "poison"
	| "psychic"
	| "rock"
	| "steel"
	| "water"
	| string;

const getColor = (type: PokemonType) => {
	switch (type) {
		case "bug":
			return "#A8B820";
		case "dark":
			return "#705848";
		case "dragon":
			return "#7038F8";
		case "electric":
			return "#F8D030";
		case "fairy":
			return "#F0B6BC";
		case "fighting":
			return "#C03028";
		case "fire":
			return "#F08030";
		case "flying":
			return "#A890F0";
		case "ghost":
			return "#705898";
		case "grass":
			return "#78C850";
		case "ground":
			return "#E0C068";
		case "ice":
			return "#98D8D8";
		case "normal":
			return "#A8A878";
		case "poison":
			return "#A040A0";
		case "psychic":
			return "#F85888";
		case "rock":
			return "#B8A038";
		case "steel":
			return "#B8B8D0";
		case "water":
			return "#6890F0";
		default:
			return "#8b8d98";
	}
};

// Note: I wouldn't usually use inline styles, but I'm moving quickly here.
export function PillPokemonType({ type }: { type: PokemonType }) {
	return (
		<Pill
			style={{
				backgroundColor: getColor(type),
				border: 0,
				color: "#fcfcfd",
			}}
		>
			{capitalize(type)}
		</Pill>
	);
}
