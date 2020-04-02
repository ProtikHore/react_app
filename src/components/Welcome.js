import React, {Component} from 'react'

class Welcome extends Component {
    state = {
        name: 'Protik',
        age: 25
    }

    butttonClick(e){
        console.log(e);
    }

    buttonClickState = (e) => {
        //this.state.name = 'hello';
        this.setState({
            name: 'Hore',
            age: 20
        });
        console.log(this.state);
    }

    formChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    formSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted', this.state.name);
    }

    render() {
        console.log(this.props);
        const { name, age } = this.props;
        return (
            <div className="app_content">
                {/* print from state */}
                <h2>Class Component</h2>
                <p> Name: { this.state.name }</p>
                <p> Age: { this.state.age }</p>
                <button onClick={this.butttonClick}>Click Me</button>
                <button onClick={this.buttonClickState}>Click State</button>
                <form onSubmit={this.formSubmit}>
                    <input type="text" onChange={this.formChange} />
                    <button>Submit</button>
                </form>

                {/* print from props */}
                <div>
                    <p>Hello { name }</p>
                    <p>{ age } Years Old</p>
                </div>
            </div>
        )
    }
}

export default Welcome