import React from 'react';

import './Article.css';
import { Label } from '../../Atoms/Label/Label';
import { Text } from '../../Atoms/Text/Text';
import { Author } from '../Author/Author';


export const Article = ({ title, tmb, author, author_image}) => {
    return (
        <div className="cassette--normal">
            <div>
                <img src={tmb} />
                <Label />
            </div>
            <div>
                <Text weight="bold" />
                <Author name="真田幸村" tmb="http://flat-icon-design.com/f/f_object_174/s512_f_object_174_0bg.png" />
            </div>
        </div>
    )

}