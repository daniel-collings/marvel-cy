/* eslint-disable no-loop-func */
import marvelCharacters from '../fixtures/marvelCharacters.json'

describe('Cy.Marvel Test Suite', () => {

  it('should load index', () => {
    cy.visit('/')
  })

  for (const property of marvelCharacters.characters) {
    // eslint-disable-next-line no-loop-func
    it(`should have nav item for ${property.heroName}`, () => {
      cy.interceptGetCharacters()
      cy.visit('/')

      cy.get(`[data-test="Marvel-listItem-${property.heroName}"]`)

    })
  }

  const orderedCharacters = [...marvelCharacters.characters].sort((a, b) => b.meter - a.meter)
  for (let i = 0; i < 3; i++) {
    it(`should have awesome marvel image for ${orderedCharacters[i].heroName}`, () => {
      cy.intercept({
        method: 'GET',
        url: orderedCharacters[i].img
      })

      cy.get(`[alt="${orderedCharacters[i].heroName}"]`)
    })
  }

})