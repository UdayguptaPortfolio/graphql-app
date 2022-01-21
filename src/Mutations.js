import {gql} from "@apollo/client";

export const CREATE_USER=gql`
    mutation(
        $Username: String!,
        $Password: String!,
        $email: String!
      ) {
        createPost(
          Username: $Username,
          Password: $Password,
          email: $email
        ) {
          id
          Username
          Password
          email
        }
    }  
`
export const CHECK_USER=gql`
    mutation(
      $Password: String!,
      $email: String!
    ) {
      login(
        Password: $Password,  
          email: $email
        ){
          email
        }
}
`