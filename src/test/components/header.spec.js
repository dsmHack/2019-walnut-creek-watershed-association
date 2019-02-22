import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../ui-core/components/header';

describe("Header", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Header title='test'/>);
    })
    it('should render', () => {
        expect(wrapper.type()).toBe('div');
    })
})