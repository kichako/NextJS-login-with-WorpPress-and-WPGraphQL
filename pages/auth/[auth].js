import { useRouter } from 'next/router';
import useAuth from '../../hooks/useAuth';
import { GridColumn } from 'semantic-ui-react';
import LoginForm from '../../components/loginForm';
import { AuthContainer, FormArea } from '../../theme/theme';
import AuthIcon from '../../components/authIcon';
import Layout from '../../layout/layout';
import RegisterForm from '../../components/registerForm';
import ForgotForm from '../../components/forgotForm';
import RecoveryForm from '../../components/recoveryForm';

const Login = () => {
    const { auth } = useAuth();
    const { query } = useRouter();
    const router = useRouter();

    const authRoutes = {
        signin: 'signin',
        signup: 'signup',
        forgot: 'forgotpassword',
        recovery: 'recovery'
    };

    if (auth) {
        router.push('/');
    }

    return (
        <AuthContainer>
            <Layout>
                <GridColumn computer={16}>
                    <FormArea>
                        {query.auth === authRoutes.signin ? (
                            <>
                                <AuthIcon
                                    icon="fi fi-sr-user"
                                    title="Sign In"
                                />
                                <LoginForm />
                            </>
                        ) : null}
                        {query.auth === authRoutes.signup ? (
                            <>
                                <AuthIcon
                                    icon="fi fi-sr-user"
                                    title="Sign Up"
                                />
                                <RegisterForm />
                            </>
                        ) : null}
                        {query.auth === authRoutes.forgot ? (
                            <>
                                <AuthIcon
                                    icon="fi fi-sr-interrogation"
                                    title="Forgot Password"
                                />
                                <ForgotForm />
                            </>
                        ) : null}
                        {query.auth === authRoutes.recovery ? (
                            <>
                                <AuthIcon
                                    icon="fi fi-sr-interrogation"
                                    title="Recovery"
                                />
                                <RecoveryForm />
                            </>
                        ) : null}
                    </FormArea>
                </GridColumn>
            </Layout>
        </AuthContainer>
    );
};

export default Login;
