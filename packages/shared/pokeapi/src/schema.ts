import { ZodiosHooks } from "@alex-mcgovern/zodios-react";
import { Zodios, makeApi } from "@zodios/core";
import { z } from "zod";

const AbilitySummary = z.object({ name: z.string().max(100), url: z.string().url() }).passthrough();
const PaginatedAbilitySummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(AbilitySummary),
	})
	.partial()
	.passthrough();
const GenerationSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const LanguageSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const AbilityName = z
	.object({ language: LanguageSummary, name: z.string().max(100) })
	.passthrough();
const AbilityEffectText = z
	.object({
		effect: z.string().max(6000),
		language: LanguageSummary,
		short_effect: z.string().max(300),
	})
	.passthrough();
const VersionGroupSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const AbilityChangeEffectText = z
	.object({ effect: z.string().max(6000), language: LanguageSummary })
	.passthrough();
const AbilityChange = z
	.object({
		effect_entries: z.array(AbilityChangeEffectText),
		version_group: VersionGroupSummary,
	})
	.passthrough();
const AbilityFlavorText = z
	.object({
		flavor_text: z.string(),
		language: LanguageSummary,
		version_group: VersionGroupSummary,
	})
	.passthrough();
const AbilityDetail = z
	.object({
		effect_changes: z.array(AbilityChange),
		effect_entries: z.array(AbilityEffectText),
		flavor_text_entries: z.array(AbilityFlavorText),
		generation: GenerationSummary,
		id: z.number().int(),
		is_main_series: z.boolean().optional(),
		name: z.string().max(100),
		names: z.array(AbilityName),
		pokemon: z.array(
			z
				.object({
					is_hidden: z.boolean(),
					pokemon: z.object({ name: z.string(), url: z.string().url() }).passthrough(),
					slot: z.number().int(),
				})
				.passthrough(),
		),
	})
	.passthrough();
const BerrySummary = z.object({ name: z.string().max(100), url: z.string().url() }).passthrough();
const PaginatedBerrySummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(BerrySummary),
	})
	.partial()
	.passthrough();
const BerryFirmnessSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const ItemSummary = z.object({ name: z.string().max(100), url: z.string().url() }).passthrough();
const TypeSummary = z.object({ name: z.string().max(100), url: z.string().url() }).passthrough();
const BerryDetail = z
	.object({
		firmness: BerryFirmnessSummary,
		flavors: z.array(
			z
				.object({
					flavor: z
						.object({ name: z.string(), url: z.string().url() })
						.partial()
						.passthrough(),
					potency: z.number().int(),
				})
				.passthrough(),
		),
		growth_time: z.number().int(),
		id: z.number().int(),
		item: ItemSummary,
		max_harvest: z.number().int(),
		name: z.string().max(100),
		natural_gift_power: z.number().int(),
		natural_gift_type: TypeSummary,
		size: z.number().int(),
		smoothness: z.number().int(),
		soil_dryness: z.number().int(),
	})
	.passthrough();
const PaginatedBerryFirmnessSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(BerryFirmnessSummary),
	})
	.partial()
	.passthrough();
const BerryFirmnessName = z
	.object({ language: LanguageSummary, name: z.string().max(100) })
	.passthrough();
const BerryFirmnessDetail = z
	.object({
		berries: z.array(BerrySummary),
		id: z.number().int(),
		name: z.string().max(100),
		names: z.array(BerryFirmnessName),
	})
	.passthrough();
const BerryFlavorSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const PaginatedBerryFlavorSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(BerryFlavorSummary),
	})
	.partial()
	.passthrough();
const ContestTypeSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const BerryFlavorName = z
	.object({ language: LanguageSummary, name: z.string().max(100) })
	.passthrough();
const BerryFlavorDetail = z
	.object({
		berries: z.array(
			z
				.object({
					berry: z
						.object({ name: z.string(), url: z.string().url() })
						.partial()
						.passthrough(),
					potency: z.number().int(),
				})
				.passthrough(),
		),
		contest_type: ContestTypeSummary,
		id: z.number().int(),
		name: z.string().max(100),
		names: z.array(BerryFlavorName),
	})
	.passthrough();
const CharacteristicSummary = z.object({ url: z.string().url() }).passthrough();
const PaginatedCharacteristicSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(CharacteristicSummary),
	})
	.partial()
	.passthrough();
const StatSummary = z.object({ name: z.string().max(100), url: z.string().url() }).passthrough();
const CharacteristicDescription = z
	.object({
		description: z.string().max(1000).optional(),
		language: LanguageSummary,
	})
	.passthrough();
const CharacteristicDetail = z
	.object({
		descriptions: z.array(CharacteristicDescription),
		gene_modulo: z.number().int(),
		highest_stat: StatSummary,
		id: z.number().int(),
		possible_values: z.array(z.number()),
	})
	.passthrough();
const PaginatedContestTypeSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(ContestTypeSummary),
	})
	.partial()
	.passthrough();
const ContestTypeName = z
	.object({
		color: z.string().max(10),
		language: LanguageSummary,
		name: z.string().max(100),
	})
	.passthrough();
const ContestTypeDetail = z
	.object({
		berry_flavor: BerryFlavorSummary,
		id: z.number().int(),
		name: z.string().max(100),
		names: z.array(ContestTypeName),
	})
	.passthrough();
const ContestEffectSummary = z.object({ url: z.string().url() }).passthrough();
const PaginatedContestEffectSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(ContestEffectSummary),
	})
	.partial()
	.passthrough();
const ContestEffectEffectText = z
	.object({ effect: z.string().max(6000), language: LanguageSummary })
	.passthrough();
const ContestEffectFlavorText = z
	.object({ flavor_text: z.string().max(500), language: LanguageSummary })
	.passthrough();
const ContestEffectDetail = z
	.object({
		appeal: z.number().int(),
		effect_entries: z.array(ContestEffectEffectText),
		flavor_text_entries: z.array(ContestEffectFlavorText),
		id: z.number().int(),
		jam: z.number().int(),
	})
	.passthrough();
const EggGroupSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const PaginatedEggGroupSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(EggGroupSummary),
	})
	.partial()
	.passthrough();
const EggGroupName = z
	.object({ language: LanguageSummary, name: z.string().max(100) })
	.passthrough();
const EggGroupDetail = z
	.object({
		id: z.number().int(),
		name: z.string().max(100),
		names: z.array(EggGroupName),
		pokemon_species: z.array(
			z
				.object({
					name: z.string().optional(),
					url: z.string().url().optional(),
				})
				.passthrough(),
		),
	})
	.passthrough();
const EncounterMethodSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const PaginatedEncounterMethodSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(EncounterMethodSummary),
	})
	.partial()
	.passthrough();
const EncounterMethodName = z
	.object({ language: LanguageSummary, name: z.string().max(100) })
	.passthrough();
const EncounterMethodDetail = z
	.object({
		id: z.number().int(),
		name: z.string().max(100),
		names: z.array(EncounterMethodName),
		order: z.union([z.number(), z.null()]).optional(),
	})
	.passthrough();
const EncounterConditionSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const PaginatedEncounterConditionSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(EncounterConditionSummary),
	})
	.partial()
	.passthrough();
const EncounterConditionValueSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const EncounterConditionName = z
	.object({ language: LanguageSummary, name: z.string().max(100) })
	.passthrough();
const EncounterConditionDetail = z
	.object({
		id: z.number().int(),
		name: z.string().max(100),
		names: z.array(EncounterConditionName),
		values: z.array(EncounterConditionValueSummary),
	})
	.passthrough();
const PaginatedEncounterConditionValueSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(EncounterConditionValueSummary),
	})
	.partial()
	.passthrough();
const EncounterConditionValueName = z
	.object({ language: LanguageSummary, name: z.string().max(100) })
	.passthrough();
const EncounterConditionValueDetail = z
	.object({
		condition: EncounterConditionSummary,
		id: z.number().int(),
		name: z.string().max(100),
		names: z.array(EncounterConditionValueName),
	})
	.passthrough();
const EvolutionChainSummary = z.object({ url: z.string().url() }).passthrough();
const PaginatedEvolutionChainSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(EvolutionChainSummary),
	})
	.partial()
	.passthrough();
const EvolutionChainDetail = z
	.object({
		baby_trigger_item: ItemSummary,
		chain: z
			.object({
				evolution_details: z.array(z.unknown()),
				evolves_to: z.array(
					z
						.object({
							evolution_details: z.array(
								z
									.object({
										gender: z
											.object({ name: z.string(), url: z.string().url() })
											.passthrough()
											.nullable(),
										held_item: z
											.object({ name: z.string(), url: z.string().url() })
											.passthrough()
											.nullable(),
										item: z
											.object({ name: z.string(), url: z.string().url() })
											.passthrough()
											.nullable(),
										known_move: z.unknown().nullable(),
										known_move_type: z.unknown().nullable(),
										location: z
											.object({ name: z.string(), url: z.string().url() })
											.passthrough()
											.nullable(),
										min_affection: z.number().int().nullable(),
										min_beauty: z.number().int().nullable(),
										min_happiness: z.number().int().nullable(),
										min_level: z.number().int().nullable(),
										needs_overworld_rain: z.boolean().nullable(),
										party_species: z.string().nullable(),
										party_type: z.string().nullable(),
										relative_physical_stats: z.string().nullable(),
										time_of_day: z.string(),
										trade_species: z.string().nullable(),
										trigger: z
											.object({ name: z.string(), url: z.string().url() })
											.passthrough(),
										turn_upside_down: z.boolean(),
									})
									.passthrough(),
							),
							is_baby: z.boolean(),
							species: z
								.object({ name: z.string(), url: z.string().url() })
								.passthrough(),
						})
						.passthrough(),
				),
				is_baby: z.boolean(),
				species: z.object({ name: z.string(), url: z.string().url() }).passthrough(),
			})
			.passthrough(),
		id: z.number().int(),
	})
	.passthrough();
const EvolutionTriggerSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const PaginatedEvolutionTriggerSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(EvolutionTriggerSummary),
	})
	.partial()
	.passthrough();
const EvolutionTriggerName = z
	.object({ language: LanguageSummary, name: z.string().max(100) })
	.passthrough();
const EvolutionTriggerDetail = z
	.object({
		id: z.number().int(),
		name: z.string().max(100),
		names: z.array(EvolutionTriggerName),
		pokemon_species: z.array(
			z.object({ name: z.string(), url: z.string().url() }).passthrough(),
		),
	})
	.passthrough();
const PaginatedGenerationSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(GenerationSummary),
	})
	.partial()
	.passthrough();
const RegionSummary = z.object({ name: z.string().max(100), url: z.string().url() }).passthrough();
const MoveSummary = z.object({ name: z.string().max(100), url: z.string().url() }).passthrough();
const GenerationName = z
	.object({ language: LanguageSummary, name: z.string().max(100) })
	.passthrough();
const PokemonSpeciesSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const GenerationDetail = z
	.object({
		abilities: z.array(AbilitySummary),
		id: z.number().int(),
		main_region: RegionSummary,
		moves: z.array(MoveSummary),
		name: z.string().max(100),
		names: z.array(GenerationName),
		pokemon_species: z.array(PokemonSpeciesSummary),
		types: z.array(TypeSummary),
		version_groups: z.array(VersionGroupSummary),
	})
	.passthrough();
const GenderSummary = z.object({ name: z.string().max(100), url: z.string().url() }).passthrough();
const PaginatedGenderSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(GenderSummary),
	})
	.partial()
	.passthrough();
const GenderDetail = z
	.object({
		id: z.number().int(),
		name: z.string().max(100),
		pokemon_species_details: z.array(
			z
				.object({
					pokemon_species: z
						.object({ name: z.string(), url: z.string().url() })
						.passthrough(),
					rate: z.number().int(),
				})
				.passthrough(),
		),
		required_for_evolution: z.array(
			z.object({ name: z.string(), url: z.string().url() }).passthrough(),
		),
	})
	.passthrough();
const GrowthRateSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const PaginatedGrowthRateSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(GrowthRateSummary),
	})
	.partial()
	.passthrough();
const GrowthRateDescription = z
	.object({
		description: z.string().max(1000).optional(),
		language: LanguageSummary,
	})
	.passthrough();
const Experience = z
	.object({ experience: z.number().int(), level: z.number().int() })
	.passthrough();
