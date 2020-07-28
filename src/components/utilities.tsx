import React from 'react';
import { color, text } from '@porsche-design-system/utilities';

import './utilities.scss'

export const Utilities = (): JSX.Element => {
    return (
        <>
            <div style={text.medium}>JS utilities</div>
            <div style={{ width: 50, height: 50, background: color.brand }} />
            <div className="textSizeMedium">Scss utilities</div>
            <div style={{ width: 50, height: 50 }} className="backgroundColorPds" />
        </>
    );
};
