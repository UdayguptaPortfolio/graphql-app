import {gql} from "@apollo/client";

export const GET_USER_LIST=gql`
{
    getAllPosts
		{
    	id,
    	Username,
			email,
    	Password,
    }
}
`