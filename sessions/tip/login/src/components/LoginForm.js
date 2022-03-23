import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function LoginForm(props) {
    const onSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        fetch('http://mscbt-luis-grande.herokuapp.com/tip/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: data.get('username'),
                password: data.get('password')
            })
        })
        .then(response => response.json())
        .then(json => {
            if (json.error) {
                props.onLoginError(json.error);
            } else {
                props.onLoginSuccess(json);
            }
        });
    };

    return (
        <form onSubmit={onSubmit} style={{marginTop: 32}}>
            <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
            />
            <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
            >
                Sign In
            </Button>
        </form>
    )
}

export default LoginForm;