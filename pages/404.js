import Head from 'next/head';
import Link from 'next/link';
import { GridColumn, Image } from 'semantic-ui-react';
import Layout from '../layout/layout';
import {
    GoHome,
    NotFoundContainer,
    NotFoundImage,
    NotFoundInformation
} from '../theme/theme';

const NotFound = () => {
    return (
        <NotFoundContainer>
            <Head>
                <title>
                    Page Not Found | NextJS Login with WordPress and GraphQL
                </title>
            </Head>
            <Layout>
                <GridColumn computer={16}>
                    <NotFoundImage>
                        <Image src="404.svg" alt="404" />
                        <NotFoundInformation>
                            <h1>Error 404</h1>
                            <h2>Page no found</h2>
                            <Link href="/">
                                <GoHome>Go Home</GoHome>
                            </Link>
                        </NotFoundInformation>
                    </NotFoundImage>
                </GridColumn>
            </Layout>
        </NotFoundContainer>
    );
};

export default NotFound;
