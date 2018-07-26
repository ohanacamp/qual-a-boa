import { React } from "../../../../../../../cesar/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react";
import { mount } from "../../../../../../../cesar/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/enzyme";

import { Event } from "../Event.jsx";

describe('Event creation test', () => {
    it('should return Event name', () => {
        const wrapper = mount(
            <Event> name</Event>
        );
        expect(wrapper.html()).toEqual('<h1>Event name!</h1>');
        wrapper.unmount();
    });
});