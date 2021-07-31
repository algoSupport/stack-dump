import * as Yup from 'yup';

export const loginDataSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email cannot be empty.'),
    password: Yup.string().min(6, 'Must be atleast 6 characters long').required('Password cannot be empty.')
});