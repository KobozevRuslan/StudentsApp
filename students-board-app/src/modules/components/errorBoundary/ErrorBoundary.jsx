import React from 'react';
import { ErrorMessage } from './styledComponent/ErrorBoundary';

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    return this.state.hasError ? 
      <ErrorMessage>Something went wrong: {this.state.error.message} </ErrorMessage>
     : 
      this.props.children
    ;
  }
}

export default ErrorBoundary;