const GrowthRateDetail = z
	.object({
		descriptions: z.array(GrowthRateDescription),
		formula: z.string().max(500),
		id: z.number().int(),
		levels: z.array(Experience),
		name: z.string().max(100),
		pokemon_species: z.array(PokemonSpeciesSummary),
	})
	.passthrough();
const PaginatedItemSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(ItemSummary),
	})
	.partial()
	.passthrough();
const ItemFlingEffectSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const ItemCategorySummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const ItemEffectText = z
	.object({
		effect: z.string().max(6000),
		language: LanguageSummary,
		short_effect: z.string().max(300),
	})
	.passthrough();
const ItemFlavorText = z
	.object({
		language: LanguageSummary,
		text: z.string(),
		version_group: VersionGroupSummary,
	})
	.passthrough();
const ItemGameIndex = z
	.object({ game_index: z.number().int(), generation: GenerationSummary })
	.passthrough();
const ItemName = z.object({ language: LanguageSummary, name: z.string().max(100) }).passthrough();
const ItemDetail = z
	.object({
		attributes: z.array(z.object({ name: z.string(), url: z.string().url() }).passthrough()),
		baby_trigger_for: z.object({ url: z.string().url() }).passthrough(),
		category: ItemCategorySummary,
		cost: z.union([z.number(), z.null()]).optional(),
		effect_entries: z.array(ItemEffectText),
		flavor_text_entries: z.array(ItemFlavorText),
		fling_effect: ItemFlingEffectSummary,
		fling_power: z.union([z.number(), z.null()]).optional(),
		game_indices: z.array(ItemGameIndex),
		held_by_pokemon: z.array(
			z
				.object({
					pokemon: z.object({ name: z.string(), url: z.string().url() }).passthrough(),
					"version-details": z.array(
						z
							.object({
								rarity: z.number().int(),
								version: z
									.object({ name: z.string(), url: z.string().url() })
									.passthrough(),
							})
							.passthrough(),
					),
				})
				.passthrough(),
		),
		id: z.number().int(),
		machines: z.array(
			z
				.object({
					machine: z.string().url(),
					version_group: z
						.object({ name: z.string(), url: z.string().url() })
						.passthrough(),
				})
				.passthrough(),
		),
		name: z.string().max(100),
		names: z.array(ItemName),
		sprites: z.object({ default: z.string().url() }).passthrough(),
	})
	.passthrough();
const PaginatedItemCategorySummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(ItemCategorySummary),
	})
	.partial()
	.passthrough();
const ItemCategoryName = z
	.object({ language: LanguageSummary, name: z.string().max(100) })
	.passthrough();
const ItemPocketSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const ItemCategoryDetail = z
	.object({
		id: z.number().int(),
		items: z.array(ItemSummary),
		name: z.string().max(100),
		names: z.array(ItemCategoryName),
		pocket: ItemPocketSummary,
	})
	.passthrough();
const ItemAttributeSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const PaginatedItemAttributeSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(ItemAttributeSummary),
	})
	.partial()
	.passthrough();
const ItemAttributeDescription = z
	.object({
		description: z.string().max(1000).optional(),
		language: LanguageSummary,
	})
	.passthrough();
const ItemAttributeName = z
	.object({ language: LanguageSummary, name: z.string().max(100) })
	.passthrough();
const ItemAttributeDetail = z
	.object({
		descriptions: z.array(ItemAttributeDescription),
		id: z.number().int(),
		items: z.array(z.object({ name: z.string(), url: z.string().url() }).passthrough()),
		name: z.string().max(100),
		names: z.array(ItemAttributeName),
	})
	.passthrough();
const PaginatedItemFlingEffectSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(ItemFlingEffectSummary),
	})
	.partial()
	.passthrough();
const ItemFlingEffectEffectText = z
	.object({ effect: z.string().max(6000), language: LanguageSummary })
	.passthrough();
const ItemFlingEffectDetail = z
	.object({
		effect_entries: z.array(ItemFlingEffectEffectText),
		id: z.number().int(),
		items: z.array(ItemSummary),
		name: z.string().max(100),
	})
	.passthrough();
const PaginatedItemPocketSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(ItemPocketSummary),
	})
	.partial()
	.passthrough();
const ItemPocketName = z
	.object({ language: LanguageSummary, name: z.string().max(100) })
	.passthrough();
const ItemPocketDetail = z
	.object({
		categories: z.array(ItemCategorySummary),
		id: z.number().int(),
		name: z.string().max(100),
		names: z.array(ItemPocketName),
	})
	.passthrough();
const PaginatedLanguageSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(LanguageSummary),
	})
	.partial()
	.passthrough();
const LanguageName = z
	.object({ language: LanguageSummary, name: z.string().max(100) })
	.passthrough();
const LanguageDetail = z
	.object({
		id: z.number().int(),
		iso639: z.string().max(10),
		iso3166: z.string().max(2),
		name: z.string().max(100),
		names: z.array(LanguageName),
		official: z.boolean().optional(),
	})
	.passthrough();
const LocationSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const PaginatedLocationSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(LocationSummary),
	})
	.partial()
	.passthrough();
const LocationName = z
	.object({ language: LanguageSummary, name: z.string().max(100) })
	.passthrough();
const LocationGameIndex = z
	.object({ game_index: z.number().int(), generation: GenerationSummary })
	.passthrough();
const LocationAreaSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const LocationDetail = z
	.object({
		areas: z.array(LocationAreaSummary),
		game_indices: z.array(LocationGameIndex),
		id: z.number().int(),
		name: z.string().max(100),
		names: z.array(LocationName),
		region: RegionSummary,
	})
	.passthrough();
const PaginatedLocationAreaSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(LocationAreaSummary),
	})
	.partial()
	.passthrough();
const LocationAreaName = z
	.object({ language: LanguageSummary, name: z.string().max(100) })
	.passthrough();
const LocationAreaDetail = z
	.object({
		encounter_method_rates: z.array(
			z
				.object({
					encounter_method: z
						.object({ name: z.string(), url: z.string().url() })
						.passthrough(),
					version_details: z.array(
						z
							.object({
								rate: z.number().int(),
								version: z
									.object({ name: z.string(), url: z.string().url() })
									.passthrough(),
							})
							.passthrough(),
					),
				})
				.passthrough(),
		),
		game_index: z.number().int(),
		id: z.number().int(),
		location: LocationSummary,
		name: z.string().max(100),
		names: z.array(LocationAreaName),
		pokemon_encounters: z.array(
			z
				.object({
					pokemon: z.object({ name: z.string(), url: z.string().url() }).passthrough(),
					version_details: z.array(
						z
							.object({
								encounter_details: z
									.object({
										chance: z.number().int(),
										condition_values: z
											.object({ name: z.string(), url: z.string().url() })
											.passthrough()
											.optional(),
										max_level: z.number().int(),
										method: z
											.object({ name: z.string(), url: z.string().url() })
											.passthrough(),
										min_level: z.number().int(),
									})
									.passthrough(),
								max_chance: z.number().int(),
								version: z
									.object({ name: z.string(), url: z.string().url() })
									.passthrough(),
							})
							.passthrough(),
					),
				})
				.passthrough(),
		),
	})
	.passthrough();
const MachineSummary = z.object({ url: z.string().url() }).passthrough();
const PaginatedMachineSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(MachineSummary),
	})
	.partial()
	.passthrough();
const MachineDetail = z
	.object({
		id: z.number().int(),
		item: ItemSummary,
		move: MoveSummary,
		version_group: VersionGroupSummary,
	})
	.passthrough();
const PaginatedMoveSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(MoveSummary),
	})
	.partial()
	.passthrough();
const MoveDamageClassSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const MoveMetaAilmentSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const MoveMetaCategorySummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const MoveMeta = z
	.object({
		ailment: MoveMetaAilmentSummary,
		ailment_chance: z.union([z.number(), z.null()]).optional(),
		category: MoveMetaCategorySummary,
		crit_rate: z.union([z.number(), z.null()]).optional(),
		drain: z.union([z.number(), z.null()]).optional(),
		flinch_chance: z.union([z.number(), z.null()]).optional(),
		healing: z.union([z.number(), z.null()]).optional(),
		max_hits: z.union([z.number(), z.null()]).optional(),
		max_turns: z.union([z.number(), z.null()]).optional(),
		min_hits: z.union([z.number(), z.null()]).optional(),
		min_turns: z.union([z.number(), z.null()]).optional(),
		stat_chance: z.union([z.number(), z.null()]).optional(),
	})
	.passthrough();
const MoveName = z.object({ language: LanguageSummary, name: z.string().max(100) }).passthrough();
const MoveChange = z
	.object({
		accuracy: z.union([z.number(), z.null()]).optional(),
		effect_chance: z.number().int(),
		effect_entries: z.array(
			z
				.object({
					effect: z.string(),
					language: z.object({ name: z.string(), url: z.string().url() }).passthrough(),
					short_effect: z.string(),
				})
				.passthrough(),
		),
		power: z.union([z.number(), z.null()]).optional(),
		pp: z.union([z.number(), z.null()]).optional(),
		type: TypeSummary,
		version_group: VersionGroupSummary,
	})
	.passthrough();
const SuperContestEffectSummary = z.object({ url: z.string().url() }).passthrough();
const MoveTargetSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const MoveFlavorText = z
	.object({
		flavor_text: z.string(),
		language: LanguageSummary,
		version_group: VersionGroupSummary,
	})
	.passthrough();
const MoveDetail = z
	.object({
		accuracy: z.union([z.number(), z.null()]).optional(),
		contest_combos: z
			.object({
				normal: z
					.object({
						use_after: z
							.array(
								z.object({ name: z.string(), url: z.string().url() }).passthrough(),
							)
							.nullable(),
						use_before: z
							.array(
								z.object({ name: z.string(), url: z.string().url() }).passthrough(),
							)
							.nullable(),
					})
					.passthrough(),
				super: z
					.object({
						use_after: z
							.array(
								z.object({ name: z.string(), url: z.string().url() }).passthrough(),
							)
							.nullable(),
						use_before: z
							.array(
								z.object({ name: z.string(), url: z.string().url() }).passthrough(),
							)
							.nullable(),
					})
					.passthrough(),
			})
			.passthrough(),
		contest_effect: ContestEffectSummary,
		contest_type: ContestTypeSummary,
		damage_class: MoveDamageClassSummary,
		effect_chance: z.number().int(),
		effect_changes: z.array(
			z
				.object({
					effect_entries: z.array(
						z
							.object({
								effect: z.string(),
								language: z
									.object({ name: z.string(), url: z.string().url() })
									.passthrough(),
							})
							.passthrough(),
					),
					version_group: z
						.object({ name: z.string(), url: z.string().url() })
						.passthrough(),
				})
				.passthrough(),
		),
		effect_entries: z.array(
			z
				.object({
					effect: z.string(),
					language: z.object({ name: z.string(), url: z.string().url() }).passthrough(),
					short_effect: z.string(),
				})
				.passthrough(),
		),
		flavor_text_entries: z.array(MoveFlavorText),
		generation: GenerationSummary,
		id: z.number().int(),
		learned_by_pokemon: z.array(
			z.object({ name: z.string(), url: z.string().url() }).passthrough(),
		),
		machines: z.array(
			z
				.object({
					machine: z.object({ url: z.string().url() }).passthrough(),
					version_group: z
						.object({ name: z.string(), url: z.string().url() })
						.passthrough(),
				})
				.passthrough(),
		),
		meta: MoveMeta,
		name: z.string().max(100),
		names: z.array(MoveName),
		past_values: z.array(MoveChange),
		power: z.union([z.number(), z.null()]).optional(),
		pp: z.union([z.number(), z.null()]).optional(),
		priority: z.union([z.number(), z.null()]).optional(),
		stat_changes: z.array(
			z
				.object({
					change: z.number().int(),
					stat: z.object({ name: z.string(), url: z.string().url() }).passthrough(),
				})
				.passthrough(),
		),
		super_contest_effect: SuperContestEffectSummary,
		target: MoveTargetSummary,
		type: TypeSummary,
	})
	.passthrough();
const PaginatedMoveMetaAilmentSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(MoveMetaAilmentSummary),
	})
	.partial()
	.passthrough();
const MoveMetaAilmentName = z
	.object({ language: LanguageSummary, name: z.string().max(100) })
	.passthrough();
