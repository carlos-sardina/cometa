import { Story } from '@storybook/react';
import React from 'react';
import { DetailRow, DetailRowProps } from './DetailRow';

export default {
  title: 'Components/DetailRow',
  component: DetailRow,
};

const Template: Story<DetailRowProps> = (args) => <DetailRow {...args} />;

export const Price = Template.bind({});
Price.args = {
  title: 'Price',
  description: '$100',
};
