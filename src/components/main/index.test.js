import '@testing-library/jest-dom';
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen } from '@testing-library/react';
// import { act } from 'react-dom/test-utils';
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

test('Wait for combobox to appear after async request', async () => {
  render(<Main />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  expect(await screen.findByRole('combobox')).toBeInTheDocument();
});

test('Wait for pagination button to appear after async request', async () => {
  render(<Main />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  expect(await screen.findByRole('button', { name: /page limit/i })).toBeInTheDocument();
});

test('Wait for DisplayInfo component to appear after async', async () => {
  render(<Main />);
  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  expect(await screen.findByText(/biography and quotes/i)).toBeInTheDocument();
});
