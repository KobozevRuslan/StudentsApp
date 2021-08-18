import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import FormWrapper from '../../main/Components/formWrapper/FormWrapper';

import { signInSchema } from './validation';

import { authLogin } from '../../../store/actions/app';

const SignIn = ({ title, buttonName, inputTypes: { email, password } }) => {
  const dispatch = useDispatch();

  return (
    <FormWrapper
      title={title}
      fields={{ email, password }}
      validation={signInSchema}
      onSubmitHandle={{
        buttonName,
        buttonHandler: values => {
          dispatch(authLogin(values));
        },
      }}
    />
  );
};

SignIn.propTypes = {
  title: PropTypes.string.isRequired,
  buttonName: PropTypes.string.isRequired,
  inputTypes: PropTypes.object.isRequired,
};

export default SignIn;
