import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import router from './Routes/route.js';


dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);








let PORT = process.env.PORT;
if (PORT == null || PORT == "") {
  PORT = 5000;
}


app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));












