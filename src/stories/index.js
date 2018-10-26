import React from 'react';

import { storiesOf } from '@storybook/react';
import Feed from '../components/Feed';

storiesOf('Feed Components', module)
  .addDecorator(story => <div>{story()}</div>)
  .add('FEED', () => <Feed />);
