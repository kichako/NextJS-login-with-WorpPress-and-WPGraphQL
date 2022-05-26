import styled from '@emotion/styled';
import { Field, Form } from 'formik';

export const NotFoundContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    user-select: none;
`;

export const NotFoundImage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 360px;
    }
`;

export const NotFoundInformation = styled.div`
    margin-left: 40px;
    color: #141204;

    h1 {
        font-size: 68px;
        line-height: 40px;
    }
`;

export const GoHome = styled.a`
    background: #141204;
    color: #fff;
    text-decoration: none;
    text-shadow: none;
    font-weight: 500;
    font-size: 18px;
    border-radius: 34px !important;
    padding: 14px 18px;
    border: none;
    cursor: pointer;
    margin-top: 16px;
    display: inline-block;

    &:hover {
        color: #fff;
        text-decoration: none;
    }
`;

export const HomeContainer = styled.div`
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #141204;
    user-select: none;

    h1 {
        span {
            display: block;
            font-size: 38px;
        }
    }

    p {
        font-size: 18px;
        font-weight: 500;
    }
`;

export const UserAvatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        border-radius: 100%;
        width: 260px;
    }
`;

export const AuthContainer = styled.div`
    overflow: hidden;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #141204;
    user-select: none;
`;

export const AuthIconForm = styled.div`
    text-align: center;
    margin-bottom: 18px;
    i {
        font-size: 90px;
    }
`;

export const FormArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const FormContent = styled(Form)`
    width: 320px;
    padding: 12px 24px;
    background: #fff;
    color: #141204 !important;

    span {
        margin-bottom: 20px;
        display: block;
        text-align: center;
        color: #141204;
        font-weight: 500;
    }
`;

export const InputForm = styled(Field)`
    color: #141204;
    text-align: center;
    font-size: 18px !important;
    width: 100% !important;
    padding: 14px 18px !important;
    max-height: none !important;
    height: 40px !important;
    background-color: #fff !important;
    border-radius: 34px !important;
    margin-bottom: 4px;
    border: 1px solid rgba(20, 18, 4, 0.1);
    outline: none;
`;

export const ButtonSubmit = styled.button`
    background: #141204;
    color: #fff;
    text-decoration: none;
    text-shadow: none;
    font-weight: 700;
    font-size: 18px;
    width: 100%;
    border-radius: 34px !important;
    padding: 14px;
    border: none;
    cursor: pointer;
    margin-top: 24px;
    border: 2px solid #141204;
    transition: ease 0.3s;

    &:hover {
        background: rgba(20, 18, 4, 0.9);
    }
`;

export const ButtonLogout = styled.button`
    background: #141204;
    color: #fff;
    text-decoration: none;
    text-shadow: none;
    font-weight: 700;
    font-size: 18px;
    border-radius: 34px !important;
    padding: 14px;
    border: none;
    cursor: pointer;
    margin-top: 24px;
    border: 2px solid #141204;
    transition: ease 0.3s;

    &:hover {
        background: rgba(20, 18, 4, 0.9);
    }
`;

export const ForgotPasswordLink = styled.div`
    margin-top: 14px;
    text-align: center;
    a {
        font-weight: 700;
        color: #141204 !important;

        &:hover {
            color: #141204;
            text-decoration: none;
        }
    }
`;

export const ButtonAction = styled.a`
    background: transparent;
    color: #141204;
    border: 2px solid #141204;
    padding: 14px 18px;
    display: inline;
    border-radius: 34px;
    font-size: 16px;
    font-weight: 700;
    margin-top: 48px;
    cursor: pointer;
    transition: ease 0.3s;

    &:hover {
        color: #141204;
        text-decoration: none;
        background: #141204;
        color: #ffffff;
    }
`;
