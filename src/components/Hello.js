import React from 'react'

const Hello = () => {
    // return (
    //     <div className = 'hello'>
    //         <h2>This Is JSX</h2>
    //     </div>
    // )

    return React.createElement(
        'div',
        { id: 'helli_id', className: 'hello_class'},
        React.createElement('h2', null, 'This Is 2nd JSX')
    )
}

export default Hello