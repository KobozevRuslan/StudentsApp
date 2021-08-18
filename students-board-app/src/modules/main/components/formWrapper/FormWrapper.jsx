import React from 'react';
import { Formik, Form, Field } from 'formik';
import PropTypes from 'prop-types';

import arrow from '@assets/image/Arrow.png';

import CustomInput from './customInput/CustomInput';

import { Wrapper, Label, Button, MainWrapper } from './styledComponents/FormWrapper';

const FormWrapper = ({
  title,
  fields,
  validation,
  onSubmitHandle: { buttonHandler, buttonName },
}) => {
  return (
    <MainWrapper>
      <Wrapper>
        <h1>{title}</h1>
        <Formik initialValues={fields} validationSchema={validation} onSubmit={buttonHandler}>
          {formik => {
            return (
              <Form>
                {Object.keys(fields).map(item => {
                  return (
                    <div key={item}>
                      <Label>
                        <Field
                          name={item}
                          type={item}
                          placeholder={item === 'password' ? 'password' : 'test@gmail.com'}
                          component={CustomInput}
                        />
                      </Label>
                    </div>
                  );
                })}
                <Button type="submit" disabled={!(formik.isValid && formik.dirty)}>
                  {buttonName}
                  <img src={arrow} />
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Wrapper>
    </MainWrapper>
  );
};

FormWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.object.isRequired,
  validation: PropTypes.object.isRequired,
  onSubmitHandle: PropTypes.object.isRequired,
};

export default FormWrapper;
