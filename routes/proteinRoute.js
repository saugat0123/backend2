const { json } = require('express');
const express=require('express');
const router=express.Router();
const Proteins=require('../models/proteinModel');
const auth=require('../middleware/auth');
const upload = require('../middleware/upload');

//insert paxi ko :,auth.verifyUser,auth.verifyAdmin
router.post('/proteins/insert',auth.verifyUser,upload.single('pimage'),function(req,res){
    if(req.file==undefined){
        return res.status(400).json({
            message:"Only jpg,jpeg,png,gif files are allowed"
        })
    }
    

    const ptitle=req.body.ptitle;
    const pdesc=req.body.pdesc;
    const pprice=req.body.pprice;
    const pimage=req.file.filename;


    const pdata=new Proteins({ptitle:ptitle,pdesc:pdesc,pprice:pprice,pimage:pimage});
    pdata.save()
    .then(function(result){
        res.status(201).json({message:"Protein created!!"})
    })
    .catch(function(e){
        res.status(500),json({abc:e})
    })
})

router.put("/proteins/update",auth.verifyUser,auth.verifyAdmin,function(req,res){
    const ntitle=req.body.ptitle;
    const ndesc=req.body.pdesc;
    const nprice=req.body.pprice;
    const id=req.body.Id;


    Proteins.updateOne({_id:id},{ptitle:ntitle,pdesc:ndesc,pprice:nprice})
    .then(function(result){
        res.status(200).json({message:"Updated"})
    })
    .catch(function(e){
        res.status(500).json({error:e})
    })

})

//for delete
router.delete('/proteins/delete/:id', function(req,res){
    const id = req.params.id
    Proteins.deleteOne({_id: id})
    .then(function(result){
        res.status(200).json({status: success})
    })
    .catch(function(e){
        res.status(200).json({error: e})
    })
})

router.get("/proteins/all", function(req,res){
    Proteins.find()
    .then(function(data){
        res.status(200).json(data)
    })
    .catch(function(er){
        res.status(500).json({error : e})
    })
})

router.get("/proteins/single/:id",function(req,res){
    const id=req.params.id;
    Proteins.findOne({_id:id})
    .then(function(data){
        res.status(200).json(data);
    })
    .catch(function(er){
        res.status(500).json({error:er})
    })
})

module.exports=router;