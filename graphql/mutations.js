import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation LoginUser($username: String!, $password: String!) {
        login(
            input: {
                clientMutationId: "uniqueId"
                username: $username
                password: $password
            }
        ) {
            authToken
            user {
                id
            }
        }
    }
`;

export const REGISER_USER = gql`
    mutation registeruser(
        $username: String!
        $email: String!
        $password: String!
    ) {
        registerUser(
            input: { username: $username, email: $email, password: $password }
        ) {
            clientMutationId
        }
    }
`;

export const FORGOT_PASSWORD = gql`
    mutation forgotpassword($email: String!) {
        sendPasswordResetEmail(input: { username: $email }) {
            clientMutationId
        }
    }
`;
export const RECOVERY_USER = gql`
    mutation recovery($key: String!, $login: String!, $password: String!) {
        resetUserPassword(
            input: { key: $key, login: $login, password: $password }
        ) {
            clientMutationId
        }
    }
`;
