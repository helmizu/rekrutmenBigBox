const message = require('./message')
const notification = require('./notification')
const performance = require('./performance')

const schema = {
    Message : message,
    Notification : notification,
    Performance : performance
}

module.exports = schema