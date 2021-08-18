import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email format should match @test.com')
    .min(2, 'Min length of symbols 2 !')
    .max(50, 'Max length of symbols 50 !')
    .matches(/^([^<>~])+@([^<>~]+)\.(com|ua|ru)$/gm, 'Domain name must be .com .ru .ua')
    .required('Email is a required field'),
  password: Yup.string()
    .min(5, 'Min number of characters must be 8 symbols !')
    .max(10, 'Max 10 symbols')
    .matches(/([^<>~]+)$/, 'You are using forbid symbols')
    .required('Please provide a pasword'),
});
