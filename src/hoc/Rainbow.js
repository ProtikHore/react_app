import React from 'react'

const Rainbow = (WrappedCoponent) => {
    const colors = ['red', 'orange', 'black', 'blue', 'yellow', 'pink'];
    const randomColor = colors[Math.floor(Math.random() * 5)];
    const className = randomColor + '-text';

    return (props) => {
        return(
            <div className={className}>
                <WrappedCoponent {... props} />
            </div>
        )
    }
}

export default Rainbow