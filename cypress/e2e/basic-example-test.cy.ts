describe("Basic example test", () => {
	it("Navigates table view without throwing", () => {
		cy.visit("/");

		cy.get("tbody").within(() => {
			cy.findAllByRole("row").first().click();
		});

		cy.get("#app-drawer")
			.should("be.visible")
			.within(() => {
				cy.findByText("Bulbasaur").should("be.visible");

				cy.findByText("Types").should("be.visible");
				cy.findByText("Grass").should("be.visible");
				cy.findByText("Poison").should("be.visible");

				cy.findByText("Stats").should("be.visible");
				cy.findByText("HP").should("be.visible");
				cy.findByText("Attack").should("be.visible");
				cy.findByText("Defense").should("be.visible");
				cy.findByText("Speed").should("be.visible");
				cy.findByText("Special attack").should("be.visible");
				cy.findByText("Special defense").should("be.visible");

				cy.findByLabelText("Close").click();
				cy.findByText("Bulbasaur").should("not.exist");
			});
	});
});
