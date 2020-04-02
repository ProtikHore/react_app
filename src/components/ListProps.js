import React, {Component} from 'react'

class ListProps extends Component {
    render() {
        console.log(this.props);
        const { listData } = this.props;
        const arrayList = listData.map(list => {
            return (
                <div className="list_prop_contant">
                    {/* proplist or array */}
                    <div>
                        {/* <p>{ list.key } </p> */}
                        <p>Hello { list.name } </p>
                        <p>Years Old { list.age }</p>
                    </div>
                </div>
            )
        });
        return (
            <div>
                { arrayList }
            </div>
        )
    }
}

export default ListProps