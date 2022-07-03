import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('Should render title', () => {
    render(<Header title='Titulo del header' />);

    const headerText = screen.getByText('Titulo del header');
    expect(headerText).toBeInTheDocument();
  });

  it('Should render image', () => {
    render(<Header title='Titulo del header' logoUrl='http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/media/school_logos/download.png' />);

    const image = screen.getByAltText('Titulo del header');
    expect(image).toBeInTheDocument();
  });
});
