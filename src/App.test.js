import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

let wrapper = null;

beforeAll(() => {
  wrapper = shallow( <App /> );
});

describe("Click Counter App", () => {
  it("Should render without errors", () => {
    expect(wrapper.find('.counterText').length).toBe(1);
    expect(wrapper.find('.clickButton').length).toBe(1);
    expect(wrapper.find('.resetButton').length).toBe(1);
  });

  it("Should incriment counter on click of clickButton", () => {
    wrapper.find('.clickButton').simulate('click');
    expect(wrapper.find('.counterText').text()).toBe('1');
  });

  it("Should reser counter to ZERO on click on resetButton", () => {
    wrapper.find('.resetButton').simulate('click');
    expect(wrapper.find('.counterText').text()).toBe('0');
  });
});
