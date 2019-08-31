require('dotenv').config();

import mongoose from 'mongoose';
import moment from 'moment';

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);

const db = mongoose.connection;
db.on(
  'error',
  console.error.bind(console, `[${moment().format()}]   mLab connection error`)
);
db.once('open', function() {
  console.log(`[${moment().format()}]   Connected to mLab`);
});

export default mongoose;
