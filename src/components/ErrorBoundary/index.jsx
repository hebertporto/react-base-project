import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError: ', error);
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log('error application', error, info);
  }
  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <h1>Sorry, Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

export { ErrorBoundary };
