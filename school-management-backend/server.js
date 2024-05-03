const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const uri = 'mongodb://localhost:27017/schoolMangementDB';
dotenv.config();

const PORT = process.env.PORT || 8000;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
});
app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});