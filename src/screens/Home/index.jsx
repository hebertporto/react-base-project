import React from 'react';
import { Avatar } from './avatar';
import { ErrorBoundary } from '../../components/ErrorBoundary';

class Home extends React.Component {
  state = {
    item: {
      description: 'Avatar description',
    },
  };

  render() {
    const { item } = this.state;
    return (
      <div>
        <h1>Home</h1>
        <ErrorBoundary>
          <Avatar item={item} />
        </ErrorBoundary>
      </div>
    );
  }
}
export { Home };
