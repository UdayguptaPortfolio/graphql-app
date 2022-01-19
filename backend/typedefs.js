const {gql}=require('apollo-server-express');
const typeDefs=gql`
type Demo{
    id:ID
    Username:String
    Password:String
    email:String
}

type Query{
    hello:String
    getAllPosts:[Demo]
}
input PostInput{
    Username:String
    Password:String
    email:String
}

type Mutation{
    createPost(
        Username:String!
        Password:String!
        email:String!
        ):Demo
}
`;

module.exports=typeDefs;