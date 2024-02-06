const twilio = require('twilio');
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER } = process.env;

const client = twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

async function sendSMS(to, message) {
    try {
        const sms = await client.messages.create({
            to,
            from: TWILIO_PHONE_NUMBER,
            body: message,
        });

        return { success: true, smsSid: sms.sid };
    } catch (error) {
        console.error('Twilio SMS sending error:', error);
        return { success: false, error: error.message };
    }
}

async function makeVoiceCall(to) {
    try {
        const call = await client.calls.create({
            twiml: '<Response><Say>Hello, your task is overdue. Please check your tasks.</Say></Response>',
            to,
            from: TWILIO_PHONE_NUMBER,
        });

        return { success: true, callSid: call.sid };
    } catch (error) {
        console.error('Twilio voice call error:', error);
        return { success: false, error: error.message };
    }
}

module.exports = { sendSMS, makeVoiceCall };
