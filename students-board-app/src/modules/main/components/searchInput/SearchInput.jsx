import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Input, ErrorMessage } from './styledComponent/styledComponents';

const SearchInput = ({ value, setValue }) => {
  const [textError, setTextError] = useState('');

  const textHandler = e => {
    const regEx = /([<>~]+)/;
    if (regEx.test(e.target.value)) {
      return setTextError('Incorrect text input, prohibited characters <> ~');
    }
    return setValue(e.target.value);
  };

  const onKeyPressHandler = e => {
    if (e.keyCode === 13) {
      setValue(e.target.value);
    }
  };

  return (
    <Wrapper>
      {textError && <ErrorMessage>{textError}</ErrorMessage>}
      <Input
        type="text"
        placeholder="Search for the course"
        name="text"
        maxLength="100"
        value={value}
        onChange={e => textHandler(e)}
        onKeyDown={e => onKeyPressHandler(e)}
      />
    </Wrapper>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default SearchInput;
