const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');



app.use(morgan('tiny'));

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.json());
const pokemonData= require("./models/pokemon.js");
app.get('/', (req, res) => {
    
        res.send('Hello World');
       
    });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});