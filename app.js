const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');
const subtaskRoutes = require('./routes/subtaskRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

const mongoose = require("mongoose")
const db = process.env.MONGODB_URI;
const connectP = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
// mongoose.connect(db, connectP).then(() => {
//   console.log("Connection Successful");
// }).catch((e) => {
//   console.log('No Connecction');
// });

app.use('/api/tasks', taskRoutes);
app.use('/api/subtasks', subtaskRoutes);
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
