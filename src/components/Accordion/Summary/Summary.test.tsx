import React from 'react';
import { render, screen } from '@testing-library/react';
import { Summary } from './Summary';

describe('Summary', () => {
  it('Should render title', () => {
    render(<Summary title='Titulo' />);

    const SummaryText = screen.getByText('Titulo');
    expect(SummaryText).toBeInTheDocument();
  });

  it('Should render description', () => {
    render(<Summary title='Titulo del header' description='descripcion' />);

    const SummaryDescription = screen.getByText('descripcion');
    expect(SummaryDescription).toBeInTheDocument();
  });
});
