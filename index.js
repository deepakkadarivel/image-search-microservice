import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index';
import {handleError, handleNotFound} from "./routes/handler";

const port = 8080;
const app = express();
app.use(bodyParser.json());

app.use(router);
app.use(handleNotFound);
app.use(handleError);


app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened...', err)
    }
    console.log(`app is running at port ${port}`)
});

export default app;