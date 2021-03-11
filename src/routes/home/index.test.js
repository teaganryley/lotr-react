import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from './index';

describe('Home', () => {
  test('renders Home page component', () => {
    render(<Home />);

    screen.debug();
    // expect(screen.getByText('Search:')).toBeInTheDocument();
  });
});
