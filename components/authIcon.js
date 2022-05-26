import { AuthIconForm } from '../theme/theme';

const AuthIcon = ({ icon, title }) => {
    return (
        <AuthIconForm className="form-logo">
            <i className={icon} />
            <h2>{title}</h2>
        </AuthIconForm>
    );
};

export default AuthIcon;
