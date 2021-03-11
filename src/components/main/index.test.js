import '@testing-library/jest-dom';
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import testData from './testData';
import Main from './index';

const server = setupServer(
  // eslint-disable-next-line arrow-body-style
  rest.get('/character', (req, res, ctx) => {
    return res(ctx.json(testData));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Displays loading on first render', () => {
  render(<Main />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});

test('Wait for async request for combo box, render', async () => {
  render(<Main />);

  expect(await screen.findByTestId('lotr-select')).toBeInTheDocument();
});
