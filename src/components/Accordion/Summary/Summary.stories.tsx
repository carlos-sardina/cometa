import { Story } from '@storybook/react';
import React from 'react';
import { Summary, SummaryProps } from './Summary';

export default {
  title: 'Components/Summary',
  component: Summary,
};

const Template: Story<SummaryProps> = (args) => <Summary {...args} />;

export const Base = Template.bind({});
Base.args = {
  title: 'Cuotas pendientes',
  description: 'Puedes seleccionar mas de uno',
};

export const noDescription = Template.bind({});
noDescription.args = {
  title: 'Cuotas futuras',
};
