
import React from 'react';
import { Link } from 'react-router-dom';

export default function (props) {

    // if (!item) return 'Loading ....' ;   // soon add sopinner please ! 
    
    return (
        <li className='navigationListItem' >
            <Link to={props.url} className='navigationListItemLink'>
                {props.text}
            </Link>
        </li>
    )
}


