import React from 'react';
import axios from 'axios';

const Smurf = ({ item }) => {

    const deleteSmurf = id => {

    axios
        .delete(`http://localhost:3333/smurfs/${id}`)

        .then(response => console.log('delete', response))

        .catch(function(error) {
        console.log(error);
        });

        window.location.href = window.location.href;
    };

    return (
    <>
        <h2>{item.name}</h2>
        <button onClick={() => deleteSmurf(item.id)}>Smurf No More!</button>
    </>
    );
};

export default Smurf;