const MoveMetaAilmentDetail = z
	.object({
		id: z.number().int(),
		moves: z.array(z.object({ name: z.string(), url: z.string().url() }).passthrough()),
		name: z.string().max(100),
		names: z.array(MoveMetaAilmentName),
	})
	.passthrough();
const MoveBattleStyleSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const PaginatedMoveBattleStyleSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(MoveBattleStyleSummary),
	})
	.partial()
	.passthrough();
const MoveBattleStyleName = z
	.object({ language: LanguageSummary, name: z.string().max(100) })
	.passthrough();
const MoveBattleStyleDetail = z
	.object({
		id: z.number().int(),
		name: z.string().max(100),
		names: z.array(MoveBattleStyleName),
	})
	.passthrough();
const PaginatedMoveMetaCategorySummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(MoveMetaCategorySummary),
	})
	.partial()
	.passthrough();
const MoveMetaCategoryDescription = z
	.object({
		description: z.string().max(1000).optional(),
		language: LanguageSummary,
	})
	.passthrough();
const MoveMetaCategoryDetail = z
	.object({
		descriptions: z.array(MoveMetaCategoryDescription),
		id: z.number().int(),
		moves: z.array(z.object({ name: z.string(), url: z.string().url() }).passthrough()),
		name: z.string().max(100),
	})
	.passthrough();
const PaginatedMoveDamageClassSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(MoveDamageClassSummary),
	})
	.partial()
	.passthrough();
const MoveDamageClassDescription = z
	.object({
		description: z.string().max(1000).optional(),
		language: LanguageSummary,
	})
	.passthrough();
const MoveDamageClassName = z
	.object({ language: LanguageSummary, name: z.string().max(100) })
	.passthrough();
const MoveDamageClassDetail = z
	.object({
		descriptions: z.array(MoveDamageClassDescription),
		id: z.number().int(),
		moves: z.array(MoveSummary),
		name: z.string().max(100),
		names: z.array(MoveDamageClassName),
	})
	.passthrough();
const MoveLearnMethodSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const PaginatedMoveLearnMethodSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(MoveLearnMethodSummary),
	})
	.partial()
	.passthrough();
const MoveLearnMethodName = z
	.object({ language: LanguageSummary, name: z.string().max(100) })
	.passthrough();
const MoveLearnMethodDescription = z
	.object({
		description: z.string().max(1000).optional(),
		language: LanguageSummary,
	})
	.passthrough();
const MoveLearnMethodDetail = z
	.object({
		descriptions: z.array(MoveLearnMethodDescription),
		id: z.number().int(),
		name: z.string().max(100),
		names: z.array(MoveLearnMethodName),
		version_groups: z.array(
			z.object({ name: z.string(), url: z.string().url() }).passthrough(),
		),
	})
	.passthrough();
const PaginatedMoveTargetSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(MoveTargetSummary),
	})
	.partial()
	.passthrough();
const MoveTargetDescription = z
	.object({
		description: z.string().max(1000).optional(),
		language: LanguageSummary,
	})
	.passthrough();
const MoveTargetName = z
	.object({ language: LanguageSummary, name: z.string().max(100) })
	.passthrough();
const MoveTargetDetail = z
	.object({
		descriptions: z.array(MoveTargetDescription),
		id: z.number().int(),
		moves: z.array(MoveSummary),
		name: z.string().max(100),
		names: z.array(MoveTargetName),
	})
	.passthrough();
const NatureSummary = z.object({ name: z.string().max(100), url: z.string().url() }).passthrough();
const PaginatedNatureSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(NatureSummary),
	})
	.partial()
	.passthrough();
const NatureBattleStylePreference = z
	.object({
		high_hp_preference: z.number().int(),
		low_hp_preference: z.number().int(),
		move_battle_style: MoveBattleStyleSummary,
	})
	.passthrough();
const NatureName = z.object({ language: LanguageSummary, name: z.string().max(100) }).passthrough();
const NatureDetail = z
	.object({
		berries: z.array(BerrySummary),
		decreased_stat: StatSummary,
		hates_flavor: BerryFlavorSummary,
		id: z.number().int(),
		increased_stat: StatSummary,
		likes_flavor: BerryFlavorSummary,
		move_battle_style_preferences: z.array(NatureBattleStylePreference),
		name: z.string().max(100),
		names: z.array(NatureName),
		pokeathlon_stat_changes: z.array(
			z
				.object({
					max_change: z.number().int(),
					pokeathlon_stat: z
						.object({ name: z.string(), url: z.string().url() })
						.passthrough(),
				})
				.passthrough(),
		),
	})
	.passthrough();
const PalParkAreaSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const PaginatedPalParkAreaSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(PalParkAreaSummary),
	})
	.partial()
	.passthrough();
const PalParkAreaName = z
	.object({ language: LanguageSummary, name: z.string().max(100) })
	.passthrough();
const PalParkAreaDetail = z
	.object({
		id: z.number().int(),
		name: z.string().max(100),
		names: z.array(PalParkAreaName),
		pokemon_encounters: z.array(
			z
				.object({
					base_score: z.number().int(),
					"pokemon-species": z
						.object({ name: z.string(), url: z.string().url() })
						.passthrough(),
					rate: z.number().int(),
				})
				.passthrough(),
		),
	})
	.passthrough();
const PokedexSummary = z.object({ name: z.string().max(100), url: z.string().url() }).passthrough();
const PaginatedPokedexSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(PokedexSummary),
	})
	.partial()
	.passthrough();
const PokedexDescription = z
	.object({
		description: z.string().max(1000).optional(),
		language: LanguageSummary,
	})
	.passthrough();
const PokedexName = z
	.object({ language: LanguageSummary, name: z.string().max(100) })
	.passthrough();
const PokedexDetail = z
	.object({
		descriptions: z.array(PokedexDescription),
		id: z.number().int(),
		is_main_series: z.boolean().optional(),
		name: z.string().max(100),
		names: z.array(PokedexName),
		pokemon_entries: z.array(
			z
				.object({
					entry_number: z.number().int(),
					pokemon_species: z
						.object({ name: z.string(), url: z.string().url() })
						.passthrough(),
				})
				.passthrough(),
		),
		region: RegionSummary,
		version_groups: z.array(
			z.object({ name: z.string(), url: z.string().url() }).passthrough(),
		),
	})
	.passthrough();
const PokemonSummary = z.object({ name: z.string().max(100), url: z.string().url() }).passthrough();
const PaginatedPokemonSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(PokemonSummary),
	})
	.partial()
	.passthrough();
const PokemonFormSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const VersionSummary = z.object({ name: z.string().max(100), url: z.string().url() }).passthrough();
const PokemonGameIndex = z
	.object({ game_index: z.number().int(), version: VersionSummary })
	.passthrough();
const PokemonStat = z
	.object({
		base_stat: z.number().int(),
		effort: z.number().int(),
		stat: StatSummary,
	})
	.passthrough();
const PokemonDetail = z
	.object({
		abilities: z.array(
			z
				.object({
					ability: z.object({ name: z.string(), url: z.string().url() }).passthrough(),
					is_hidden: z.boolean(),
					slot: z.number().int(),
				})
				.passthrough(),
		),
		base_experience: z.union([z.number(), z.null()]).optional(),
		cries: z.object({ latest: z.string().url(), legacy: z.string().url() }).passthrough(),
		forms: z.array(PokemonFormSummary),
		game_indices: z.array(PokemonGameIndex),
		height: z.union([z.number(), z.null()]).optional(),
		held_items: z
			.object({
				item: z.object({ name: z.string(), url: z.string().url() }).passthrough(),
				version_details: z.array(
					z
						.object({
							rarity: z.number().int(),
							version: z
								.object({ name: z.string(), url: z.string().url() })
								.passthrough(),
						})
						.passthrough(),
				),
			})
			.passthrough(),
		id: z.number().int(),
		is_default: z.boolean().optional(),
		location_area_encounters: z.string(),
		moves: z.array(
			z
				.object({
					move: z.object({ name: z.string(), url: z.string().url() }).passthrough(),
					version_group_details: z.array(
						z
							.object({
								level_learned_at: z.number().int(),
								move_learn_method: z
									.object({ name: z.string(), url: z.string().url() })
									.passthrough(),
								version_group: z
									.object({ name: z.string(), url: z.string().url() })
									.passthrough(),
							})
							.passthrough(),
					),
				})
				.passthrough(),
		),
		name: z.string().max(100),
		order: z.union([z.number(), z.null()]).optional(),
		past_abilities: z.array(
			z
				.object({
					abilities: z.array(
						z
							.object({
								ability: z
									.object({ name: z.string(), url: z.string().url() })
									.passthrough(),
								is_hidden: z.boolean(),
								slot: z.number().int(),
							})
							.passthrough(),
					),
					generation: z.object({ name: z.string(), url: z.string().url() }).passthrough(),
				})
				.passthrough(),
		),
		past_types: z.array(
			z
				.object({
					generation: z.object({ name: z.string(), url: z.string().url() }).passthrough(),
					types: z.array(
						z
							.object({
								slot: z.number().int(),
								type: z
									.object({ name: z.string(), url: z.string().url() })
									.passthrough(),
							})
							.passthrough(),
					),
				})
				.passthrough(),
		),
		species: PokemonSpeciesSummary,
		sprites: z.record(z.string().url().nullable()),
		stats: z.array(PokemonStat),
		types: z.array(
			z
				.object({
					slot: z.number().int(),
					type: z.object({ name: z.string(), url: z.string().url() }).passthrough(),
				})
				.passthrough(),
		),
		weight: z.union([z.number(), z.null()]).optional(),
	})
	.passthrough();
const PokemonColorSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const PaginatedPokemonColorSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(PokemonColorSummary),
	})
	.partial()
	.passthrough();
const PokemonColorName = z
	.object({ language: LanguageSummary, name: z.string().max(100) })
	.passthrough();
const PokemonColorDetail = z
	.object({
		id: z.number().int(),
		name: z.string().max(100),
		names: z.array(PokemonColorName),
		pokemon_species: z.array(PokemonSpeciesSummary),
	})
	.passthrough();
const PaginatedPokemonFormSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(PokemonFormSummary),
	})
	.partial()
	.passthrough();
const PokemonFormDetail = z
	.object({
		form_name: z.string().max(30),
		form_names: z.array(
			z
				.object({
					language: z.object({ name: z.string(), url: z.string().url() }).passthrough(),
					name: z.string(),
				})
				.passthrough(),
		),
		form_order: z.union([z.number(), z.null()]).optional(),
		id: z.number().int(),
		is_battle_only: z.boolean().optional(),
		is_default: z.boolean().optional(),
		is_mega: z.boolean().optional(),
		name: z.string().max(100),
		names: z.array(
			z
				.object({
					language: z.object({ name: z.string(), url: z.string().url() }).passthrough(),
					name: z.string(),
				})
				.passthrough(),
		),
		order: z.union([z.number(), z.null()]).optional(),
		pokemon: PokemonSummary,
		sprites: z.record(z.string().url().nullable()),
		types: z.array(
			z
				.object({
					slot: z.number().int(),
					type: z.object({ name: z.string(), url: z.string().url() }).passthrough(),
				})
				.passthrough(),
		),
		version_group: VersionGroupSummary,
	})
	.passthrough();
const PokemonHabitatSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const PaginatedPokemonHabitatSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(PokemonHabitatSummary),
	})
	.partial()
	.passthrough();
const PokemonHabitatName = z
	.object({ language: LanguageSummary, name: z.string().max(100) })
	.passthrough();
const PokemonHabitatDetail = z
	.object({
		id: z.number().int(),
		name: z.string().max(100),
		names: z.array(PokemonHabitatName),
		pokemon_species: z.array(PokemonSpeciesSummary),
	})
	.passthrough();
const PokemonShapeSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const PaginatedPokemonShapeSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(PokemonShapeSummary),
	})
	.partial()
	.passthrough();
const PokemonShapeDetail = z
	.object({
		awesome_names: z.array(
			z
				.object({
					awesome_name: z.string(),
					language: z.object({ name: z.string(), url: z.string().url() }).passthrough(),
				})
				.passthrough(),
		),
		id: z.number().int(),
		name: z.string().max(100),
		names: z.array(z.object({ name: z.string(), url: z.string().url() }).passthrough()),
		pokemon_species: z.array(PokemonSpeciesSummary),
	})
	.passthrough();
const PaginatedPokemonSpeciesSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(PokemonSpeciesSummary),
	})
	.partial()
	.passthrough();
const PokemonDexEntry = z
	.object({ entry_number: z.number().int(), pokedex: PokedexSummary })
	.passthrough();
const PokemonSpeciesDescription = z
	.object({
		description: z.string().max(1000).optional(),
		language: LanguageSummary,
	})
	.passthrough();
const PokemonSpeciesFlavorText = z
	.object({
		flavor_text: z.string(),
		language: LanguageSummary,
		version: VersionSummary,
	})
	.passthrough();
const PokemonSpeciesDetail = z
	.object({
		base_happiness: z.union([z.number(), z.null()]).optional(),
		capture_rate: z.union([z.number(), z.null()]).optional(),
		color: PokemonColorSummary,
		egg_groups: z.array(z.object({ name: z.string(), url: z.string().url() }).passthrough()),
		evolution_chain: EvolutionChainSummary,
		evolves_from_species: PokemonSpeciesSummary,
		flavor_text_entries: z.array(PokemonSpeciesFlavorText),
		form_descriptions: z.array(PokemonSpeciesDescription),
		forms_switchable: z.boolean().optional(),
		gender_rate: z.union([z.number(), z.null()]).optional(),
		genera: z.array(
			z
				.object({
					genus: z.string(),
					language: z.object({ name: z.string(), url: z.string().url() }).passthrough(),
				})
				.passthrough(),
		),
		generation: GenerationSummary,
		growth_rate: GrowthRateSummary,
		habitat: PokemonHabitatSummary,
		has_gender_differences: z.boolean().optional(),
		hatch_counter: z.union([z.number(), z.null()]).optional(),
		id: z.number().int(),
		is_baby: z.boolean().optional(),
		is_legendary: z.boolean().optional(),
		is_mythical: z.boolean().optional(),
		name: z.string().max(100),
		names: z.array(
			z
				.object({
					language: z.object({ name: z.string(), url: z.string().url() }).passthrough(),
					name: z.string(),
				})
				.passthrough(),
		),
		order: z.union([z.number(), z.null()]).optional(),
		pal_park_encounters: z.array(
			z
				.object({
					area: z.object({ name: z.string(), url: z.string().url() }).passthrough(),
					base_score: z.number().int(),
					rate: z.number().int(),
				})
				.passthrough(),
		),
		pokedex_numbers: z.array(PokemonDexEntry),
		shape: PokemonShapeSummary,
		varieties: z.array(
			z
				.object({
					is_default: z.boolean(),
					pokemon: z.object({ name: z.string(), url: z.string().url() }).passthrough(),
				})
				.passthrough(),
		),
	})
	.passthrough();
const PokeathlonStatSummary = z
	.object({ name: z.string().max(100), url: z.string().url() })
	.passthrough();
const PaginatedPokeathlonStatSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(PokeathlonStatSummary),
	})
	.partial()
	.passthrough();
const PokeathlonStatName = z
	.object({ language: LanguageSummary, name: z.string().max(100) })
	.passthrough();
const PokeathlonStatDetail = z
	.object({
		affecting_natures: z
			.object({
				decrease: z.array(
					z
						.object({
							max_change: z.number().int().lte(-1),
							nature: z
								.object({ name: z.string(), url: z.string().url() })
								.passthrough(),
						})
						.passthrough(),
				),
				increase: z.array(
					z
						.object({
							max_change: z.number().int().gte(1),
							nature: z
								.object({ name: z.string(), url: z.string().url() })
								.passthrough(),
						})
						.passthrough(),
				),
			})
			.passthrough(),
		id: z.number().int(),
		name: z.string().max(100),
		names: z.array(PokeathlonStatName),
	})
	.passthrough();
const PaginatedRegionSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(RegionSummary),
	})
	.partial()
	.passthrough();
const RegionName = z.object({ language: LanguageSummary, name: z.string().max(100) }).passthrough();
const RegionDetail = z
	.object({
		id: z.number().int(),
		locations: z.array(LocationSummary),
		main_generation: GenerationSummary,
		name: z.string().max(100),
		names: z.array(RegionName),
		pokedexes: z.array(PokedexSummary),
		version_groups: z.array(
			z.object({ name: z.string(), url: z.string().url() }).passthrough(),
		),
	})
	.passthrough();
const PaginatedStatSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(StatSummary),
	})
	.partial()
	.passthrough();
const StatName = z.object({ language: LanguageSummary, name: z.string().max(100) }).passthrough();
const StatDetail = z
	.object({
		affecting_moves: z
			.object({
				decrease: z.array(
					z
						.object({
							change: z.number().int(),
							move: z
								.object({ name: z.string(), url: z.string().url() })
								.passthrough(),
						})
						.passthrough(),
				),
				increase: z.array(
					z
						.object({
							change: z.number().int(),
							move: z
								.object({ name: z.string(), url: z.string().url() })
								.passthrough(),
						})
						.passthrough(),
				),
			})
			.passthrough(),
		affecting_natures: z
			.object({
				decrease: z.array(
					z.object({ name: z.string(), url: z.string().url() }).passthrough(),
				),
				increase: z.array(
					z.object({ name: z.string(), url: z.string().url() }).passthrough(),
				),
			})
			.passthrough(),
		characteristics: z.array(CharacteristicSummary),
		game_index: z.number().int(),
		id: z.number().int(),
		is_battle_only: z.boolean().optional(),
		move_damage_class: MoveDamageClassSummary,
		name: z.string().max(100),
		names: z.array(StatName),
	})
	.passthrough();
const PaginatedSuperContestEffectSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(SuperContestEffectSummary),
	})
	.partial()
	.passthrough();
const SuperContestEffectFlavorText = z
	.object({ flavor_text: z.string().max(500), language: LanguageSummary })
	.passthrough();
const SuperContestEffectDetail = z
	.object({
		appeal: z.number().int(),
		flavor_text_entries: z.array(SuperContestEffectFlavorText),
		id: z.number().int(),
		moves: z.array(MoveSummary),
	})
	.passthrough();
const PaginatedTypeSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(TypeSummary),
	})
	.partial()
	.passthrough();
const TypeGameIndex = z
	.object({ game_index: z.number().int(), generation: GenerationSummary })
	.passthrough();
const TypeDetail = z
	.object({
		damage_relations: z
			.object({
				double_damage_from: z.array(
					z.object({ name: z.string(), url: z.string().url() }).passthrough(),
				),
				double_damage_to: z.array(
					z.object({ name: z.string(), url: z.string().url() }).passthrough(),
				),
				half_damage_from: z.array(
					z.object({ name: z.string(), url: z.string().url() }).passthrough(),
				),
				half_damage_to: z.array(
					z.object({ name: z.string(), url: z.string().url() }).passthrough(),
				),
				no_damage_from: z.array(
					z.object({ name: z.string(), url: z.string().url() }).passthrough(),
				),
				no_damage_to: z.array(
					z.object({ name: z.string(), url: z.string().url() }).passthrough(),
				),
			})
			.passthrough(),
		game_indices: z.array(TypeGameIndex),
		generation: GenerationSummary,
		id: z.number().int(),
		move_damage_class: MoveDamageClassSummary,
		moves: z.array(MoveSummary),
		name: z.string().max(100),
		names: z.array(AbilityName),
		past_damage_relations: z.array(
			z
				.object({
					damage_relations: z
						.object({
							double_damage_from: z.array(
								z.object({ name: z.string(), url: z.string().url() }).passthrough(),
							),
							double_damage_to: z.array(
								z.object({ name: z.string(), url: z.string().url() }).passthrough(),
							),
							half_damage_from: z.array(
								z.object({ name: z.string(), url: z.string().url() }).passthrough(),
							),
							half_damage_to: z.array(
								z.object({ name: z.string(), url: z.string().url() }).passthrough(),
							),
							no_damage_from: z.array(
								z.object({ name: z.string(), url: z.string().url() }).passthrough(),
							),
							no_damage_to: z.array(
								z.object({ name: z.string(), url: z.string().url() }).passthrough(),
							),
						})
						.passthrough(),
					generation: z.object({ name: z.string(), url: z.string().url() }).passthrough(),
				})
				.passthrough(),
		),
		pokemon: z.array(
			z
				.object({
					pokemon: z
						.object({ name: z.string(), url: z.string().url() })
						.partial()
						.passthrough()
						.optional(),
					slot: z.number().int().optional(),
				})
				.passthrough(),
		),
	})
	.passthrough();
const PaginatedVersionSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(VersionSummary),
	})
	.partial()
	.passthrough();
const VersionName = z
	.object({ language: LanguageSummary, name: z.string().max(100) })
	.passthrough();
const VersionDetail = z
	.object({
		id: z.number().int(),
		name: z.string().max(100),
		names: z.array(VersionName),
		version_group: VersionGroupSummary,
	})
	.passthrough();
const PaginatedVersionGroupSummaryList = z
	.object({
		count: z.number().int(),
		next: z.string().url().nullable(),
		previous: z.string().url().nullable(),
		results: z.array(VersionGroupSummary),
	})
	.partial()
	.passthrough();
const VersionGroupDetail = z
	.object({
		generation: GenerationSummary,
		id: z.number().int(),
		move_learn_methods: z.array(
			z.object({ name: z.string(), url: z.string().url() }).passthrough(),
		),
		name: z.string().max(100),
		order: z.union([z.number(), z.null()]).optional(),
		pokedexes: z.array(z.object({ name: z.string(), url: z.string().url() }).passthrough()),
		regions: z.array(z.object({ name: z.string(), url: z.string().url() }).passthrough()),
		versions: z.array(VersionSummary),
	})
	.passthrough();

export type PokeApiAbilitySummary = z.infer<typeof AbilitySummary>;
export type PokeApiPaginatedAbilitySummaryList = z.infer<typeof PaginatedAbilitySummaryList>;
export type PokeApiGenerationSummary = z.infer<typeof GenerationSummary>;
export type PokeApiLanguageSummary = z.infer<typeof LanguageSummary>;
export type PokeApiAbilityName = z.infer<typeof AbilityName>;
export type PokeApiAbilityEffectText = z.infer<typeof AbilityEffectText>;
export type PokeApiVersionGroupSummary = z.infer<typeof VersionGroupSummary>;
export type PokeApiAbilityChangeEffectText = z.infer<typeof AbilityChangeEffectText>;
export type PokeApiAbilityChange = z.infer<typeof AbilityChange>;
export type PokeApiAbilityFlavorText = z.infer<typeof AbilityFlavorText>;
export type PokeApiAbilityDetail = z.infer<typeof AbilityDetail>;
export type PokeApiBerrySummary = z.infer<typeof BerrySummary>;
export type PokeApiPaginatedBerrySummaryList = z.infer<typeof PaginatedBerrySummaryList>;
export type PokeApiBerryFirmnessSummary = z.infer<typeof BerryFirmnessSummary>;
export type PokeApiItemSummary = z.infer<typeof ItemSummary>;
export type PokeApiTypeSummary = z.infer<typeof TypeSummary>;
export type PokeApiBerryDetail = z.infer<typeof BerryDetail>;
export type PokeApiPaginatedBerryFirmnessSummaryList = z.infer<
	typeof PaginatedBerryFirmnessSummaryList
>;
export type PokeApiBerryFirmnessName = z.infer<typeof BerryFirmnessName>;
export type PokeApiBerryFirmnessDetail = z.infer<typeof BerryFirmnessDetail>;
export type PokeApiBerryFlavorSummary = z.infer<typeof BerryFlavorSummary>;
export type PokeApiPaginatedBerryFlavorSummaryList = z.infer<
	typeof PaginatedBerryFlavorSummaryList
>;
export type PokeApiContestTypeSummary = z.infer<typeof ContestTypeSummary>;
export type PokeApiBerryFlavorName = z.infer<typeof BerryFlavorName>;
export type PokeApiBerryFlavorDetail = z.infer<typeof BerryFlavorDetail>;
export type PokeApiCharacteristicSummary = z.infer<typeof CharacteristicSummary>;
export type PokeApiPaginatedCharacteristicSummaryList = z.infer<
	typeof PaginatedCharacteristicSummaryList
