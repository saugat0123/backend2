const mongoose=require('mongoose');

const Proteins=mongoose.model("Proteins",{
    ptitle:{
        type:String,
        required:true
    },
    pimage:{
        type:String,
        required:true
    },
    pdesc:{
        type:String
    },
    pprice:{
        type:String,
        required:true
    }
})

module.exports=Proteins;