import terminalLog from './log_func'
const subpaths = require('../../fixtures/subpaths.json')

describe('Validate 508 accessibility compliance on English site', () =>{
  subpaths.eng.forEach((subpath) => {
    it(`Run axe core https://www.usa.gov/${subpath}`, () => {
      cy.visit(`https://www.usa.gov/${subpath}`, {failOnStatusCode: false})
      cy.injectAxe()

      // Expand sitewide banner accordion
      cy.get('[class="usa-banner__button-text"]').click()

      cy.configureAxe({
          runOnly: {
              values: ['wcag2a, wcag2aa']
          }
      })

      cy.task(
          'log',
          `Run axe core https://www.usa.gov/${subpath}`
      )
      cy.checkA11y(
        null,
        // Only detects critical errors
        /*{
          includedImpacts: ['critical']
        },*/
        terminalLog)
    })
  })
})