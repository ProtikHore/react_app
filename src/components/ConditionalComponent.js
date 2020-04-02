import React, {Component} from 'react'

const ConditionalComponent = (props) => {
    console.log(props);
    const { listData } = props;
    // const arrayList = listData.map(list => {
    //     if(list.age > 20) {
    //         return (
    //             <div className="list_prop_contant">
    //                 <div>
    //                     <p>Hello { list.name } </p>
    //                     <p>Years Old { list.age }</p>
    //                 </div>
    //             </div>
    //         )
    //     } else {
    //         return null;
    //     }
    // });
    return (
        <div>
            {
                listData.map(list => {
                    return list.age > 20 ? (
                        <div className="list_prop_contant">
                                <div>
                                     <p>Hello { list.name } </p>
                                     <p>{ list.age } Years Old</p>
                                 </div>
                             </div>
                    ) : null
                    // if(list.age > 20) {
                    //     return (
                    //         <div className="list_prop_contant">
                    //             <div>
                    //                 <p>Hello { list.name } </p>
                    //                 <p>Years Old { list.age }</p>
                    //             </div>
                    //         </div>
                    //     )
                    // } else {
                    //     return null;
                    // }
                })
            }
        </div>
    )
}

export default ConditionalComponent