const dbConnect = require('./mongodb');

const DeleteData=async ()=>
{
    let data = await dbConnect();
    let result = await data.remove({});
    console.warn(result);
    if(result.acknowledged)
    {
        console.log("Data is Deleted");
    }

}

DeleteData();