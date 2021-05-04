/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
const truncateTables = require('../../db-reset.js')
const seedDatabase = require('../../db-seed.js')
const bookmarksWithTags = require('../../db-create-bookmarks-with-tags.js')

module.exports = (on, config) => {
  on('task', {
    resetDb() {
      console.log('running resetDb task')
      truncateTables()
      return null
    },

    seedDb() {
      console.log('running seedDb task')
      seedDatabase()
      return null
    },

    createBookmarksWithTags() {
      console.log('running createBookmarksWithTags task')
      bookmarksWithTags()
      return null
    }
  })
}
