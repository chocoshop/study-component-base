import React from 'react';

import { Author } from './Author';

export default {
    title: 'Organisms/Author',
    component: Author
}

const Template = (args) => <Author {...args} />

export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    name: '真田幸村',
    tmb: 'http://flat-icon-design.com/f/f_object_174/s512_f_object_174_0bg.png'
}
