require('coohappy-commons/polyfills/string')
const { mongoose: { ObjectId }, models: { User } } = require('coohappy-data')
const { errors : { UnexistenceError } } = require('coohappy-commons')

/**
 * Retrieve user food list.
 * 
 * 
 * @param {string} userId id of the current user. 
 * 
 * @throws {Error} When api return some error 
 *
 */


module.exports = userId => {
    String.validate.notVoid(userId)
    
    return User.findOne({ _id: ObjectId(userId) }, { __v: 0, role: 0, password: 0, name: 0, surname: 0, email: 0, cohousing: 0 })
    .lean()
       
    .then(user => {
            
            if (!user) throw new Error(`user with id ${userId} does not exist`)

            for (key in user.foodList) {
                delete user.foodList[key]._id
            }
            

            delete user._id
            if(user.foodList.length === 0) {[]}
            return user
        })
}