>;
export type PokeApiStatSummary = z.infer<typeof StatSummary>;
export type PokeApiCharacteristicDescription = z.infer<typeof CharacteristicDescription>;
export type PokeApiCharacteristicDetail = z.infer<typeof CharacteristicDetail>;
export type PokeApiPaginatedContestTypeSummaryList = z.infer<
	typeof PaginatedContestTypeSummaryList
>;
export type PokeApiContestTypeName = z.infer<typeof ContestTypeName>;
export type PokeApiContestTypeDetail = z.infer<typeof ContestTypeDetail>;
export type PokeApiContestEffectSummary = z.infer<typeof ContestEffectSummary>;
export type PokeApiPaginatedContestEffectSummaryList = z.infer<
	typeof PaginatedContestEffectSummaryList
>;
export type PokeApiContestEffectEffectText = z.infer<typeof ContestEffectEffectText>;
export type PokeApiContestEffectFlavorText = z.infer<typeof ContestEffectFlavorText>;
export type PokeApiContestEffectDetail = z.infer<typeof ContestEffectDetail>;
export type PokeApiEggGroupSummary = z.infer<typeof EggGroupSummary>;
export type PokeApiPaginatedEggGroupSummaryList = z.infer<typeof PaginatedEggGroupSummaryList>;
export type PokeApiEggGroupName = z.infer<typeof EggGroupName>;
export type PokeApiEggGroupDetail = z.infer<typeof EggGroupDetail>;
export type PokeApiEncounterMethodSummary = z.infer<typeof EncounterMethodSummary>;
export type PokeApiPaginatedEncounterMethodSummaryList = z.infer<
	typeof PaginatedEncounterMethodSummaryList
>;
export type PokeApiEncounterMethodName = z.infer<typeof EncounterMethodName>;
export type PokeApiEncounterMethodDetail = z.infer<typeof EncounterMethodDetail>;
export type PokeApiEncounterConditionSummary = z.infer<typeof EncounterConditionSummary>;
export type PokeApiPaginatedEncounterConditionSummaryList = z.infer<
	typeof PaginatedEncounterConditionSummaryList
>;
export type PokeApiEncounterConditionValueSummary = z.infer<typeof EncounterConditionValueSummary>;
export type PokeApiEncounterConditionName = z.infer<typeof EncounterConditionName>;
export type PokeApiEncounterConditionDetail = z.infer<typeof EncounterConditionDetail>;
export type PokeApiPaginatedEncounterConditionValueSummaryList = z.infer<
	typeof PaginatedEncounterConditionValueSummaryList
>;
export type PokeApiEncounterConditionValueName = z.infer<typeof EncounterConditionValueName>;
export type PokeApiEncounterConditionValueDetail = z.infer<typeof EncounterConditionValueDetail>;
export type PokeApiEvolutionChainSummary = z.infer<typeof EvolutionChainSummary>;
export type PokeApiPaginatedEvolutionChainSummaryList = z.infer<
	typeof PaginatedEvolutionChainSummaryList
>;
export type PokeApiEvolutionChainDetail = z.infer<typeof EvolutionChainDetail>;
export type PokeApiEvolutionTriggerSummary = z.infer<typeof EvolutionTriggerSummary>;
export type PokeApiPaginatedEvolutionTriggerSummaryList = z.infer<
	typeof PaginatedEvolutionTriggerSummaryList
>;
export type PokeApiEvolutionTriggerName = z.infer<typeof EvolutionTriggerName>;
export type PokeApiEvolutionTriggerDetail = z.infer<typeof EvolutionTriggerDetail>;
export type PokeApiPaginatedGenerationSummaryList = z.infer<typeof PaginatedGenerationSummaryList>;
export type PokeApiRegionSummary = z.infer<typeof RegionSummary>;
export type PokeApiMoveSummary = z.infer<typeof MoveSummary>;
export type PokeApiGenerationName = z.infer<typeof GenerationName>;
export type PokeApiPokemonSpeciesSummary = z.infer<typeof PokemonSpeciesSummary>;
export type PokeApiGenerationDetail = z.infer<typeof GenerationDetail>;
export type PokeApiGenderSummary = z.infer<typeof GenderSummary>;
export type PokeApiPaginatedGenderSummaryList = z.infer<typeof PaginatedGenderSummaryList>;
export type PokeApiGenderDetail = z.infer<typeof GenderDetail>;
export type PokeApiGrowthRateSummary = z.infer<typeof GrowthRateSummary>;
export type PokeApiPaginatedGrowthRateSummaryList = z.infer<typeof PaginatedGrowthRateSummaryList>;
export type PokeApiGrowthRateDescription = z.infer<typeof GrowthRateDescription>;
export type PokeApiExperience = z.infer<typeof Experience>;
export type PokeApiGrowthRateDetail = z.infer<typeof GrowthRateDetail>;
export type PokeApiPaginatedItemSummaryList = z.infer<typeof PaginatedItemSummaryList>;
export type PokeApiItemFlingEffectSummary = z.infer<typeof ItemFlingEffectSummary>;
export type PokeApiItemCategorySummary = z.infer<typeof ItemCategorySummary>;
export type PokeApiItemEffectText = z.infer<typeof ItemEffectText>;
export type PokeApiItemFlavorText = z.infer<typeof ItemFlavorText>;
export type PokeApiItemGameIndex = z.infer<typeof ItemGameIndex>;
export type PokeApiItemName = z.infer<typeof ItemName>;
export type PokeApiItemDetail = z.infer<typeof ItemDetail>;
export type PokeApiPaginatedItemCategorySummaryList = z.infer<
	typeof PaginatedItemCategorySummaryList
>;
export type PokeApiItemCategoryName = z.infer<typeof ItemCategoryName>;
export type PokeApiItemPocketSummary = z.infer<typeof ItemPocketSummary>;
export type PokeApiItemCategoryDetail = z.infer<typeof ItemCategoryDetail>;
export type PokeApiItemAttributeSummary = z.infer<typeof ItemAttributeSummary>;
export type PokeApiPaginatedItemAttributeSummaryList = z.infer<
	typeof PaginatedItemAttributeSummaryList
>;
export type PokeApiItemAttributeDescription = z.infer<typeof ItemAttributeDescription>;
export type PokeApiItemAttributeName = z.infer<typeof ItemAttributeName>;
export type PokeApiItemAttributeDetail = z.infer<typeof ItemAttributeDetail>;
export type PokeApiPaginatedItemFlingEffectSummaryList = z.infer<
	typeof PaginatedItemFlingEffectSummaryList
>;
export type PokeApiItemFlingEffectEffectText = z.infer<typeof ItemFlingEffectEffectText>;
export type PokeApiItemFlingEffectDetail = z.infer<typeof ItemFlingEffectDetail>;
export type PokeApiPaginatedItemPocketSummaryList = z.infer<typeof PaginatedItemPocketSummaryList>;
export type PokeApiItemPocketName = z.infer<typeof ItemPocketName>;
export type PokeApiItemPocketDetail = z.infer<typeof ItemPocketDetail>;
export type PokeApiPaginatedLanguageSummaryList = z.infer<typeof PaginatedLanguageSummaryList>;
export type PokeApiLanguageName = z.infer<typeof LanguageName>;
export type PokeApiLanguageDetail = z.infer<typeof LanguageDetail>;
export type PokeApiLocationSummary = z.infer<typeof LocationSummary>;
export type PokeApiPaginatedLocationSummaryList = z.infer<typeof PaginatedLocationSummaryList>;
export type PokeApiLocationName = z.infer<typeof LocationName>;
export type PokeApiLocationGameIndex = z.infer<typeof LocationGameIndex>;
export type PokeApiLocationAreaSummary = z.infer<typeof LocationAreaSummary>;
export type PokeApiLocationDetail = z.infer<typeof LocationDetail>;
export type PokeApiPaginatedLocationAreaSummaryList = z.infer<
	typeof PaginatedLocationAreaSummaryList
>;
export type PokeApiLocationAreaName = z.infer<typeof LocationAreaName>;
export type PokeApiLocationAreaDetail = z.infer<typeof LocationAreaDetail>;
export type PokeApiMachineSummary = z.infer<typeof MachineSummary>;
export type PokeApiPaginatedMachineSummaryList = z.infer<typeof PaginatedMachineSummaryList>;
export type PokeApiMachineDetail = z.infer<typeof MachineDetail>;
export type PokeApiPaginatedMoveSummaryList = z.infer<typeof PaginatedMoveSummaryList>;
export type PokeApiMoveDamageClassSummary = z.infer<typeof MoveDamageClassSummary>;
export type PokeApiMoveMetaAilmentSummary = z.infer<typeof MoveMetaAilmentSummary>;
export type PokeApiMoveMetaCategorySummary = z.infer<typeof MoveMetaCategorySummary>;
export type PokeApiMoveMeta = z.infer<typeof MoveMeta>;
export type PokeApiMoveName = z.infer<typeof MoveName>;
export type PokeApiMoveChange = z.infer<typeof MoveChange>;
export type PokeApiSuperContestEffectSummary = z.infer<typeof SuperContestEffectSummary>;
export type PokeApiMoveTargetSummary = z.infer<typeof MoveTargetSummary>;
export type PokeApiMoveFlavorText = z.infer<typeof MoveFlavorText>;
export type PokeApiMoveDetail = z.infer<typeof MoveDetail>;
export type PokeApiPaginatedMoveMetaAilmentSummaryList = z.infer<
	typeof PaginatedMoveMetaAilmentSummaryList
>;
export type PokeApiMoveMetaAilmentName = z.infer<typeof MoveMetaAilmentName>;
export type PokeApiMoveMetaAilmentDetail = z.infer<typeof MoveMetaAilmentDetail>;
export type PokeApiMoveBattleStyleSummary = z.infer<typeof MoveBattleStyleSummary>;
export type PokeApiPaginatedMoveBattleStyleSummaryList = z.infer<
	typeof PaginatedMoveBattleStyleSummaryList
>;
export type PokeApiMoveBattleStyleName = z.infer<typeof MoveBattleStyleName>;
export type PokeApiMoveBattleStyleDetail = z.infer<typeof MoveBattleStyleDetail>;
export type PokeApiPaginatedMoveMetaCategorySummaryList = z.infer<
	typeof PaginatedMoveMetaCategorySummaryList
>;
export type PokeApiMoveMetaCategoryDescription = z.infer<typeof MoveMetaCategoryDescription>;
export type PokeApiMoveMetaCategoryDetail = z.infer<typeof MoveMetaCategoryDetail>;
export type PokeApiPaginatedMoveDamageClassSummaryList = z.infer<
	typeof PaginatedMoveDamageClassSummaryList
>;
export type PokeApiMoveDamageClassDescription = z.infer<typeof MoveDamageClassDescription>;
export type PokeApiMoveDamageClassName = z.infer<typeof MoveDamageClassName>;
export type PokeApiMoveDamageClassDetail = z.infer<typeof MoveDamageClassDetail>;
export type PokeApiMoveLearnMethodSummary = z.infer<typeof MoveLearnMethodSummary>;
export type PokeApiPaginatedMoveLearnMethodSummaryList = z.infer<
	typeof PaginatedMoveLearnMethodSummaryList
>;
export type PokeApiMoveLearnMethodName = z.infer<typeof MoveLearnMethodName>;
export type PokeApiMoveLearnMethodDescription = z.infer<typeof MoveLearnMethodDescription>;
export type PokeApiMoveLearnMethodDetail = z.infer<typeof MoveLearnMethodDetail>;
export type PokeApiPaginatedMoveTargetSummaryList = z.infer<typeof PaginatedMoveTargetSummaryList>;
export type PokeApiMoveTargetDescription = z.infer<typeof MoveTargetDescription>;
export type PokeApiMoveTargetName = z.infer<typeof MoveTargetName>;
export type PokeApiMoveTargetDetail = z.infer<typeof MoveTargetDetail>;
export type PokeApiNatureSummary = z.infer<typeof NatureSummary>;
export type PokeApiPaginatedNatureSummaryList = z.infer<typeof PaginatedNatureSummaryList>;
export type PokeApiNatureBattleStylePreference = z.infer<typeof NatureBattleStylePreference>;
export type PokeApiNatureName = z.infer<typeof NatureName>;
export type PokeApiNatureDetail = z.infer<typeof NatureDetail>;
export type PokeApiPalParkAreaSummary = z.infer<typeof PalParkAreaSummary>;
export type PokeApiPaginatedPalParkAreaSummaryList = z.infer<
	typeof PaginatedPalParkAreaSummaryList
