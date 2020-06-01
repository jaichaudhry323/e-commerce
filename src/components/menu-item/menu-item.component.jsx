import React from 'react';
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => (

    <div
        style={{
            backgroundImage: `url(${imageUrl})`     // image added dynamically
        }}
        
        // className='menu-item'                   // static class name
        className={`${size} menu-item`}             // dynamic class name 
    >

        <div className='content'>

            <h1 className='title'> {title}</h1>
            <span className='subtitle'> SHOP NOW </span>

        </div>

    </div>

);

export default MenuItem;