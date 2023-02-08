const client = require("./Connection")
const database = 'newsDb';

async function dbConnect(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('userdatas');
}


module.exports=dbConnect;