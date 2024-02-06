const cron = require('node-cron');
const User = require('../models/user');
const twilioHelper = require('../utils/twilioHelper');

// Cron job logic for voice calling using Twilio
cron.schedule('0 12 * * *', async () => {
    try {
        const users = await User.find().sort({ priority: 1 });
        for (const user of users) {
            // Implement Twilio voice calling logic
            const callResult = await twilioHelper.makeVoiceCall(user.phone_number);
            if (callResult.success) {
                console.log(`Voice call to ${user.phone_number} successful`);
                break;  // Break loop if call is successful
            } else {
                console.log(`Voice call to ${user.phone_number} failed`);
            }
        }
        console.log('Voice calling cron job executed successfully');
    } catch (error) {
        console.error('Error in voice calling cron job:', error);
    }
});
