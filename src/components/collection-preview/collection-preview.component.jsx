import React from 'react'
import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'


// Whenever this componenet is called the filter function is called again and again so we need to optimize this later on
const CollectionPreview =({title,items})=>{

    return (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
        {
            /* We wanna make sure that only 4 items are sent */
            items
            .filter((item,index)=>{return index<4})                     // either this or this :             .filter((item,index)=> index<4)
            .map(({id,...otherItemProps})=>{
            return  <CollectionItem key={id} {...otherItemProps}/>
            })
        }
        </div>
    </div>
    )
}

export default CollectionPreview;