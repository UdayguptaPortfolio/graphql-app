const Demo=require('./models/demoModel')
const resolvers={
    Query:{
        hello:()=>{
            return 'Hello World';
        },
        getAllPosts:async(req,res)=>{
            return await Demo.find()
            // const user=await Demo.findOne({email,Username,Password})
            // if(user){
            //     return res.json({status:'ok',user:true ,message:'Hi You are Logged In'})
            // }
            // else{
            //     return res.json({status:'error',user:false ,message:'Login Credentials are wrong'})
            // }
        }
    },
    Mutation:{
        createPost:async(parent,args,context,info)=>{
            const{Username,Password,email}=args;
            const demo=new Demo({Username,Password,email})
            await demo.save();
            return demo;
        }
    }
}

module.exports=resolvers;