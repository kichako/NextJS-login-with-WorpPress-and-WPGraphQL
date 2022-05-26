import { gql } from '@apollo/client';

export const USER_DATA = gql`
    query userData($id: ID!) {
        user(id: $id) {
            avatar(size: 320) {
                url
            }
            name
        }
    }
`;
