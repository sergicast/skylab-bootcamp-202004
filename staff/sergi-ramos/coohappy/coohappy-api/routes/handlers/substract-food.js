const { substractFood } = require('coohappy-server-logic')
const { handleError } = require('../../helpers')

module.exports = (req, res) => {
    try {
        const { body: { foodItem }, payload: { sub: userId } } = req

        substractFood(foodItem, userId)
            .then(() => res.status(204).end())
            .catch(error => handleError(error, res))
    } catch (error) {
        handleError(error, res)
    }
}