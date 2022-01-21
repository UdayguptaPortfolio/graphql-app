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
        },
        login:async(parent,args,context,info)=>{
            const{Password,email}=args;
            const user=await Demo.findOne({email})
            if(user){
                if(user.Password===Password)
                {
                    return user;
                    // return res.json({status:'ok',user:true ,message:'Hi You are Logged In'})
                    // console.log("Logged In")
                }
                else{
                    //throw new Error('Login Credentials are wrong')
                   return user;
                    // return res.json({status:'error',user:false ,message:'Login Credentials are wrong'})
                    //console.log("Password Not Matches")
                }
            }
            else{
                //throw new Error('No such user found')
                return user;
                // return res.json({status:'error',user:false ,message:'User Not Found'})
                //console.log("Username not Found")
            }
        }
    }
}

module.exports=resolvers;