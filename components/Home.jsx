import React from 'react';

const Home = () => {
    return (
        <div>
            <h1>Welcome to My Portfolio</h1>
            <p>It's my goal to pass this course!</p>
            <button onClick={() => window.location.href='/about'}>Learn More About Me</button>
        </div>
    );
};
export default Home;