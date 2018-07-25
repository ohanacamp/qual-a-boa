import React from 'react';
import { mount } from 'enzyme';

import Hello from './Hello.jsx'

describe('Hello World test case', () => {
	it('should return Hello World!', () => {
		const wrapper = mount(
			<Hello>World!</Hello>
		);
		expect(wrapper.html()).toEqual('<h1>Hello World!</h1>');
		wrapper.unmount();
	});
});