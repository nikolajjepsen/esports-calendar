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

import { useAuthenticationDispatchContext, login } from "../context/AuthenticationIndex";

const Login = () => {
    const dispatch = useAuthenticationDispatchContext();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();
    
    const handleSignin = (e) => {
        e.preventDefault();
        
        const payload = { email, password }

        try {
            login(dispatch, payload);
            history.replace('/');
        } catch (error) {
            // in case of unmatched action type.
            console.log(error);
        }

    }

    return (
        <main id="login">
            <Header />
            <Container>
                <Row className="login-container">
                    <Col xs={12} sm="12" md={{ size: 6, offset: 3 }}>
                        <div class="login-inner">
                            <Form onSubmit={handleSignin}>
                                <FormGroup>
                                    <Label>E-mail</Label>
                                    <Input
                                        type="email"
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
                                        onChange={(event) =>
                                            setPassword(event.target.value)
                                        }
                                    ></Input>
                                </FormGroup>
                                <Button
                                    color="success"
                                    outline
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
