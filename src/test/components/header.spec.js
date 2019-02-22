import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../ui-core/components/header';

describe("Header", () => {
    let wrapper;
    let title;
    
    beforeEach(() => {
        title = chance.word();
        wrapper = shallow(<Header title={title}/>);
    });

    it('should render', () => {
        expect(wrapper.type()).toBe('div');
    });

    it('should set title', () => {
        expect(wrapper.text()).toBe(title);
    });
})