import React from 'react';
import { Icon, Header } from 'semantic-ui-react';

import Menu from '../containers/Menu/Menu';

const NoMatch = () => {
  return (
    <Menu>
      <strong>Page not found!</strong>
    </Menu>
  );
};

export default NoMatch;
