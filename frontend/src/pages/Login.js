import React, { useState } from "react";
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Button
} from 'reactstrap'

import { useHistory } from 'react-router';

import { LogIn as LogInIcon } from 'react-feather';

import Header from "./../components/Header.js";
import "./Login.scss";

import { 
    useAuthenticationDispatchContext,
    useAuthenticationStateContext, 
    login 
} from "../context/AuthenticationIndex";

const Login = () => {
    const authenticationDispatch = useAuthenticationDispatchContext();
    const authenticationState = useAuthenticationStateContext();
    const { errorMessage, loading } = authenticationState;
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();
    
    const handleSignin = async (e) => {
        e.preventDefault();
        
        const payload = { email, password }

        try {
            let response = await login(authenticationDispatch, payload);
            if (!response) {
                return;
            }
            history.replace('/');
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <main id="login">
            <Container>
                <Row className="login-container">
                    <Col xs={12} sm="12" md={{ size: 6, offset: 3 }}>
                        <div class="login-inner">
                            <Form onSubmit={handleSignin}>
                                <FormGroup>
                                    <Label>E-mail</Label>
                                    <Input
                                        type="email"
                                        disabled={loading}
                                        placeholder="E-mail"
                                        onChange={(event) =>
                                            setEmail(event.target.value)
                                        }
                                    ></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Password</Label>
                                    <Input
                                        type="password"
                                        disabled={loading}
                                        onChange={(event) =>
                                            setPassword(event.target.value)
                                        }
                                    ></Input>
                                </FormGroup>
                                {errorMessage !== null && (
                                    <FormGroup className="pb-2">
                                        <span className="alert alert-danger">
                                            {errorMessage.message}
                                        </span>
                                    </FormGroup>
                                )}
                                <Button
                                    color="success"
                                    outline
                                    disabled={loading}
                                    className="has-icon"
                                    type="submit"
                                >
                                    <span>Login</span>
                                    {<LogInIcon size={16} />}
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    );
};

export default Login;
