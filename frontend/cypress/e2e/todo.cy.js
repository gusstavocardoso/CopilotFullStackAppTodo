describe('Todo App', () => {
  beforeEach(() => {
    cy.request('POST', 'http://localhost:4000/test/reset');
    cy.visit('/');
  });

  it('carrega o título do app', () => {
    cy.contains('Todo App').should('be.visible');
  });

  it('adiciona uma nova tarefa', () => {
    cy.get('input[placeholder="Nova tarefa"]').type('Estudar Cypress');
    cy.contains('Adicionar').click();
    cy.contains('Estudar Cypress').should('be.visible');
  });

  it('marca tarefa como concluída', () => {
    cy.get('input[placeholder="Nova tarefa"]').type('Tarefa concluída');
    cy.contains('Adicionar').click();
    cy.contains('Tarefa concluída')
      .parent()
      .find('button')
      .first()
      .click();
    cy.contains('Tarefa concluída').should('have.css', 'text-decoration')
      .and('match', /line-through/);
  });

  it('remove tarefa', () => {
    cy.get('input[placeholder="Nova tarefa"]').type('Apagar tarefa');
    cy.contains('Adicionar').click();
    cy.contains('Apagar tarefa')
      .parent()
      .find('button')
      .last()
      .click();
    cy.contains('Apagar tarefa').should('not.exist');
  });
});
