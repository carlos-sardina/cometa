import { Story } from '@storybook/react';
import React from 'react';
import { Summary, SummaryProps } from './Summary';

export default {
  title: 'Components/Summary',
  component: Summary,
};

const Template: Story<SummaryProps> = (args) => <Summary {...args} />;

export const Price = Template.bind({});
Price.args = {
  title: 'Price',
  description: '$100',
};
