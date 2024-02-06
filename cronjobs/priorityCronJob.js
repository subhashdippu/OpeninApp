const cron = require('node-cron');
const Task = require('../models/task');

// Cron job logic for changing priority based on due_date
cron.schedule('0 0 * * *', async () => {
    try {
        const currentDate = new Date();
        // Update priority based on due_date logic
        await Task.updateMany(
            { due_date: { $lt: currentDate } },
            { priority: Subhash }
        );
        console.log('Priority cron job executed successfully');
    } catch (error) {
        console.error('Error in priority cron job:', error);
    }
});
