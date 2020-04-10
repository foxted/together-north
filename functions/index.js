const functions = require('firebase-functions');
const admin = require('firebase-admin');
const Perspective = require('perspective-api-client');
const get = require('get-value');
const { WebClient } = require('@slack/web-api');

// Initialize
const slack = new WebClient(functions.config().slack.token);
const perspective = new Perspective({ apiKey: functions.config().perspective.api_key });

admin.initializeApp();

exports.moderateMessages = functions.firestore.document('messages/{message}').onCreate(async (snapshot, context) => {
    const id = snapshot.id;
    const data = snapshot.data();

    const result = await perspective.analyze(data.message);

    const toxicity = get(result, 'attributeScores.TOXICITY.summaryScore.value', {
        default: 1
    });

    if (toxicity * 100 < 25) {
        await slack.chat.postMessage({
            text: `@channel A safe message has been published on Together North! https://togethernorth.ca/m/${id}`,
            blocks: [{
                'type': 'section',
                'text': {
                    'text': `@channel A safe message has been published on Together North! https://togethernorth.ca/m/${id}`,
                    'type': 'mrkdwn'
                },
                'fields': [
                    {
                        'type': 'mrkdwn',
                        'text': `*ID*: ${id}`
                    },
                    {
                        'type': 'mrkdwn',
                        'text': ' '
                    },
                    {
                        'type': 'mrkdwn',
                        'text': `*Message*:\n${data.message}`
                    }
                ]
            }],
            channel: '#together-north',
        });
        // Message is safe, approve it
        return admin.firestore().collection('messages').doc(id).update({
            result,
            moderationScore: toxicity,
            published: true
        });
    } else {
        await slack.chat.postMessage({
            text: `@channel A suspicious message has been blocked on Together North!`,
            blocks: [{
                'type': 'section',
                'text': {
                    'text': '@channel A suspicious message has been blocked on Together North!',
                    'type': 'mrkdwn'
                },
                'fields': [
                    {
                        'type': 'mrkdwn',
                        'text': `*ID*: ${id}`
                    },
                    {
                        'type': 'mrkdwn',
                        'text': ' '
                    },
                    {
                        'type': 'mrkdwn',
                        'text': `*Message*:\n${data.message}`
                    }
                ]
            }],
            channel: '#together-north',
        });
        // Message is not safe, send a message to Slack
        return admin.firestore().collection('messages').doc(id).update({
            result,
            moderationScore: toxicity,
            published: false,
        });
    }
});
