const db = require('./models')

const user = () =>{
    db.User.create({email: 'boldi.petra@gmail.com',
    passwordHash: 'software'
})
}

module.exports = user;