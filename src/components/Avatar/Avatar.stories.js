import React from 'react';
import Avatar from './Avatar';
 
 
export default {
 title: 'Example/Avatar',
 component: Avatar,
 argTypes: {},
};
 
const Template = (args) => <Avatar {...args} />;
 
export const Default = Template.bind({});
Default.args = {
 title: 'Divyaansh Jaiswal'
};
