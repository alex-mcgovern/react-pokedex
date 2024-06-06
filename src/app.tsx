import { App } from "boondoggle";
import { Route, Switch } from "wouter";

import { SideNav } from "@shared/components";

import { AllPokemon } from "@domain/pokemon";

export default function MainApp() {
	return (
		<Route nest path="/">
			<App.Container>
				<SideNav />
				<App.Main.Root>
					<Switch>
						<Route component={AllPokemon} path="/" />
					</Switch>
				</App.Main.Root>
			</App.Container>
		</Route>
	);
}
