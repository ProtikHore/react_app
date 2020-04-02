import React, {Component} from 'react'

const StateLessComponent = (props) => {
    console.log(props);
    const { listData } = props;
    const arrayList = listData.map(list => {
        return (
            <div className="list_prop_contant">
                {/* proplist or array */}
                <div>
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

export default StateLessComponent