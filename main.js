import express from 'express';
import expressFileUpload from 'express-fileupload';

const app = express();
const port = 8800;

app.use(expressFileUpload);
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.send('Hello My project!');
});

app.listen(port, () => console.log(`example applications at port http://localhost:${8000}`));