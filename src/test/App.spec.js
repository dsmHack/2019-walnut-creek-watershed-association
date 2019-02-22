import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App/>);
  })

  xit('renders without crashing', () => {
    expect(wrapper.type()).toBe('div');
  });

  xit('should contain a header', () => {
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  xit('should contain an address modal', () => {
    expect(wrapper.find('AddressModal')).toHaveLength(1);
  });

});
