import { Story } from '@storybook/react';
import React from 'react';
import { Home, HomeProps } from './Home';

export default {
  title: 'Pages/Home',
  component: Home,
};

const Template: Story<HomeProps> = (args) => <Home {...args} />;

export const Base = Template.bind({});
Base.args = {
};
