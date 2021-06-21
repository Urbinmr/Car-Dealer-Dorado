import {render, screen} from '@testing-library/react';
import App from './App';

describe('app', () => {
  beforeEach( () => {
        render(<App/>);
  });

  it('should render header', () => {
    const headerElement = screen.getByText(/dorado auto/i);
    expect(headerElement).toBeInTheDocument();
  });

  it('should render navigation', () => {
     const navigationElement = screen.getByRole('button', {name: /menu/i});
     expect(navigationElement).toBeInTheDocument();
  })

  it('should render car inventory list', () => {
    const listElement = screen.getByRole('list', {name: /cars/i});
    expect(listElement).toBeInTheDocument();
  })
});




