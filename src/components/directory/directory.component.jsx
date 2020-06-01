import React from 'react'
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'

// this one needs to be a class component because it needs to have a state value

class Directory extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                }
            ]
        }

    }

    render() {
        return (
            <div className='directory-menu'>

                {
                    // this.state.sections.map(section=>(
                    //     <MenuItem key={section.id} title={section.title}></MenuItem>
                    // ))

                    // ANOTHER WAY TO STOP USING THE section name again and again in our above map function
                    // this.state.sections.map(
                    //     ({ title, imageUrl, id, size }) => (
                    //         <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    //     ))

                    // BETTER THAN BETTER
                    this.state.sections.map(({id,...otherSectionProps }) => (
                            <MenuItem key={id} {...otherSectionProps} />
                        ))
                }

            </div>
        )
    }

}

export default Directory;