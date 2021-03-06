require('coohappy-commons/polyfills/string')
require('coohappy-commons/polyfills/json')
const { utils: { Email }, errors: { DuplicityError } } = require('coohappy-commons')
const { models: { User } } = require('coohappy-data')
const bcrypt = require('bcryptjs')


/**
 * Register user.
 * 
 * @param {string} name User name. 
 * @param {string} surname User surname. 
 * @param {string} email USer email. 
 * @param {string} password User password. 
 * @param {string} confirmPassword confirm password.
 * 
 * @throws {Error} When api return some error 
 *
 */

module.exports = (name, surname, email, password) => {
    String.validate.notVoid(name)
    String.validate.notVoid(surname)
    String.validate.notVoid(email)
    Email.validate(email)
    String.validate.notVoid(password)

    return (async () => {
        const user = await User.findOne({ email })

        if (user) throw new DuplicityError(`User with e-mail ${email} already exists`)

        const hash = await bcrypt.hash(password, 10)

        await User.create({ name, surname, email, password: hash})
    })()
}