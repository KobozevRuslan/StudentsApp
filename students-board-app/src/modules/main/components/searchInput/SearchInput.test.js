import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';

import SearchInput from './SearchInput';

describe('SearchInput', () => {
  it('check placeholder text in SearchInput component', () => {
    render(<SearchInput />);
    expect(screen.getByPlaceholderText('Search for the course')).toBeInTheDocument();
    screen.debug();
  });
});
