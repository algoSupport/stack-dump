import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginDataSchema } from '../../../validations/loginValidation';
import FieldError from '../../../validations/FieldError';
import { TextField, Button } from '@material-ui/core';

function LoginForm() {
    return (
        <>
            <Formik initialValues={{
                email: "",
                password: ""
            }}
                onSubmit={(data) => {
                    console.log(data);
                }}
                validationSchema={loginDataSchema}
            >
                <Form>
                    <div>
                        <Field name='email' type="input" as={TextField} autoComplete="off" />
                        <ErrorMessage name='email' component={FieldError} />
                    </div>
                    <div>
                        <Field name='password' type="password" as={TextField} />
                        <ErrorMessage name='password' component={FieldError} />
                    </div>
                    <Button type="submit" variant="outlined">Submit</Button>
                </Form>
            </Formik>
        </>
    )
}

export default LoginForm;