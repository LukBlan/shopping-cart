import { render, screen } from '@testing-library/react';

describe('App', () => {
  it('renders headline', () => {
    render(<div>Test</div>);

    screen.debug();

    // check if App components renders headline
  });
});