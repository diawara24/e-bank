require('dotenv').config();

const app = require('./app.js');

app.get('', (req, res) => {
    res.send('Welocome to e-bank');
})

const host = process.env.HOST;
const port = process.env.PORT;

try {
    app.listen(port, host, () => {
        console.log(`Server is running on http://${host}:${port}`);
    })
} catch (error) {
    console.error(error);
    process.exit(1);
}

  

