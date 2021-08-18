import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { Input, Line, Eye, ErrorMessage, ItemTitle } from './styledComponent/styledComponents';

const CustomInput = ({ type, placeholder, field, form: { touched, errors }, ...props }) => {
  const [visible, setVisible] = useState(false);

  const ref = useRef(null);

  const visibleClick = () => {
    setVisible(!visible);
    ref.current.type = visible ? 'password' : 'text';
  };

  return (
    <div>
      <ItemTitle>{type}</ItemTitle>
      <Input ref={ref} type={type} {...field} {...props} placeholder={placeholder} />
      {type === 'password' && <Eye onClick={visibleClick} />}
      <Line />
      {touched[field.name] && errors[field.name] && (
        <ErrorMessage>{errors[field.name]}</ErrorMessage>
      )}
    </div>
  );
};

CustomInput.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,
};

export default CustomInput;