>;
export type PokeApiPalParkAreaName = z.infer<typeof PalParkAreaName>;
export type PokeApiPalParkAreaDetail = z.infer<typeof PalParkAreaDetail>;
export type PokeApiPokedexSummary = z.infer<typeof PokedexSummary>;
export type PokeApiPaginatedPokedexSummaryList = z.infer<typeof PaginatedPokedexSummaryList>;
export type PokeApiPokedexDescription = z.infer<typeof PokedexDescription>;
export type PokeApiPokedexName = z.infer<typeof PokedexName>;
export type PokeApiPokedexDetail = z.infer<typeof PokedexDetail>;
export type PokeApiPokemonSummary = z.infer<typeof PokemonSummary>;
export type PokeApiPaginatedPokemonSummaryList = z.infer<typeof PaginatedPokemonSummaryList>;
export type PokeApiPokemonFormSummary = z.infer<typeof PokemonFormSummary>;
export type PokeApiVersionSummary = z.infer<typeof VersionSummary>;
export type PokeApiPokemonGameIndex = z.infer<typeof PokemonGameIndex>;
export type PokeApiPokemonStat = z.infer<typeof PokemonStat>;
export type PokeApiPokemonDetail = z.infer<typeof PokemonDetail>;
export type PokeApiPokemonColorSummary = z.infer<typeof PokemonColorSummary>;
export type PokeApiPaginatedPokemonColorSummaryList = z.infer<
	typeof PaginatedPokemonColorSummaryList
>;
export type PokeApiPokemonColorName = z.infer<typeof PokemonColorName>;
export type PokeApiPokemonColorDetail = z.infer<typeof PokemonColorDetail>;
export type PokeApiPaginatedPokemonFormSummaryList = z.infer<
	typeof PaginatedPokemonFormSummaryList
>;
export type PokeApiPokemonFormDetail = z.infer<typeof PokemonFormDetail>;
export type PokeApiPokemonHabitatSummary = z.infer<typeof PokemonHabitatSummary>;
export type PokeApiPaginatedPokemonHabitatSummaryList = z.infer<
	typeof PaginatedPokemonHabitatSummaryList
>;
export type PokeApiPokemonHabitatName = z.infer<typeof PokemonHabitatName>;
export type PokeApiPokemonHabitatDetail = z.infer<typeof PokemonHabitatDetail>;
export type PokeApiPokemonShapeSummary = z.infer<typeof PokemonShapeSummary>;
export type PokeApiPaginatedPokemonShapeSummaryList = z.infer<
	typeof PaginatedPokemonShapeSummaryList
>;
export type PokeApiPokemonShapeDetail = z.infer<typeof PokemonShapeDetail>;
export type PokeApiPaginatedPokemonSpeciesSummaryList = z.infer<
	typeof PaginatedPokemonSpeciesSummaryList
>;
export type PokeApiPokemonDexEntry = z.infer<typeof PokemonDexEntry>;
export type PokeApiPokemonSpeciesDescription = z.infer<typeof PokemonSpeciesDescription>;
export type PokeApiPokemonSpeciesFlavorText = z.infer<typeof PokemonSpeciesFlavorText>;
export type PokeApiPokemonSpeciesDetail = z.infer<typeof PokemonSpeciesDetail>;
export type PokeApiPokeathlonStatSummary = z.infer<typeof PokeathlonStatSummary>;
export type PokeApiPaginatedPokeathlonStatSummaryList = z.infer<
	typeof PaginatedPokeathlonStatSummaryList
>;
export type PokeApiPokeathlonStatName = z.infer<typeof PokeathlonStatName>;
export type PokeApiPokeathlonStatDetail = z.infer<typeof PokeathlonStatDetail>;
export type PokeApiPaginatedRegionSummaryList = z.infer<typeof PaginatedRegionSummaryList>;
export type PokeApiRegionName = z.infer<typeof RegionName>;
export type PokeApiRegionDetail = z.infer<typeof RegionDetail>;
export type PokeApiPaginatedStatSummaryList = z.infer<typeof PaginatedStatSummaryList>;
export type PokeApiStatName = z.infer<typeof StatName>;
export type PokeApiStatDetail = z.infer<typeof StatDetail>;
export type PokeApiPaginatedSuperContestEffectSummaryList = z.infer<
	typeof PaginatedSuperContestEffectSummaryList
>;
export type PokeApiSuperContestEffectFlavorText = z.infer<typeof SuperContestEffectFlavorText>;
export type PokeApiSuperContestEffectDetail = z.infer<typeof SuperContestEffectDetail>;
export type PokeApiPaginatedTypeSummaryList = z.infer<typeof PaginatedTypeSummaryList>;
export type PokeApiTypeGameIndex = z.infer<typeof TypeGameIndex>;
export type PokeApiTypeDetail = z.infer<typeof TypeDetail>;
export type PokeApiPaginatedVersionSummaryList = z.infer<typeof PaginatedVersionSummaryList>;
export type PokeApiVersionName = z.infer<typeof VersionName>;
export type PokeApiVersionDetail = z.infer<typeof VersionDetail>;
export type PokeApiPaginatedVersionGroupSummaryList = z.infer<
	typeof PaginatedVersionGroupSummaryList
>;
export type PokeApiVersionGroupDetail = z.infer<typeof VersionGroupDetail>;

export const schemas = {
	AbilityChange,
	AbilityChangeEffectText,
	AbilityDetail,
	AbilityEffectText,
	AbilityFlavorText,
	AbilityName,
	AbilitySummary,
	BerryDetail,
	BerryFirmnessDetail,
	BerryFirmnessName,
	BerryFirmnessSummary,
	BerryFlavorDetail,
	BerryFlavorName,
	BerryFlavorSummary,
	BerrySummary,
	CharacteristicDescription,
	CharacteristicDetail,
	CharacteristicSummary,
	ContestEffectDetail,
	ContestEffectEffectText,
	ContestEffectFlavorText,
	ContestEffectSummary,
	ContestTypeDetail,
	ContestTypeName,
	ContestTypeSummary,
	EggGroupDetail,
	EggGroupName,
	EggGroupSummary,
	EncounterConditionDetail,
	EncounterConditionName,
	EncounterConditionSummary,
	EncounterConditionValueDetail,
	EncounterConditionValueName,
	EncounterConditionValueSummary,
	EncounterMethodDetail,
	EncounterMethodName,
	EncounterMethodSummary,
	EvolutionChainDetail,
	EvolutionChainSummary,
	EvolutionTriggerDetail,
	EvolutionTriggerName,
	EvolutionTriggerSummary,
	Experience,
	GenderDetail,
	GenderSummary,
	GenerationDetail,
	GenerationName,
	GenerationSummary,
	GrowthRateDescription,
	GrowthRateDetail,
	GrowthRateSummary,
	ItemAttributeDescription,
	ItemAttributeDetail,
	ItemAttributeName,
	ItemAttributeSummary,
	ItemCategoryDetail,
	ItemCategoryName,
	ItemCategorySummary,
	ItemDetail,
	ItemEffectText,
	ItemFlavorText,
	ItemFlingEffectDetail,
	ItemFlingEffectEffectText,
	ItemFlingEffectSummary,
	ItemGameIndex,
	ItemName,
	ItemPocketDetail,
	ItemPocketName,
	ItemPocketSummary,
	ItemSummary,
	LanguageDetail,
	LanguageName,
	LanguageSummary,
	LocationAreaDetail,
	LocationAreaName,
	LocationAreaSummary,
	LocationDetail,
	LocationGameIndex,
	LocationName,
	LocationSummary,
	MachineDetail,
	MachineSummary,
	MoveBattleStyleDetail,
	MoveBattleStyleName,
	MoveBattleStyleSummary,
	MoveChange,
	MoveDamageClassDescription,
	MoveDamageClassDetail,
	MoveDamageClassName,
	MoveDamageClassSummary,
	MoveDetail,
	MoveFlavorText,
	MoveLearnMethodDescription,
	MoveLearnMethodDetail,
	MoveLearnMethodName,
	MoveLearnMethodSummary,
	MoveMeta,
	MoveMetaAilmentDetail,
	MoveMetaAilmentName,
	MoveMetaAilmentSummary,
	MoveMetaCategoryDescription,
	MoveMetaCategoryDetail,
	MoveMetaCategorySummary,
	MoveName,
	MoveSummary,
	MoveTargetDescription,
	MoveTargetDetail,
	MoveTargetName,
	MoveTargetSummary,
	NatureBattleStylePreference,
	NatureDetail,
	NatureName,
	NatureSummary,
	PaginatedAbilitySummaryList,
	PaginatedBerryFirmnessSummaryList,
	PaginatedBerryFlavorSummaryList,
	PaginatedBerrySummaryList,
	PaginatedCharacteristicSummaryList,
	PaginatedContestEffectSummaryList,
	PaginatedContestTypeSummaryList,
	PaginatedEggGroupSummaryList,
	PaginatedEncounterConditionSummaryList,
	PaginatedEncounterConditionValueSummaryList,
	PaginatedEncounterMethodSummaryList,
	PaginatedEvolutionChainSummaryList,
	PaginatedEvolutionTriggerSummaryList,
	PaginatedGenderSummaryList,
	PaginatedGenerationSummaryList,
	PaginatedGrowthRateSummaryList,
	PaginatedItemAttributeSummaryList,
	PaginatedItemCategorySummaryList,
	PaginatedItemFlingEffectSummaryList,
	PaginatedItemPocketSummaryList,
	PaginatedItemSummaryList,
	PaginatedLanguageSummaryList,
	PaginatedLocationAreaSummaryList,
	PaginatedLocationSummaryList,
	PaginatedMachineSummaryList,
	PaginatedMoveBattleStyleSummaryList,
	PaginatedMoveDamageClassSummaryList,
	PaginatedMoveLearnMethodSummaryList,
	PaginatedMoveMetaAilmentSummaryList,
	PaginatedMoveMetaCategorySummaryList,
	PaginatedMoveSummaryList,
	PaginatedMoveTargetSummaryList,
	PaginatedNatureSummaryList,
	PaginatedPalParkAreaSummaryList,
	PaginatedPokeathlonStatSummaryList,
	PaginatedPokedexSummaryList,
	PaginatedPokemonColorSummaryList,
	PaginatedPokemonFormSummaryList,
	PaginatedPokemonHabitatSummaryList,
	PaginatedPokemonShapeSummaryList,
	PaginatedPokemonSpeciesSummaryList,
	PaginatedPokemonSummaryList,
	PaginatedRegionSummaryList,
	PaginatedStatSummaryList,
	PaginatedSuperContestEffectSummaryList,
	PaginatedTypeSummaryList,
	PaginatedVersionGroupSummaryList,
	PaginatedVersionSummaryList,
	PalParkAreaDetail,
	PalParkAreaName,
	PalParkAreaSummary,
	PokeathlonStatDetail,
	PokeathlonStatName,
	PokeathlonStatSummary,
	PokedexDescription,
	PokedexDetail,
	PokedexName,
	PokedexSummary,
	PokemonColorDetail,
	PokemonColorName,
	PokemonColorSummary,
	PokemonDetail,
	PokemonDexEntry,
	PokemonFormDetail,
	PokemonFormSummary,
	PokemonGameIndex,
	PokemonHabitatDetail,
	PokemonHabitatName,
	PokemonHabitatSummary,
	PokemonShapeDetail,
	PokemonShapeSummary,
	PokemonSpeciesDescription,
	PokemonSpeciesDetail,
	PokemonSpeciesFlavorText,
	PokemonSpeciesSummary,
	PokemonStat,
	PokemonSummary,
	RegionDetail,
	RegionName,
	RegionSummary,
	StatDetail,
	StatName,
	StatSummary,
	SuperContestEffectDetail,
	SuperContestEffectFlavorText,
	SuperContestEffectSummary,
	TypeDetail,
	TypeGameIndex,
	TypeSummary,
	VersionDetail,
	VersionGroupDetail,
	VersionGroupSummary,
	VersionName,
	VersionSummary,
};

