const functions = require('firebase-functions')

module.exports = {
  hello: functions.https.onRequest((req, res) => {
    const subject = req.query.subject || 'Wurld';
    const message = req.query.message || '';
    res.send(`Hello ${subject}! ${message}`);
  }),
}