import React from 'react';

import { Text } from './Text';

export default {
    title: 'Atoms/Text',
    component: Text,
}

const Template = (args) => <Text {...args} />;
export const Primary = Template.bind({});

Primary.args = {
    primary: true,
    text: 'text..text...',
    size: 'normal',
    color: 'black',
};