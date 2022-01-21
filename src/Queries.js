import {gql} from "@apollo/client";

export const GET_USER_LIST=gql`
{
    getAllPosts
		{
		email,
    	Password,
    }
}
`