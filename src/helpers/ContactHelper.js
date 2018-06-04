import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyBWBATLDYlrMD3mAYjD8w_g9hqbnxDtN5s",
  authDomain: "prometheus-marketing-site.firebaseapp.com",
  databaseURL: "https://prometheus-marketing-site.firebaseio.com",
  projectId: "prometheus-marketing-site",
  storageBucket: "prometheus-marketing-site.appspot.com",
});

const db = firebase.database();


const token = ''
/**
 * This function handles contact data
 * @async
 * @param {Object} message - The messgae to be sent
 * @param {string} message.subject - The Subject of the message
 * @param {string} message.email - The sending party's email
 * @param {string} message.text - The content of the message
 * @param {string} message.phone - The sending party's phone number
 */
export default function contact({
  text,
  subject,
  email,
  phone,
  timestamp,
}) {
  postToFirebase({
    text,
    subject,
    email,
    phone,
    timestamp,
  })
  return fetch('https://slack.com/api/chat.postMessage', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token},`
    },
    body: JSON.stringify({
      "channel": "CAT9N25N2",
      "attachments": [{
        "fallback": "New Lead From the Marketing Site",
        "pretext": "New Lead Alert! Someone contacted us on our site!",
        "title": subject,
        text,
        "fields": [
          {
            "title": "Email",
            "value": email,
            "short": true
          },
          {
            "title": "Number",
            "value": phone ? `<tel:${phone}|${phone}>` : 'None',
            "short": true
          }
        ],
        "ts": timestamp,
      }]
    }),
  })
}

function postToFirebase(message) {
  const contactRef = db.ref('contacts').push()
  return contactRef.set(message)
}