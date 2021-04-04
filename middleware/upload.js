const multer=require('multer');

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./images')
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+file.originalname)
    }
})



//filtering file
const filter=function(req,file,cb){
    if(file.mimetype=='photo/jpeg' || file.mimetype=='photo/jpg' || file.mimetype=='photo/png' || file.mimetype=='photo/gif'){
        cb(null,true)
    }
    else{
        cb(null,false)
    }
}

const upload=multer({
    storage:storage,
    fileFilter:filter
});

module.exports=upload;