import React from 'react';
import './menu-item.styles.scss'
import { withRouter } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (

    // if we keep the image in below one div then on enlargement of image size of div will increase leading to overlap with other div's (menu-items)
    // so we put the image in another div so that the div containing image, size of this increases thus solving our problem 
    
    <div
        // className='menu-item'                   // static class name
        className={`${size} menu-item`}             // dynamic class name 
        onClick={() => history.push(`${match.url}${linkUrl}`)}            // used match to knwo where we will be in our directory , by this its gonna base to wherever from it was called
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

// we are powering up MenuItem component
// By wraping with withRouter we now have access to history
export default withRouter(MenuItem);    