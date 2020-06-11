module.exports = {

    registerUser : require('./register-user'),
    authenticateUser : require('./authenticate-user'),
    retrieveUser : require('./retrieve-user'),
    registerCohousing : require('./register-cohousing'),
    retrieveCohousing: require('./retrieve-cohousing'),
    updateUser: require('./update-user'),
    updateCohousing: require('./update-cohousing'),
    sendMessage: require('./send-message'),
    retrieveMessages: require('./retrieve-messages'),
    joinToCohousing: require('./joinToCohousing'),
    addFood: require('./add-food'),
    substractFood: require('./substract-food'),
    retrieveUserFoodList: require('./retrieve-user-food-list'),
    retrieveAllUsersFoodList: require('./retrieve-allUsers-food-list')
}