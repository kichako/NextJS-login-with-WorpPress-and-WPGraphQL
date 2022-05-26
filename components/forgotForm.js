import { useRouter } from 'next/router';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';
import { FORGOT_PASSWORD } from '../graphql/mutations';
import { Dimmer, Loader } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import {
    ButtonSubmit,
    FormContent,
    InputForm,
    ButtonAction
} from '../theme/theme';
import Head from 'next/head';

const ForgotForm = () => {
    const router = useRouter();
    const [forgotpassword, { loading }] = useMutation(FORGOT_PASSWORD);

    const initialValues = () => {
        return {
            email: ''
        };
    };

    const validationSchema = () => {
        return {
            email: Yup.string().email().required(true)
        };
    };

    return (
        <>
            <Head>
                <title>
                    Forgot Password | NextJS Login with WordPress and GraphQL
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
                                await forgotpassword({
                                    variables: formData
                                });

                                toast.success(
                                    'Password reset request sent, if your email exists you will receive a message shortly with the steps to follow.'
                                );
                                router.push('/');
                            } catch (error) {
                                toast.error(
                                    'An error occurred, please try again later.'
                                );
                                return null;
                            }
                        }}
                    >
                        <FormContent>
                            <span>
                                Enter your email address so that we can send you
                                the steps to follow and you can to follow so you
                                can regain access to your account.
                            </span>
                            <InputForm
                                placeholder="Email"
                                type="email"
                                name="email"
                                id="email"
                            />

                            <ButtonSubmit type="submit">
                                Forgot Password
                            </ButtonSubmit>
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

export default ForgotForm;
