import { Story } from '@storybook/react';
import React from 'react';
import { Header, HeaderProps } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
};

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Base = Template.bind({});
Base.args = {
  title: 'Colegio Brillamont',
  logoUrl: "http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/media/school_logos/download.png",
};
