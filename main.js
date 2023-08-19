import router from './router/studentRouter.js';
import express from 'express';
import cors from 'cors';
import expressFileUpload from 'express-fileupload';

const app = express();
const port = 3300;

app.use(cors());
app.use(express.static('public'));
app.use(expressFileUpload);
app.use(router);

app.listen(port, () => console.log(`example applications at port ${port}`));