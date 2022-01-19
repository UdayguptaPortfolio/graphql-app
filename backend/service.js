const express=require('express')
const {ApolloServer,gql}=require('apollo-server-express')
const typeDefs=require('./typeDefs')
const resolvers = require('./resolvers')
const mongoose=require('mongoose');

//Backend--->gql,Frontend--->GraphQl Schema

async function startServer(){
 const app=express();
 const apolloServer=new ApolloServer({
     typeDefs,
     resolvers,
 });
 await apolloServer.start()

 apolloServer.applyMiddleware({app:app});

 app.use((req,res)=>{
     res.send("Hello From Apollo Server");
 })
mongoose.connect('mongodb+srv://Udaygupta12:Udaygupta123@cluster0.2nekh.mongodb.net/demo_graphQL?retryWrites=true&w=majority',()=>console.log("Database Connected"));
 app.listen(5000,()=>console.log("Apollo Server Is Running"))
}
startServer();