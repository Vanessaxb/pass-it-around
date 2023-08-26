const express = require('express');

const app = express();
const PORT = 3000;

// const numberOfBottles = parseInt(req.params.number_of_bottles);


//Routes
app.get('/', (req, res) => {
    res.send('99 bottles on the wall' + (`<a href="/98"> Take one down!</a>`))
    })

app.get('/:number_of_bottles', (req, res) => {
    //parseInt converts from a string to integer for mathematical use
    const numberOfBottles = parseInt(req.params.number_of_bottles)
    const nextNumberOfBottles = numberOfBottles - 1
    if (numberOfBottles >= 2 ) {
        res.send(`${numberOfBottles} bottles on the wall.` + `<a href="/${nextNumberOfBottles}"> Take one down!</a>`)
        return
    }
    if (numberOfBottles === 1) {
        res.send(`${numberOfBottles} bottle on the wall` + `<a href="/${nextNumberOfBottles}"> Take one down!</a>`)
        return
    }
    if (numberOfBottles === 0) {
        res.send(`${numberOfBottles} bottles on the wall.` + `<a href="/"> Start over!</a>`)
        return
    }
    //isNan checks if numberOfBotlles is NOT a number
    if (isNaN(numberOfBottles) || numberOfBottles <  0) {
        res.send('Invalid number of bottles.')
        return
    }
})


