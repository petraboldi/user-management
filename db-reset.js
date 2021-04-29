const db = require('./models')

const truncateTables = () => {
  console.log('truncating tables')
  db.Bookmark.destroy({ truncate : true, cascade: true })
}

module.exports = truncateTables
