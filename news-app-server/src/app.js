const express = require('express')
const dbConnect = require('./db/config.js')
const articlesCollection = require('./db/ArticlesInfo')

const app = express()

app.use(express.json())

app.post("/userProfile", async (req,res) => {
    let data =  await dbConnect();
    let result = await data.insertOne(req.body);
    res.send(result)
})

app.put("/updateProfile/:_id", async (req,res) => {
    //console.log(req.params)
    let data =  await dbConnect();
    let result = data.updateOne(
        req.params, {
            $set : req.body
        }
    );
    res.send(result)
})

app.get('/getUserData',async (req,resp)=>{
    let data =  await dbConnect();
    data = await data.find().toArray();
    //console.log(data)
    resp.send(data)
});

app.get('/getArticleDetails',async (req,resp)=>{
    let data =  await articlesCollection();
    data = await data.find().toArray();
     resp.send(data)
});

app.post("/articlesData", async (req, res) => {
    let data = await articlesCollection();
    let result = await data.insertOne(req.body);
    res.send(result)
})

app.delete("/deleteArticles/:_id", async (req,res) => {
    let data = await articlesCollection()
    //console.log(req.params._id)
    let result = data.findOneAndDelete({_id : req.params._id});
    res.send(result)
})

app.put("/updateArticles/:_id", async (req,res) => {
    let data = await articlesCollection()
    let result = data.updateOne(
        req.params, {
            $set : req.body
        }
    );
    res.send(result)
})

app.listen(5000, () => {
    console.log("server is up")
})
