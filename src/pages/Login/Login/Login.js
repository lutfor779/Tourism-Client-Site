import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { signInWithGoogle, setUser, setError } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                setUser(result.user);
                setError("");

                // handle user
                const user = { name: result.user.displayName, email: result.user.email };
                fetch('https://aqueous-badlands-20033.herokuapp.com/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })

                // redirect url
                history.push(from)
            })
            .catch(err => {
                setError(err.message)
            })
    }



    return (
        <div>
            <h1>Please Login</h1>
            <Button variant="warning"
                type="button"
                onClick={handleGoogleLogin}
                className="mt-3">
                Google Signin
            </Button>
        </div>
    );
};

export default Login;