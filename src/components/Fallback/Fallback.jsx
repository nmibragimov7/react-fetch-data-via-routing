import React from 'react';

import styles from './Fallback.module.scss';

const Fallback = (props) => {
    let classes = [styles.ring];
    if(props.classes) {
        classes.push(props.classes);
    }

    return (
        <div className={classes.join(" ")}>
            <div className={props.classesDiv || ""}/>
            <div className={props.classesDiv || ""}/>
            <div className={props.classesDiv || ""}/>
            <div className={props.classesDiv || ""}/>
        </div>
    );
};

export default Fallback;
