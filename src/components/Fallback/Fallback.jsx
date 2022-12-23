import React from 'react';

import styles from './Fallback.module.scss';

const Fallback = () => {
    return (
        <div className={styles.ring}>
            <div/>
            <div/>
            <div/>
            <div/>
        </div>
    );
};

export default Fallback;
