const mongoose=require("mongoose")
const blogSchema=new mongoose.Schema({
    blogTitle:{
        type:String
    },
    blogDesc:{
        type:String
    }
,
timestamp: {
    type: Date,
    default: Date.now 
  } 
}
)
module.exports=mongoose.model('Blog',blogSchema) 