require('../utils/polyfills/string')
const { mongo } = require('../data')
const { ObjectId } = mongo
const { TypeError } = require('../errors')


module.exports = (userId, newInfo) => {
    String.validate.notVoid(userId)
    if (typeof newInfo !== 'object') throw new TypeError(`${newInfo} is not an object`)

    return mongo.connect()
        .then(connection => {
            const users = connection.db().collection('users')

            return users.update({ _id: ObjectId(userId) }, { $set: newInfo })

        })
        .then(({ result: { nModified } }) => {
            if(nModified > 0) return "User modified correctly"
            return "No changes added"
        })
       
        
}