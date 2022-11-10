const reqFilter = async(req,res,next)=>{
    // let object = await req.body;
    //    res.send(object);
//    let obj =  [
 const names =  await req.body.name;
 const  classes1 = await req.body.class;
       let obj1 = { names,classes1,ages:11 }
//         req.body.id = 22,
//         req.body.sub = "Wd",
//         req.body.course = "Node"
// //    ]
   res.send(obj1);
      
       next();   
}

export default reqFilter;