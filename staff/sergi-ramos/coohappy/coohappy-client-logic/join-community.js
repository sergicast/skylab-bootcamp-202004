require('coohappy-commons/polyfills/string')
const { utils: { Email, call } } = require('coohappy-commons')
const context = require('./context')


/**
 * Join user to laundry.
 * 
 * @param {string} accesCode Code for new user can access to community day. 
 * 
 * @throws {Error} When api return some error 
 *
 */

module.exports = function(accessCode) {

    String.validate.notVoid(accessCode)

    
    return (async () => {
        const token = await this.storage.getItem('TOKEN')
        
        const res = await call('POST',`${this.API_URL}/cohousings/add`, JSON.stringify({ accessCode }), { 'Content-type': 'application/json', 'Authorization': `Bearer ${token}` })
        
    
        if (res.status === 201) return

                const { error } = JSON.parse(res.body)

                throw new Error(error)
            })()
}.bind(context)