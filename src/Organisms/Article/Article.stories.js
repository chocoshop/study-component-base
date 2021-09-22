import React from 'react';

import { Article } from './Article';

export default {
    title: 'Organisms/Article',
    component: Article,
}

const Template = (args) => <Article {...args} />
export const Primary = Template.bind({});

Primary.args = {
    primary: true,
    title: '記事タイトル記事タイトル記事タイトル記事タイトル',
    tmb: 'https://dummyimage.com/600x400/000/fff',
    author: '真田幸村',
    author_image: '../Atoms/Icons/profile.png'
}