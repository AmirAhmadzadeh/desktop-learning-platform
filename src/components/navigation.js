import React, { Component } from 'react'; 
import NavigationItem from './navigationItem' ; 


class NavigationList extends Component {

    static defaultProps = {
        menu : [
            {
                text: 'home',
                url: '/home'
            },

            {
                text: 'back',
                url: '/'
            }
        ]

    }

    render() {
        
        return (
            <ul className='navigationList'>
               {this.props.menu.map(menuItem =>  {
                   return (
                       <NavigationItem
                           text={menuItem.text} 
                           url={menuItem.url} 
                       />
                   )
               })} 
            </ul>
        )
    }
}


export default NavigationList ; 