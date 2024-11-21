import mongoose from 'mongoose';
import config from './app/config';
import app from './app';

// getting-started.js
// const mongo ose = require('mongoose');
// npm i -D --exact prettier
main().catch((err) => console.log(err));

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
