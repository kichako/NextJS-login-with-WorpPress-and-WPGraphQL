import { Container, Grid } from 'semantic-ui-react';

const Layout = ({ children }) => {
    return (
        <Container>
            <Grid>{children}</Grid>
        </Container>
    );
};

export default Layout;
