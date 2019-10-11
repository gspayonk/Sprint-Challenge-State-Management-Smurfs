import React from 'react';
import Smurf from './Smurf';

const SmurfList = ({ list }) => {

    console.log('smurf list', list);
    return (
    <div className = 'item-container'>
        {list && list.map(item => <Smurf key={item.id} item={item} />)}
    </div>
    );
};

export default SmurfList;