const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app  = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',    
    password:'',
    database: 'biz-connect'
})

app.get('/api', (req,res) => {
    res.json({"users":["BackEnd 01","Backend 02","Backend 03"]})
})
app.get('/api/startups', (req,res) => {
    const sql = "select * from startups";
    db.query(sql,(err, data)=>{
        if(err) console.log(err);
        return res.json(data);
    })
    //res.json({"users":["user1","user2","user3"]})
})

app.listen(5000, () => { console.log('Server started on port 5000') })