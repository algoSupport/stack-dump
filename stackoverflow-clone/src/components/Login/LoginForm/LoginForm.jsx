import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginDataSchema } from '../../../validations/login-validation';
import FieldError from '../../../validations/FieldError';
import { Button, Typography } from '@material-ui/core';
import TextFieldInput from './TextFieldInput';
import '../../../sassStyles/login-form.scss';
import { useHistory } from 'react-router';

function LoginForm() {
    const history = useHistory();

    return (
        <>
            <Formik initialValues={{
                email: "",
                password: ""
            }}
                onSubmit={(data) => {
                    history.push('/featured');
                }}
                validationSchema={loginDataSchema}
            >
                <Form className="login-form">
                    <div className="login-form-field">
                        <Typography variant="body2">Email</Typography>
                        <Field name='email' type="input" as={TextFieldInput} autoComplete="off" />
                        <ErrorMessage name='email' component={FieldError} />
                    </div>
                    <div className="login-form-field">
                        <Typography variant="body2">Password</Typography>
                        <Field name='password' type="password" as={TextFieldInput} />
                        <ErrorMessage name='password' component={FieldError} />
                    </div>
                    <Button type="submit" variant="contained" style={{
                        margin: '3vh',
                        marginTop: '1vh',
                        width: '80%',
                        backgroundColor: '#1286af',
                        color: 'white'
                    }}>Login</Button>
                </Form>
            </Formik>
        </>
    )
}

export default LoginForm;