const endpoints = makeApi([
	{
		alias: "abilityList",
		description: `Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a time. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Ability) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/ability/",
		requestFormat: "json",
		response: PaginatedAbilitySummaryList,
	},
	{
		alias: "abilityRetrieve",
		description: `Abilities provide passive effects for Pokémon in battle or in the overworld. Pokémon have multiple possible abilities but can have only one ability at a time. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Ability) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/ability/:id/",
		requestFormat: "json",
		response: AbilityDetail,
	},
	{
		alias: "berryFirmnessList",
		description: `Berries can be soft or hard. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/berry-firmness/",
		requestFormat: "json",
		response: PaginatedBerryFirmnessSummaryList,
	},
	{
		alias: "berryFirmnessRetrieve",
		description: `Berries can be soft or hard. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Category:Berries_by_firmness) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/berry-firmness/:id/",
		requestFormat: "json",
		response: BerryFirmnessDetail,
	},
	{
		alias: "berryFlavorList",
		description: `Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their **nature**. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/berry-flavor/",
		requestFormat: "json",
		response: PaginatedBerryFlavorSummaryList,
	},
	{
		alias: "berryFlavorRetrieve",
		description: `Flavors determine whether a Pokémon will benefit or suffer from eating a berry based on their **nature**. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Flavor) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/berry-flavor/:id/",
		requestFormat: "json",
		response: BerryFlavorDetail,
	},
	{
		alias: "berryList",
		description: `Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pokémon. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Berry) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/berry/",
		requestFormat: "json",
		response: PaginatedBerrySummaryList,
	},
	{
		alias: "berryRetrieve",
		description: `Berries are small fruits that can provide HP and status condition restoration, stat enhancement, and even damage negation when eaten by Pokémon. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Berry) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/berry/:id/",
		requestFormat: "json",
		response: BerryDetail,
	},
	{
		alias: "characteristicList",
		description: `Characteristics indicate which stat contains a Pokémon&#x27;s highest IV. A Pokémon&#x27;s Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo). Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Characteristic) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/characteristic/",
		requestFormat: "json",
		response: PaginatedCharacteristicSummaryList,
	},
	{
		alias: "characteristicRetrieve",
		description: `Characteristics indicate which stat contains a Pokémon&#x27;s highest IV. A Pokémon&#x27;s Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo). Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Characteristic) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/characteristic/:id/",
		requestFormat: "json",
		response: CharacteristicDetail,
	},
	{
		alias: "contestEffectList",
		description: `Contest effects refer to the effects of moves when used in contests.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/contest-effect/",
		requestFormat: "json",
		response: PaginatedContestEffectSummaryList,
	},
	{
		alias: "contestEffectRetrieve",
		description: `Contest effects refer to the effects of moves when used in contests.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/contest-effect/:id/",
		requestFormat: "json",
		response: ContestEffectDetail,
	},
	{
		alias: "contestTypeList",
		description: `Contest types are categories judges used to weigh a Pokémon&#x27;s condition in Pokémon contests. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/contest-type/",
		requestFormat: "json",
		response: PaginatedContestTypeSummaryList,
	},
	{
		alias: "contestTypeRetrieve",
		description: `Contest types are categories judges used to weigh a Pokémon&#x27;s condition in Pokémon contests. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Contest_condition) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/contest-type/:id/",
		requestFormat: "json",
		response: ContestTypeDetail,
	},
	{
		alias: "eggGroupList",
		description: `Egg Groups are categories which determine which Pokémon are able to interbreed. Pokémon may belong to either one or two Egg Groups. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Egg_Group) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/egg-group/",
		requestFormat: "json",
		response: PaginatedEggGroupSummaryList,
	},
	{
		alias: "eggGroupRetrieve",
		description: `Egg Groups are categories which determine which Pokémon are able to interbreed. Pokémon may belong to either one or two Egg Groups. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Egg_Group) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/egg-group/:id/",
		requestFormat: "json",
		response: EggGroupDetail,
	},
	{
		alias: "encounterConditionValueList",
		description: `Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/encounter-condition-value/",
		requestFormat: "json",
		response: PaginatedEncounterConditionValueSummaryList,
	},
	{
		alias: "encounterConditionValueRetrieve",
		description: `Encounter condition values are the various states that an encounter condition can have, i.e., time of day can be either day or night.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/encounter-condition-value/:id/",
		requestFormat: "json",
		response: EncounterConditionValueDetail,
	},
	{
		alias: "encounterConditionList",
		description: `Conditions which affect what pokemon might appear in the wild, e.g., day or night.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/encounter-condition/",
		requestFormat: "json",
		response: PaginatedEncounterConditionSummaryList,
	},
	{
		alias: "encounterConditionRetrieve",
		description: `Conditions which affect what pokemon might appear in the wild, e.g., day or night.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/encounter-condition/:id/",
		requestFormat: "json",
		response: EncounterConditionDetail,
	},
	{
		alias: "encounterMethodList",
		description: `Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out Bulbapedia for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/encounter-method/",
		requestFormat: "json",
		response: PaginatedEncounterMethodSummaryList,
	},
	{
		alias: "encounterMethodRetrieve",
		description: `Methods by which the player might can encounter Pokémon in the wild, e.g., walking in tall grass. Check out Bulbapedia for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/encounter-method/:id/",
		requestFormat: "json",
		response: EncounterMethodDetail,
	},
	{
		alias: "evolutionChainList",
		description: `Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/evolution-chain/",
		requestFormat: "json",
		response: PaginatedEvolutionChainSummaryList,
	},
	{
		alias: "evolutionChainRetrieve",
		description: `Evolution chains are essentially family trees. They start with the lowest stage within a family and detail evolution conditions for each as well as Pokémon they can evolve into up through the hierarchy.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/evolution-chain/:id/",
		requestFormat: "json",
		response: EvolutionChainDetail,
	},
	{
		alias: "evolutionTriggerList",
		description: `Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/evolution-trigger/",
		requestFormat: "json",
		response: PaginatedEvolutionTriggerSummaryList,
	},
	{
		alias: "evolutionTriggerRetrieve",
		description: `Evolution triggers are the events and conditions that cause a Pokémon to evolve. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/evolution-trigger/:id/",
		requestFormat: "json",
		response: EvolutionTriggerDetail,
	},
	{
		alias: "genderList",
		description: `Genders were introduced in Generation II for the purposes of breeding Pokémon but can also result in visual differences or even different evolutionary lines. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Gender) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/gender/",
		requestFormat: "json",
		response: PaginatedGenderSummaryList,
	},
	{
		alias: "genderRetrieve",
		description: `Genders were introduced in Generation II for the purposes of breeding Pokémon but can also result in visual differences or even different evolutionary lines. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Gender) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/gender/:id/",
		requestFormat: "json",
		response: GenderDetail,
	},
	{
		alias: "generationList",
		description: `A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/generation/",
		requestFormat: "json",
		response: PaginatedGenerationSummaryList,
	},
	{
		alias: "generationRetrieve",
		description: `A generation is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new set of Pokémon, Moves, Abilities and Types that did not exist in the previous generation are released.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/generation/:id/",
		requestFormat: "json",
		response: GenerationDetail,
	},
	{
		alias: "growthRateList",
		description: `Growth rates are the speed with which Pokémon gain levels through experience. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Experience) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/growth-rate/",
		requestFormat: "json",
		response: PaginatedGrowthRateSummaryList,
	},
	{
		alias: "growthRateRetrieve",
		description: `Growth rates are the speed with which Pokémon gain levels through experience. Check out [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Experience) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/growth-rate/:id/",
		requestFormat: "json",
		response: GrowthRateDetail,
	},
	{
		alias: "itemAttributeList",
		description: `Item attributes define particular aspects of items, e.g.&quot;usable in battle&quot; or &quot;consumable&quot;.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/item-attribute/",
		requestFormat: "json",
		response: PaginatedItemAttributeSummaryList,
	},
	{
		alias: "itemAttributeRetrieve",
		description: `Item attributes define particular aspects of items, e.g.&quot;usable in battle&quot; or &quot;consumable&quot;.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/item-attribute/:id/",
		requestFormat: "json",
		response: ItemAttributeDetail,
	},
	{
		alias: "itemCategoryList",
		description: `Item categories determine where items will be placed in the players bag.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/item-category/",
		requestFormat: "json",
		response: PaginatedItemCategorySummaryList,
	},
	{
		alias: "itemCategoryRetrieve",
		description: `Item categories determine where items will be placed in the players bag.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/item-category/:id/",
		requestFormat: "json",
		response: ItemCategoryDetail,
	},
	{
		alias: "itemFlingEffectList",
		description: `The various effects of the move&quot;Fling&quot; when used with different items.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/item-fling-effect/",
		requestFormat: "json",
		response: PaginatedItemFlingEffectSummaryList,
	},
	{
		alias: "itemFlingEffectRetrieve",
		description: `The various effects of the move&quot;Fling&quot; when used with different items.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/item-fling-effect/:id/",
		requestFormat: "json",
		response: ItemFlingEffectDetail,
	},
	{
		alias: "itemPocketList",
		description: `Pockets within the players bag used for storing items by category.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/item-pocket/",
		requestFormat: "json",
		response: PaginatedItemPocketSummaryList,
	},
	{
		alias: "itemPocketRetrieve",
		description: `Pockets within the players bag used for storing items by category.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/item-pocket/:id/",
		requestFormat: "json",
		response: ItemPocketDetail,
	},
	{
		alias: "itemList",
		description: `An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/item/",
		requestFormat: "json",
		response: PaginatedItemSummaryList,
	},
	{
		alias: "itemRetrieve",
		description: `An item is an object in the games which the player can pick up, keep in their bag, and use in some manner. They have various uses, including healing, powering up, helping catch Pokémon, or to access a new area.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/item/:id/",
		requestFormat: "json",
		response: ItemDetail,
	},
	{
		alias: "languageList",
		description: `Languages for translations of API resource information.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/language/",
		requestFormat: "json",
		response: PaginatedLanguageSummaryList,
	},
	{
		alias: "languageRetrieve",
		description: `Languages for translations of API resource information.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/language/:id/",
		requestFormat: "json",
		response: LanguageDetail,
	},
	{
		alias: "locationAreaList",
		description: `Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pokémon encounters.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/location-area/",
		requestFormat: "json",
		response: PaginatedLocationAreaSummaryList,
	},
	{
		alias: "locationAreaRetrieve",
		description: `Location areas are sections of areas, such as floors in a building or cave. Each area has its own set of possible Pokémon encounters.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.number().int(),
				type: "Path",
			},
		],
		path: "/api/v2/location-area/:id/",
		requestFormat: "json",
		response: LocationAreaDetail,
	},
	{
		alias: "locationList",
		description: `Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/location/",
		requestFormat: "json",
		response: PaginatedLocationSummaryList,
	},
	{
		alias: "locationRetrieve",
		description: `Locations that can be visited within the games. Locations make up sizable portions of regions, like cities or routes.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/location/:id/",
		requestFormat: "json",
		response: LocationDetail,
	},
	{
		alias: "machineList",
		description: `Machines are the representation of items that teach moves to Pokémon. They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/machine/",
		requestFormat: "json",
		response: PaginatedMachineSummaryList,
	},
	{
		alias: "machineRetrieve",
		description: `Machines are the representation of items that teach moves to Pokémon. They vary from version to version, so it is not certain that one specific TM or HM corresponds to a single Machine.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/machine/:id/",
		requestFormat: "json",
		response: MachineDetail,
	},
	{
		alias: "moveAilmentList",
		description: `Move Ailments are status conditions caused by moves used during battle. See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/move-ailment/",
		requestFormat: "json",
		response: PaginatedMoveMetaAilmentSummaryList,
	},
	{
		alias: "moveAilmentRetrieve",
		description: `Move Ailments are status conditions caused by moves used during battle. See [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Status_condition) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/move-ailment/:id/",
		requestFormat: "json",
		response: MoveMetaAilmentDetail,
	},
	{
		alias: "moveBattleStyleList",
		description: `Styles of moves when used in the Battle Palace. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/move-battle-style/",
		requestFormat: "json",
		response: PaginatedMoveBattleStyleSummaryList,
	},
	{
		alias: "moveBattleStyleRetrieve",
		description: `Styles of moves when used in the Battle Palace. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Battle_Frontier_(Generation_III)) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/move-battle-style/:id/",
		requestFormat: "json",
		response: MoveBattleStyleDetail,
	},
	{
		alias: "moveCategoryList",
		description: `Very general categories that loosely group move effects.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/move-category/",
		requestFormat: "json",
		response: PaginatedMoveMetaCategorySummaryList,
	},
	{
		alias: "moveCategoryRetrieve",
		description: `Very general categories that loosely group move effects.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/move-category/:id/",
		requestFormat: "json",
		response: MoveMetaCategoryDetail,
	},
	{
		alias: "moveDamageClassList",
		description: `Damage classes moves can have, e.g. physical, special, or non-damaging.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/move-damage-class/",
		requestFormat: "json",
		response: PaginatedMoveDamageClassSummaryList,
	},
	{
		alias: "moveDamageClassRetrieve",
		description: `Damage classes moves can have, e.g. physical, special, or non-damaging.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/move-damage-class/:id/",
		requestFormat: "json",
		response: MoveDamageClassDetail,
	},
	{
		alias: "moveLearnMethodList",
		description: `Methods by which Pokémon can learn moves.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/move-learn-method/",
		requestFormat: "json",
		response: PaginatedMoveLearnMethodSummaryList,
	},
	{
		alias: "moveLearnMethodRetrieve",
		description: `Methods by which Pokémon can learn moves.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/move-learn-method/:id/",
		requestFormat: "json",
		response: MoveLearnMethodDetail,
	},
	{
		alias: "moveTargetList",
		description: `Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/move-target/",
		requestFormat: "json",
		response: PaginatedMoveTargetSummaryList,
	},
	{
		alias: "moveTargetRetrieve",
		description: `Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/move-target/:id/",
		requestFormat: "json",
		response: MoveTargetDetail,
	},
	{
		alias: "moveList",
		description: `Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/move/",
		requestFormat: "json",
		response: PaginatedMoveSummaryList,
	},
	{
		alias: "moveRetrieve",
		description: `Moves are the skills of Pokémon in battle. In battle, a Pokémon uses one move each turn. Some moves (including those learned by Hidden Machine) can be used outside of battle as well, usually for the purpose of removing obstacles or exploring new areas.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/move/:id/",
		requestFormat: "json",
		response: MoveDetail,
	},
	{
		alias: "natureList",
		description: `Natures influence how a Pokémon&#x27;s stats grow. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Nature) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/nature/",
		requestFormat: "json",
		response: PaginatedNatureSummaryList,
	},
	{
		alias: "natureRetrieve",
		description: `Natures influence how a Pokémon&#x27;s stats grow. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Nature) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/nature/:id/",
		requestFormat: "json",
		response: NatureDetail,
	},
	{
		alias: "palParkAreaList",
		description: `Areas used for grouping Pokémon encounters in Pal Park. They&#x27;re like habitats that are specific to Pal Park.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/pal-park-area/",
		requestFormat: "json",
		response: PaginatedPalParkAreaSummaryList,
	},
	{
		alias: "palParkAreaRetrieve",
		description: `Areas used for grouping Pokémon encounters in Pal Park. They&#x27;re like habitats that are specific to Pal Park.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/pal-park-area/:id/",
		requestFormat: "json",
		response: PalParkAreaDetail,
	},
	{
		alias: "pokeathlonStatList",
		description: `Pokeathlon Stats are different attributes of a Pokémon&#x27;s performance in Pokéathlons. In Pokéathlons, competitions happen on different courses; one for each of the different Pokéathlon stats. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9athlon) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/pokeathlon-stat/",
		requestFormat: "json",
		response: PaginatedPokeathlonStatSummaryList,
	},
	{
		alias: "pokeathlonStatRetrieve",
		description: `Pokeathlon Stats are different attributes of a Pokémon&#x27;s performance in Pokéathlons. In Pokéathlons, competitions happen on different courses; one for each of the different Pokéathlon stats. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9athlon) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/pokeathlon-stat/:id/",
		requestFormat: "json",
		response: PokeathlonStatDetail,
	},
	{
		alias: "pokedexList",
		description: `A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of the various Pokémon in a given region with the exception of the national dex and some smaller dexes related to portions of a region. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pokedex) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/pokedex/",
		requestFormat: "json",
		response: PaginatedPokedexSummaryList,
	},
	{
		alias: "pokedexRetrieve",
		description: `A Pokédex is a handheld electronic encyclopedia device; one which is capable of recording and retaining information of the various Pokémon in a given region with the exception of the national dex and some smaller dexes related to portions of a region. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pokedex) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/pokedex/:id/",
		requestFormat: "json",
		response: PokedexDetail,
	},
	{
		alias: "pokemonColorList",
		description: `Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is usually the color most apparent or covering each Pokémon&#x27;s body. No orange category exists; Pokémon that are primarily orange are listed as red or brown.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/pokemon-color/",
		requestFormat: "json",
		response: PaginatedPokemonColorSummaryList,
	},
	{
		alias: "pokemonColorRetrieve",
		description: `Colors used for sorting Pokémon in a Pokédex. The color listed in the Pokédex is usually the color most apparent or covering each Pokémon&#x27;s body. No orange category exists; Pokémon that are primarily orange are listed as red or brown.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/pokemon-color/:id/",
		requestFormat: "json",
		response: PokemonColorDetail,
	},
	{
		alias: "pokemonFormList",
		description: `Some Pokémon may appear in one of multiple, visually different forms. These differences are purely cosmetic. For variations within a Pokémon species, which do differ in more than just visuals, the &#x27;Pokémon&#x27; entity is used to represent such a variety.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/pokemon-form/",
		requestFormat: "json",
		response: PaginatedPokemonFormSummaryList,
	},
	{
		alias: "pokemonFormRetrieve",
		description: `Some Pokémon may appear in one of multiple, visually different forms. These differences are purely cosmetic. For variations within a Pokémon species, which do differ in more than just visuals, the &#x27;Pokémon&#x27; entity is used to represent such a variety.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/pokemon-form/:id/",
		requestFormat: "json",
		response: PokemonFormDetail,
	},
	{
		alias: "pokemonHabitatList",
		description: `Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/pokemon-habitat/",
		requestFormat: "json",
		response: PaginatedPokemonHabitatSummaryList,
	},
	{
		alias: "pokemonHabitatRetrieve",
		description: `Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/pokemon-habitat/:id/",
		requestFormat: "json",
		response: PokemonHabitatDetail,
	},
	{
		alias: "pokemonShapeList",
		description: `Shapes used for sorting Pokémon in a Pokédex.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/pokemon-shape/",
		requestFormat: "json",
		response: PaginatedPokemonShapeSummaryList,
	},
	{
		alias: "pokemonShapeRetrieve",
		description: `Shapes used for sorting Pokémon in a Pokédex.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/pokemon-shape/:id/",
		requestFormat: "json",
		response: PokemonShapeDetail,
	},
	{
		alias: "pokemonSpeciesList",
		description: `A Pokémon Species forms the basis for at least one Pokémon. Attributes of a Pokémon species are shared across all varieties of Pokémon within the species. A good example is Wormadam; Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/pokemon-species/",
		requestFormat: "json",
		response: PaginatedPokemonSpeciesSummaryList,
	},
	{
		alias: "pokemonSpeciesRetrieve",
		description: `A Pokémon Species forms the basis for at least one Pokémon. Attributes of a Pokémon species are shared across all varieties of Pokémon within the species. A good example is Wormadam; Wormadam is the species which can be found in three different varieties, Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/pokemon-species/:id/",
		requestFormat: "json",
		response: PokemonSpeciesDetail,
	},
	{
		alias: "pokemonList",
		description: `Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/pokemon/",
		requestFormat: "json",
		response: PaginatedPokemonSummaryList,
	},
	{
		alias: "pokemonRetrieve",
		description: `Pokémon are the creatures that inhabit the world of the Pokémon games. They can be caught using Pokéballs and trained by battling with other Pokémon. Each Pokémon belongs to a specific species but may take on a variant which makes it differ from other Pokémon of the same species, such as base stats, available abilities and typings. See [Bulbapedia](http://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9mon_(species)) for greater detail.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/pokemon/:id/",
		requestFormat: "json",
		response: PokemonDetail,
	},
	{
		alias: "pokemonEncountersRetrieve",
		description: `Handles Pokemon Encounters as a sub-resource.`,
		method: "get",
		parameters: [
			{
				name: "pokemon_id",
				schema: z.string().regex(/^\d+$/),
				type: "Path",
			},
		],
		path: "/api/v2/pokemon/:pokemon_id/encounters",
		requestFormat: "json",
		response: z.array(
			z
				.object({
					location_area: z
						.object({ name: z.string(), url: z.string().url() })
						.passthrough(),
					version_details: z.array(
						z
							.object({
								encounter_details: z.array(
									z
										.object({
											chance: z.number(),
											condition_values: z.array(
												z
													.object({
														name: z.string(),
														url: z.string().url(),
													})
													.passthrough(),
											),
											max_level: z.number(),
											method: z
												.object({ name: z.string(), url: z.string().url() })
												.passthrough(),
											min_level: z.number(),
										})
										.passthrough(),
								),
								max_chance: z.number(),
								version: z
									.object({ name: z.string(), url: z.string().url() })
									.passthrough(),
							})
							.passthrough(),
					),
				})
				.passthrough(),
		),
	},
	{
		alias: "regionList",
		description: `A region is an organized area of the Pokémon world. Most often, the main difference between regions is the species of Pokémon that can be encountered within them.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/region/",
		requestFormat: "json",
		response: PaginatedRegionSummaryList,
	},
	{
		alias: "regionRetrieve",
		description: `A region is an organized area of the Pokémon world. Most often, the main difference between regions is the species of Pokémon that can be encountered within them.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/region/:id/",
		requestFormat: "json",
		response: RegionDetail,
	},
	{
		alias: "statList",
		description: `Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/stat/",
		requestFormat: "json",
		response: PaginatedStatSummaryList,
	},
	{
		alias: "statRetrieve",
		description: `Stats determine certain aspects of battles. Each Pokémon has a value for each stat which grows as they gain levels and can be altered momentarily by effects in battles.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/stat/:id/",
		requestFormat: "json",
		response: StatDetail,
	},
	{
		alias: "superContestEffectList",
		description: `Super contest effects refer to the effects of moves when used in super contests.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/super-contest-effect/",
		requestFormat: "json",
		response: PaginatedSuperContestEffectSummaryList,
	},
	{
		alias: "superContestEffectRetrieve",
		description: `Super contest effects refer to the effects of moves when used in super contests.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/super-contest-effect/:id/",
		requestFormat: "json",
		response: SuperContestEffectDetail,
	},
	{
		alias: "typeList",
		description: `Types are properties for Pokémon and their moves. Each type has three properties: which types of Pokémon it is super effective against, which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/type/",
		requestFormat: "json",
		response: PaginatedTypeSummaryList,
	},
	{
		alias: "typeRetrieve",
		description: `Types are properties for Pokémon and their moves. Each type has three properties: which types of Pokémon it is super effective against, which types of Pokémon it is not very effective against, and which types of Pokémon it is completely ineffective against.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/type/:id/",
		requestFormat: "json",
		response: TypeDetail,
	},
	{
		alias: "versionGroupList",
		description: `Version groups categorize highly similar versions of the games.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/version-group/",
		requestFormat: "json",
		response: PaginatedVersionGroupSummaryList,
	},
	{
		alias: "versionGroupRetrieve",
		description: `Version groups categorize highly similar versions of the games.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/version-group/:id/",
		requestFormat: "json",
		response: VersionGroupDetail,
	},
	{
		alias: "versionList",
		description: `Versions of the games, e.g., Red, Blue or Yellow.`,
		method: "get",
		parameters: [
			{
				name: "limit",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "offset",
				schema: z.number().int().optional(),
				type: "Query",
			},
			{
				name: "q",
				schema: z.string().optional(),
				type: "Query",
			},
		],
		path: "/api/v2/version/",
		requestFormat: "json",
		response: PaginatedVersionSummaryList,
	},
	{
		alias: "versionRetrieve",
		description: `Versions of the games, e.g., Red, Blue or Yellow.`,
		method: "get",
		parameters: [
			{
				name: "id",
				schema: z.string(),
				type: "Path",
			},
		],
		path: "/api/v2/version/:id/",
		requestFormat: "json",
		response: VersionDetail,
	},
]);

// A Zodios (zod + axios) query client for the PokeAPI
export const client = new Zodios("https://pokeapi.co", endpoints, {
	validate: "request",
});

// A react-query wrapper for the apiClient
export const queryClient = new ZodiosHooks("pokeApi", client);
