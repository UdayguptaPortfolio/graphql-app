const Demo=require('./models/demoModel')
const resolvers={
    Query:{
        hello:()=>{
            return 'Hello World';
        },
        getAllPosts:async()=>{
            return await Demo.find()
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