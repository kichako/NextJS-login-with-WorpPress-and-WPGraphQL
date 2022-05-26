import { useRouter } from 'next/router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';
import { RECOVERY_USER } from '../graphql/mutations';
import { Dimmer, Loader } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import { ButtonSubmit, FormContent, InputForm } from '../theme/theme';
import Head from 'next/head';

const RecoveryForm = () => {
    const router = useRouter();
    const { query } = useRouter();
    const [recovery, { loading }] = useMutation(RECOVERY_USER);

    const initialValues = () => {
        return {
            password: ''
        };
    };
    const validationSchema = () => {
        return {
            password: Yup.string().required(true)
        };
    };

    if (!query.key && !query.login) {
        router.push('/');
        return null;
    }

    return (
        <>
            <Head>
                <title>
                    Account Recovery! | NextJS Login with WordPress and GraphQL
                </title>
            </Head>
            {loading ? (
                <Dimmer active inverted>
                    <Loader size="medium" />
                </Dimmer>
            ) : (
                <Formik
                    initialValues={initialValues()}
                    validationSchema={Yup.object(validationSchema())}
                    onSubmit={async (formData) => {
                        try {
                            await recovery({
                                variables: {
                                    key: query.key,
                                    login: query.login,
                                    password: formData.password
                                }
                            });

                            toast.success(
                                'Your password has been successfully changed!'
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
                        <InputForm
                            placeholder="New Password"
                            name="password"
                            type="password"
                            id="password"
                        />
                        <ButtonSubmit type="submit">
                            Change Password
                        </ButtonSubmit>
                    </FormContent>
                </Formik>
            )}
        </>
    );
};

export default RecoveryForm;
