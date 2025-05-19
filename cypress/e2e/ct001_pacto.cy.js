describe('Buscar Pacto Soluções no yahoo ', () => {
  it('Deve realizar busca no Yahoo por Pacto Soluções', () => {

    //Acessar site do Yahoo
    cy.visit('https://br.search.yahoo.com/?fr2=p:fprd,mkt:br')

    //Localizar caixa de busca e digitar "Pacto soluções"
    cy.get('#yschsp').type('Pacto soluções')
    cy.screenshot('antes-da-busca')

    //Submeter a busca
    cy.get('#yschsp').type('{enter}')

    //Validar se URL de resultados foi carregada
    cy.url().should('include', 'p=Pacto+solu%C3%A7%C3%B5es&fr')
    cy.screenshot('pagina-de-resultados')

    //Validar que os resultados contenham as informações esperadas: "Pacto Soluções" ,"Sistema para Academias e Negócios Fitness:"

    cy.get('#web > .reg > .first > .dd > .compTitle > .title > .fz-20')
      .should('contain', 'Sistema para Academias e Negócios Fitness:')
      
    cy.get(':nth-child(2) > .dd > .compText > .fz-14 > .fc-falcon > b')
      .should('contain', 'Pacto Soluções')


  })
})