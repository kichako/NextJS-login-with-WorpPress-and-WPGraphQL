import { useRouter } from 'next/router';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup';
import useAuth from '../hooks/useAuth';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../graphql/mutations';
import { Dimmer, Loader } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import {
    ButtonSubmit,
    FormContent,
    InputForm,
    ButtonAction,
    ForgotPasswordLink
} from '../theme/theme';
import Head from 'next/head';

const LoginForm = () => {
    const router = useRouter();
    const { sesion, userid } = useAuth();
    const [login, { loading }] = useMutation(LOGIN_USER);
    const initialValues = () => {
        return {
            username: '',
            password: ''
        };
    };
    const validationSchema = () => {
        return {
            username: Yup.string().required(true),
            password: Yup.string().required(true)
        };
    };

    return (
        <>
            <Head>
                <title>
                    Sign In! | NextJS Login with WordPress and GraphQL
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
                                const response = await login({
                                    variables: formData
                                });

                                sesion(response.data.login.authToken);
                                userid(response.data.login.user.id);
                                toast.success(
                                    'You are successfully logged in.'
                                );
                                router.push('/');
                            } catch (error) {
                                toast.error(
                                    'Your username or password is incorrect, please try again.'
                                );
                                return null;
                            }
                        }}
                    >
                        <FormContent className="form-container">
                            <InputForm
                                placeholder="Username or Email"
                                name="username"
                                type="text"
                                id="username"
                            />
                            <InputForm
                                placeholder="Password"
                                name="password"
                                type="password"
                                id="password"
                            />
                            <div className="form-button">
                                <ButtonSubmit className="button" type="submit">
                                    Sign In
                                </ButtonSubmit>
                            </div>

                            <ForgotPasswordLink>
                                <Link href="/auth/forgotpassword">
                                    <a>Forgot your password?</a>
                                </Link>
                            </ForgotPasswordLink>
                        </FormContent>
                    </Formik>
                    <Link href="/auth/signup">
                        <ButtonAction>Sign Up!</ButtonAction>
                    </Link>
                </>
            )}
        </>
    );
};

export default LoginForm;
