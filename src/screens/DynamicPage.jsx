import React from 'react';
import { Header } from 'semantic-ui-react';

import Menu from '../containers/Menu/Menu';

const DynamicPage = () => {
  return (
    <Menu>
      <Header as="h2">Dynamic Page</Header>
      <p>This page was loaded asynchronously!!!</p>
    </Menu>
  );
};

export default DynamicPage;
