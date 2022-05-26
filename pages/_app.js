import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import client from '../apollo/client';
import { ApolloProvider } from '@apollo/client';
import { getToken, removeToken, setToken } from '../utils/token';
import { getUserID, removeUserID, setUserID } from '../utils/userId';
import AuthContext from '../context/authContext';
import jwtDecode from 'jwt-decode';
import { ToastContainer } from 'react-toastify';

import 'normalize.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/uicons-bold-rounded.css';
import '../styles/uicons-regular-rounded.css';
import '../styles/uicons-solid-rounded.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    const [auth, setAuth] = useState(undefined);
    const [reloadUser, setReloadUser] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = getToken();
        const userID = getUserID();
        if ((token, userID)) {
            setAuth({
                token,
                idUser: jwtDecode(token).id
            });
        } else {
            setAuth(null);
        }
        setReloadUser(false);
    }, [reloadUser]);

    const sesion = (token) => {
        setToken(token);
        setAuth({
            token,
            idUser: jwtDecode(token).id
        });
    };

    const userid = (userid) => {
        setUserID(userid);
    };

    const logout = () => {
        if (auth) {
            removeToken();
            removeUserID();
            setAuth(null);
            router.push('/auth/signin');
        }
    };

    const authData = useMemo(
        () => ({
            auth,
            sesion,
            logout,
            setReloadUser,
            userid
        }),
        [auth]
    );

    if (auth === undefined) return null;

    return (
        <AuthContext.Provider value={authData}>
            <ApolloProvider client={client}>
                <Component {...pageProps} />
                <ToastContainer
                    position="bottom-left"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover
                />
            </ApolloProvider>
        </AuthContext.Provider>
    );
}

export default MyApp;
