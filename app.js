const express =require('express');
const parse = require('body-parser'); 
const bodyParser = require('body-parser');
const { json } = require('body-parser');
const app =express();
app.use(express.json());
app.use(bodyParser.json());
const results = 
[
    {statusCode: 200, firstName: 'Terry' , lastName: 'Johnson', clientId:'1' },
    {statusCode: 200, firstName: 'Hannah' , lastName: 'Johnson', clientId:'2' }
];

app.get('/api/v1',(req,res)=>
{
    res.send(results);
})


app.post('/api/v1/parse', (req,res)=>
{
    var fn  = "JOHN0000";
    var ln  = "MICHAEL0000";
    var cid = "0000";

    var result =
    {
        statusCode: 200,
        firstName: fn,
        lastName:ln,
        clientId:cid
    };
    // result.push(result);
    // res.send(result);
    var reqdata = req.body;
    console.log(reqdata);
    res.send(result);
});

app.post('/api/v2/parse', (req,res)=>
{
    var fn  = "JOHN";
    var ln  = "MICHAEL";
    var cid = "999-4567";

    var result =
    {
        statusCode: 200,
        firstName: fn,
        lastName:ln,
        clientId:cid
    };
    // result.push(result);
    // res.send(result);
    var reqdata = req.body;
    console.log(reqdata);
    res.send(result);
});

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log( `express on ${port}`));