import React from 'react';
import { GridColumn, Image } from 'semantic-ui-react';
import useAuth from '../hooks/useAuth';
import { useRouter } from 'next/router';
import Layout from '../layout/layout';
import { ButtonLogout, HomeContainer, UserAvatar } from '../theme/theme';
import { useQuery } from '@apollo/client';
import { USER_DATA } from '../graphql/queries';
import Head from 'next/head';

const Homepage = () => {
    const userid = localStorage.getItem('ID');
    const { logout, auth } = useAuth();
    const router = useRouter();
    const { data, loading, error } = useQuery(USER_DATA, {
        variables: { id: userid }
    });

    if (!auth) {
        router.replace('/auth/signin');
        return null;
    }

    if (loading) {
        return null;
    }

    if (error) {
        return <span></span>;
    }

    const user = data.user;

    console.log(user);

    return (
        <HomeContainer>
            <Head>
                <title>
                    My Account! | NextJS Login with WordPress and GraphQL
                </title>
            </Head>
            <Layout>
                <GridColumn computer={16}>
                    <UserAvatar>
                        <Image src={user.avatar.url} alt="User Avatar" />
                    </UserAvatar>
                    <h1>
                        Welcome <span>{user.name}</span>
                    </h1>
                    <p>
                        You are logged into WordPress using NextJS and GraphQL!
                    </p>
                    {auth ? (
                        <ButtonLogout onClick={logout} basic>
                            Log Out
                        </ButtonLogout>
                    ) : null}
                </GridColumn>
            </Layout>
        </HomeContainer>
    );
};

export default Homepage;
