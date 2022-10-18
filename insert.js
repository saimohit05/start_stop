const dbConnect = require('./mongodb');


const inserted = async()=>
{
    const db = await dbConnect(); 
    //console.log("insert function");
    std_id=0;
    std_marks=50;
    const result =
    setInterval(() => {
        db.insert(
            {
        std_name : Math.random().toString(36).substring(2, 7),
        std_id : std_id + 1,
        std_section : Math.random().toString(36).substring(2, 3),
        std_marks : std_marks + 1
            })
    },2000);

}

inserted();