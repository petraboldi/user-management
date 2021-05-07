const db = require('./models')
const bcrypt = require('bcryptjs')

const user = async() =>{
    const hash = bcrypt.hashSync('software', 10)
     await db.User.create({email: 'boldi.petra@gmail.com',
    passwordHash: hash
})
}

module.exports = user;