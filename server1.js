const express = require('express');

const PORT = process.env.PORT || 9080

const connection = require('./db');

const bodyParser = require("body-parser");
const cors = require('cors');

const app = express()


//setting the ejs engine
app.set("view engine", "ejs")

//setting static public folder nd files
app.use(express.static('public'))


//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(bodyParser.urlencoded({
    extended: true
}));



app.use(cors())

//creating route for ejs

app.get('/', (req, res) => {
    res.render('index', {title: "Homepage"})
})

app.get('/about', (req, res) => {
    res.render('about', {title: "About"})
})

app.get('/contact', (req, res) => {
    res.render('contact', {title: "Contact"})
})

//app.get('/comment', (req, res) => {
    //res.render('comment', {title: "Comment"})
//})


//connecting express to mongodb database

//post request

app.post('/contact', async (req, res) => {
    var name = req.body.name;
    var message = req.body.message;

    const user = {
        "name" : name,
        "message" : message

    };

    const db = await connection.getConnect('restaurant')
    db.collection('reviews').insertOne(user, (err, results) => {
        if(err) throw err;
        if(results) res.redirect('/about')
        //res.send(user);
        console.log(user)
    })
})






//get request

app.get("/get-contact", async (req, res) => {
    const db = await connection.getConnect('restaurant') 
    db.collection('reviews').find({}).toArray((err, results) => {
        if(err) throw err;
        if(results)res.send(results)
        console.log(results)
            
    })
})

connection.dbConnect().then(() => {
    app.listen(PORT, () => {
        console.log(`server listening on ${PORT}`);
    })

})






//app.listen(PORT, () => console.log(`listening on my server at ${PORT}`))