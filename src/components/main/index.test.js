import '@testing-library/jest-dom';
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import testData from './testData';
import Main from './index';

const server = setupServer(
  rest.get('https://the-one-api.dev/v2/character', (req, res, ctx) => res(ctx.json(testData))),
);

beforeAll(() => server.listen({
  onUnhandledRequest: 'warn',
}));

afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Displays loading on first render', () => {
  render(<Main />);
  expect(screen.getByText('Loading...')).toBeInTheDocument();
});

test('Wait for combo box to appear after async request', async () => {
  render(<Main />);
  expect(await screen.findByTestId('lotr-select')).toBeInTheDocument();
});
