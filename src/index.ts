import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.listen(8080, () => {
    console.log(`Server is listening on 8080`);
});
