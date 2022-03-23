import { useState } from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import './App.css';
import LoginForm from './components/LoginForm';
import UserDashboard from './components/UserDashboard';

function App() {
    const [user, setUser] = useState(null);
    const [loginError, setLoginError] = useState(null);
    const onLoginSuccess = (userData) => {
        setUser(userData);
    };

    const onLoginError = (error) => {
        setLoginError(error);
    };

    if (user) {
        return (
            <UserDashboard user={user}/>
        );
    }

    return (
        <>
            <LoginForm onLoginSuccess={onLoginSuccess} onLoginError={onLoginError}/>
            {loginError && <Snackbar open={true} autoHideDuration={6000}>
                <Alert severity="error" sx={{ width: '100%' }}>
                    {loginError}
                </Alert>
            </Snackbar>}
        </>
    );
}

export default App;
