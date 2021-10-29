import React from 'react';

const Users = () => {
    fetch(`http://localhost:5000/users`)
        .then(res => res.json())
        .then(data => console.log(data));

    return (
        <div>
            <h1>user</h1>
            <br />
        </div>
    );
};

export default Users;