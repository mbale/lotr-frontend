import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import Index from '../index';
import store from '../../app/store';

// mock env
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe('Index page', () => {
  it('should have App component', () => {
    const shallow = mount(
      <Provider store={store}>
        <Index />
      </Provider>,
    );

    expect(shallow.find('.flex')).toHaveLength(1);
  });
});
