import React from 'react';
import ***REMOVED*** action ***REMOVED*** from '@storybook/addon-actions';
import ***REMOVED*** Button ***REMOVED*** from '@storybook/react/demo';

export default ***REMOVED***
  title: 'Button',
***REMOVED***;

export const text = () => <Button onClick=***REMOVED***action('clicked')***REMOVED***>Hello Button</Button>;

export const emoji = () => (
  <Button onClick=***REMOVED***action('clicked')***REMOVED***>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
