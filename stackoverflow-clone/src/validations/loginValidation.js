import * as Yup from 'yup';

export const loginDataSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Required'),
    password: Yup.string().min(6, 'Password must be atleast 6 characters long').required('Required')
});