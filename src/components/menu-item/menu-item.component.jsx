import React from 'react';
import './menu-item.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => (

    // if we keep the image in below one div then on enlargement of image size of div will increase leading to overlap with other div's (menu-items)
    // so we put the image in another div so that the div containing image, size of this increases thus solving our problem 
    <div
        // className='menu-item'                   // static class name
        className={`${size} menu-item`}             // dynamic class name 
    >

        <div
        className='background-image'
        style={{
            backgroundImage: `url(${imageUrl})`     // image added dynamically
        }}
        />

        <div className='content'>

            <h1 className='title'> {title.toUpperCase()}</h1>
            <span className='subtitle'> SHOP NOW </span>

        </div>

    </div>

);

export default MenuItem;