import React, {useEffect} from 'react';

const User = ({ name }) => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("timer")
        }, 1000 );

        return () => {
            clearInterval(timer);
            console.log("clean up")
        }
    }, []);

    return (
        <div className="userCard">
            <h1>Name: {name}</h1>
            <h3>Location</h3>
            <h3>Contact</h3>
        </div>
    );
};

export default User;