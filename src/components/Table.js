import React, { Component } from 'react'

const TableHead=()=>{
    return(
        <thead>
            <tr>
                <th>
                    Name
                </th>
                <th>
                    Job
                </th>
            </tr>
        </thead>
    )

}

const TableBody=(props)=>{
    const details=props.details
    const removeDetail=props.removeDetail
    const rows=details.map((detail,index)=>{
        return(
            <tr key={index}>
               <td>{detail.name}</td>
               <td>{detail.job}</td>
               <td><button onClick={()=>removeDetail(index)}>Delete</button></td>
            </tr>

        );
    })
    
    return <tbody>{rows}</tbody>
}


export class Table extends Component {
    
    render() {
        return (
            <table>
                <TableHead/>
                <TableBody details={this.props.details} removeDetail={this.props.removeDetail}/>
            </table>
        )
    }
}

export default Table
