import type { PokeApiPokemonDetail } from "@shared/pokeapi";

import { App } from "boondoggle";

import { capitalize } from "@shared/utils";

import { PillPokemonType } from "./pill-pokemon-type";
import { Stat } from "./pokemon-stat";

import "../css/index.css";

export function PokemonDetails({ pokemon }: { pokemon: PokeApiPokemonDetail }) {
	return (
		<div>
			<div className="flex gap-1">
				<h3>{capitalize(pokemon.name)}</h3>
				<App.AppDrawer.CloseButton />
			</div>

			{pokemon.sprites.front_default ? (
				<img alt={pokemon.name} src={pokemon.sprites.front_default} />
			) : null}

			<h4>Types</h4>
			<div className="flex gap-1 mt-2 mb-2">
				{pokemon.types.map((pt) => {
					return <PillPokemonType key={pt.type.name} type={pt.type.name} />;
				})}
			</div>

			<h4>Stats</h4>
			<div className="flex column gap-1 mt-2 mb-2">
				<div className="pokemon-stat-grid">
					<div>HP</div>
					<Stat stat="hp" stats={pokemon.stats} />
				</div>
				<div className="pokemon-stat-grid">
					<div>Attack</div>
					<Stat stat="attack" stats={pokemon.stats} />
				</div>
				<div className="pokemon-stat-grid">
					<div>Defense</div>
					<Stat stat="defense" stats={pokemon.stats} />
				</div>
				<div className="pokemon-stat-grid">
					<div>Speed</div>
					<Stat stat="speed" stats={pokemon.stats} />
				</div>
				<div className="pokemon-stat-grid">
					<div>Special attack</div>
					<Stat stat="special-attack" stats={pokemon.stats} />
				</div>
				<div className="pokemon-stat-grid">
					<div>Special defense</div>
					<Stat stat="special-defense" stats={pokemon.stats} />
				</div>
			</div>
		</div>
	);
}
