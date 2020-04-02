import React, {Component} from 'react'

class Hello extends Component {
    render() {
        console.log(this.props);
        const { name, age } = this.props;
        return (
            <div className="prop_contant">
                {/* print from props */}
                <div>
                    <p>Hello { name }</p>
                    <p>{ age } Years Old</p>
                </div>
            </div>
        )
    }
}

export default Hello