/*
 * 2022/7/14 上午10:39
 * author: francesca
 * email: 575525869@qq.com
 * Table.js
 */
import React from 'react'

const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Remove</th>
        </tr>
        </thead>
    )
}

const TableBody = props => {
    console.log( 'props.characterData', props.characterData )
    console.log( 'props.removeCharacter', props.removeCharacter )
    const rows = props.characterData.map( ( row, index ) => {
        return (
            <tr key={ index }>
                <td>{ row.name }</td>
                <td>{ row.job }</td>
                <td>
                    <button onClick={ () => {
                        props.removeCharacter( index )
                    } }>Delete
                    </button>
                </td>
            </tr>
        )
    } )

    return <tbody>{ rows }</tbody>
}

// TO DO This
const Table = ( props ) => {
    const { characterData, removeCharacter } = props

    return (
        <table>
            <TableHeader/>
            <TableBody characterData={ characterData }
                       removeCharacter={ removeCharacter }
            />
        </table>
    )
}

/*
 class Table extends Component {
 render() {
 const { characterData } = this.props

 return (
 <table>
 <TableHeader/>
 <TableBody characterData={ characterData }/>
 </table>
 )
 }
 }
 */

export default Table
