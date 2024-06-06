import { useEffect, useRef } from "react";

import { App, Button, Loader, Table } from "boondoggle";

import { capitalize } from "@shared/utils";

import { PillPokemonType } from "../components/pill-pokemon-type";
import { PokemonDetails } from "../components/pokemon-details";
import { Stat } from "../components/pokemon-stat";
import { useFetchPokemon } from "../lib/use-fetch-pokemon";

import "../css/index.css";

// Helper hook to scroll to top when fetching next/previous page
function useHandleScrollToTop({
	isFetchingNextPage,
	isFetchingPreviousPage,
}: {
	isFetchingNextPage: boolean;
	isFetchingPreviousPage: boolean;
}) {
	const ref = useRef<HTMLElement>(null);

	useEffect(() => {
		if (ref.current && (isFetchingNextPage || isFetchingPreviousPage)) {
			ref.current.scrollTo({ behavior: "smooth", top: 0 });
		}
	}, [isFetchingNextPage, isFetchingPreviousPage]);

	return ref;
}

export function AllPokemon() {
	const {
		data,
		fetchNextPage,
		fetchPreviousPage,
		hasNextPage,
		hasPreviousPage,
		isFetchingNextPage,
		isFetchingPreviousPage,
		isLoading,
		isSuccess,
	} = useFetchPokemon({ limit: 25, offset: 0 });

	const ref = useHandleScrollToTop({ isFetchingNextPage, isFetchingPreviousPage });
	const [_, setDrawer] = App.useDrawer()

	if (isLoading) {
		return <Loader />;
	}

	if (!isSuccess) {
		throw new Error("Failed to load pokemon");
	}

	// Note: We've hardcoded a page size of 1
	const pokemon = data.pages[0].results;


	return (
		<>
			<App.Main.Header>
				<h1>Pokemon</h1>
			</App.Main.Header>
			<App.Main.Content ref={ref}>
				<Table.ResizableContainer>
					<Table.Root aria-label="Pokemon table">
						<Table.Header>
							<Table.Row>
								<Table.Column sticky width={20}>
									ID
								</Table.Column>
								<Table.Column isRowHeader sticky width="6fr">
									Name
								</Table.Column>
								<Table.Column right sticky width="3fr">
									Type
								</Table.Column>
								<Table.Column center sticky width={20}>
									HP
								</Table.Column>
								<Table.Column center sticky width={20}>
									Attack
								</Table.Column>
								<Table.Column center sticky width={20}>
									Defense
								</Table.Column>
								<Table.Column center sticky width={20}>
									Speed
								</Table.Column>
								<Table.Column center sticky width={20}>
									SA
								</Table.Column>
								<Table.Column center sticky width={20}>
									SD
								</Table.Column>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{pokemon?.map((t) => {
								return (
									<Table.Row
										isDisabled={isFetchingNextPage || isFetchingPreviousPage}
										key={t.name}
										onAction={() => {
											setDrawer(<PokemonDetails pokemon={t} />)
										}}
									>
										<Table.Cell>{t.id}</Table.Cell>
										<Table.Cell>{capitalize(t.name)}</Table.Cell>
										<Table.Cell right>
											<div className="flex gap-1 justify-end">
												{t.types.map((pt) => {
													return (
														<PillPokemonType
															key={pt.type.name}
															type={pt.type.name}
														/>
													);
												})}
											</div>
										</Table.Cell>
										<Table.Cell center>
											<Stat stat="hp" stats={t.stats} />
										</Table.Cell>
										<Table.Cell center>
											<Stat stat="attack" stats={t.stats} />
										</Table.Cell>
										<Table.Cell center>
											<Stat stat="defense" stats={t.stats} />
										</Table.Cell>
										<Table.Cell center>
											<Stat stat="speed" stats={t.stats} />
										</Table.Cell>
										<Table.Cell center>
											<Stat stat="special-attack" stats={t.stats} />
										</Table.Cell>
										<Table.Cell center>
											<Stat stat="special-defense" stats={t.stats} />
										</Table.Cell>
									</Table.Row>
								);
							})}
						</Table.Body>
					</Table.Root>
				</Table.ResizableContainer>
			</App.Main.Content>
			<App.Main.Footer>
				<Button
					appearance="secondary"
					className="ml-auto"
					isDisabled={!hasPreviousPage}
					onPress={() => {
						void fetchPreviousPage();
					}}
				>
					{isFetchingPreviousPage ? <Loader /> : null}
					Prev
				</Button>
				<Button
					appearance="secondary"
					isDisabled={!hasNextPage}
					onPress={() => {
						void fetchNextPage();
					}}
				>
					{isFetchingNextPage ? <Loader /> : null}
					Next
				</Button>
			</App.Main.Footer>
		</>
	);
}
