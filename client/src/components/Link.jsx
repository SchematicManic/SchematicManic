import React from 'react';
const Link = (props) => {
    if (props.downloads.length) {
        return (<a href={props.downloads[0]}>Take a look</a>);
    } else {
        return '';
    }
};

export default Link;