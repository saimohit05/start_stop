const dbConnect = require('./mongodb');

const Total_count=async ()=>
{
    let data = await dbConnect();
    let result = await data.count();
    console.warn(result);
    if(result.acknowledged)
    {
        console.log(result);
    }

}

Total_count();