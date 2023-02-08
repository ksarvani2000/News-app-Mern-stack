const client = require("./Connection")
const database = 'newsDb';

async function articlesCollection(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('articles');
}

module.exports= articlesCollection;
