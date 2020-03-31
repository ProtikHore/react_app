import React, {Component} from 'react'

class Welcome extends Component {
    state = {
        name: 'Protik',
        age: 25
    }

    render() {
        return (
            <div className="app_content">
                <h2>Class Component</h2>
                <p> Name: { this.state.name }</p>
                <p> Age: { this.state.age }</p>
            </div>
        )
    }
}

export default Welcome