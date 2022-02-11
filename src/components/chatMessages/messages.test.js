import React from 'react';
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store';
import ChatMessage from "./index";
import ChatMessageContainer from "./containerChatMessages";

let store;

describe('testing container components', () => {
    it('Should render the component only when auth prop is true', () => {
        const Component = <ChatMessage/>;
        // const ConditionalHOC = ChatMessageContainer(Component);
        // const wrapper = shallow(<ChatMessageContainer/>);
        // expect(wrapper).not.toBe(null);
    });
})