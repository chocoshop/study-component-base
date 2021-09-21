import React from 'react';

import { Label } from './Label';

export default {
  title: 'Atoms/Label',
  component: Label,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Label {...args} />;
export const Primary = Template.bind({});

Primary.args = {
    primary: true,
    bg_color: 'blue',
    text: 'ビジネス・学習',
};