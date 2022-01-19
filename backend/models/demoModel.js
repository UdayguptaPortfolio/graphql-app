const mongoose=require('mongoose')

const demoSchema=new mongoose.Schema({
    Username:{
        type:String
    },
    Password:{
        type:String
    },
    email:{
        type:String
    }

})

const Demo=mongoose.model('demo_data',demoSchema);
module.exports=Demo;