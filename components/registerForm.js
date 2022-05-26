import { useRouter } from 'next/router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';
import { REGISER_USER } from '../graphql/mutations';
import { Dimmer, Loader } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import {
    ButtonAction,
    ButtonSubmit,
    FormContent,
    InputForm
} from '../theme/theme';
import Link from 'next/link';
import Head from 'next/head';

const RegisterForm = () => {
    const router = useRouter();
    const [registerUser, { loading }] = useMutation(REGISER_USER);

    const initialValues = () => {
        return {
            username: '',
            email: '',
            password: ''
        };
    };

    const validationSchema = () => {
        return {
            username: Yup.string().required(true),
            email: Yup.string().email(true).required(true),
            password: Yup.string().required(true)
        };
    };

    return (
        <>
            <Head>
                <title>
                    Sign Up! | NextJS Login with WordPress and GraphQL
                </title>
            </Head>
            {loading ? (
                <Dimmer active inverted>
                    <Loader size="medium" />
                </Dimmer>
            ) : (
                <>
                    <Formik
                        initialValues={initialValues()}
                        validationSchema={Yup.object(validationSchema())}
                        onSubmit={async (formData) => {
                            try {
                                await registerUser({
                                    variables: formData
                                });

                                toast.success('User successfully registered!');
                                router.push('/');
                            } catch (error) {
                                toast.error(
                                    'An error has occurred, check your data and try again.'
                                );
                                return null;
                            }
                        }}
                    >
                        <FormContent>
                            <InputForm
                                placeholder="Username"
                                name="username"
                                type="text"
                                id="username"
                            />
                            <InputForm
                                placeholder="Email"
                                name="email"
                                type="email"
                                id="email"
                            />
                            <InputForm
                                placeholder="Password"
                                name="password"
                                type="password"
                                id="password"
                            />
                            <ButtonSubmit type="submit">Sign Up</ButtonSubmit>
                        </FormContent>
                    </Formik>

                    <Link href="/auth/signin">
                        <ButtonAction>Sign In!</ButtonAction>
                    </Link>
                </>
            )}
        </>
    );
};

export default RegisterForm;
