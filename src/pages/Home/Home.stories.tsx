import { Story } from '@storybook/react';
import React from 'react';
import { Home } from './Home';

export default {
  title: 'Pages/Home',
  component: Home,
};

const Template: Story = (args) => <Home {...args} />;

export const Base = Template.bind({});