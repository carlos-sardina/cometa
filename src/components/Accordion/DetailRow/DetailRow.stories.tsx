import { Story } from '@storybook/react';
import React from 'react';
import { DetailRow, DetailRowProps } from './DetailRow';

export default {
  title: 'Components/DetailRow',
  component: DetailRow,
};

const Template: Story<DetailRowProps> = (args) => <DetailRow {...args} />;

export const Pagado = Template.bind({});
Pagado.args = {
  title: 'Colegiatura Agosto 21',
  description: 'Pagado el 02 de Jul.',
  onlySummary: true,
};

export const PendienteInteres = Template.bind({});
PendienteInteres.args = {
  title: 'Colegiatura Septiembre 21',
  description: 'Vencido el 10 de Sept.',
  amount: '$2,000',
  amountSubtext: 'Interés: $200',
};

export const PendienteNoInteres = Template.bind({});
PendienteNoInteres.args = {
  title: 'Colegiatura Octubre 21',
  description: 'Vence el 10 de Oct.',
  amount: '$2,000',
};

export const Futura = Template.bind({});
Futura.args = {
  title: 'Colegiatura Noviembre 21',
  description: 'Vence el 10 de Nov.',
  amount: '$2,000',
};

export const FuturaDescuento = Template.bind({});
FuturaDescuento.args = {
  title: 'Colegiatura Diciembre 21',
  description: 'Ahorra hasta el 31 de Oct.',
  amount: '$1,900',
  discount: '$2,000',
  amountSubtext: 'Ahorras: $100',
};
