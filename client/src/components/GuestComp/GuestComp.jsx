import React from 'react'

const GuestComp = () => {
    console.log('Rendering GuestComponent');
    return (
        <div>
            <h2>Welcome, Guest!</h2>
            <p>This is some content visible to guests.</p>
        </div>
    );
};

export default GuestComp