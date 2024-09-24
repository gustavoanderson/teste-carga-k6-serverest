/// <reference types ="cypress"/>

describe('Teste de carga de login em API', () => {
  it('Deve realizar login com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'login',
      body: {
        "email": "fulano@qa.com",
        "password": "teste"
      }
    }).should((response) =>{
      expect(response.body.message).to.equal('Login realizado com sucesso')
    })
  })
});