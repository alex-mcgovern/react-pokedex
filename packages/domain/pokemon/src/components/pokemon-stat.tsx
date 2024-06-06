import type { PokeApiPokemonStat } from "@shared/pokeapi";

import clsx from "clsx";

// Component to render a pokemon's stat
const getStat = (stat: string, stats: PokeApiPokemonStat[]) => {
	const s = stats.find((s) => {
		return s.stat.name === stat;
	});
	return s?.base_stat ?? 0;
};

const getLevel = (stat: number): "high" | "low" | "mid" => {
	if (stat > 100) {
		return "high";
	}

	if (stat > 75) {
		return "mid";
	}

	return "low";
};

export function Stat({ stat, stats }: { stat: string; stats: PokeApiPokemonStat[] }) {
	const statValue = getStat(stat, stats);

	// They go up to 255, we scale it to 100 to use as a percentage
	const scaledStatValue = (statValue / 255) * 100;

	return (
		<div className={clsx("pokemon-stat", getLevel(statValue))}>
			<div className="pokemon-stat-value">{statValue}</div>
			<div className="pokemon-stat-inner" style={{ width: `${scaledStatValue}%` }} />
		</div>
	);
}
