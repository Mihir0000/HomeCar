import  React from 'react';

const Sample = () => {
    const sampleMethod = () => {
        console.log('hello world');
    };

    return (
        <button onClick={sampleMethod} type="button">
            Click Me
        </button>
    );
};

export default Sample;
