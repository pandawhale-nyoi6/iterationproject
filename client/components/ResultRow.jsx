import React from 'react';

const ResultRow = (props) => {
    const { name, formatted_address, opening_hours, id } = props.result

    return (
        <tr>
            <td>{name}</td>
            <td>{formatted_address}</td>
            <button>Rate</button>
            <button>Save</button>
        </tr>
    );
}

export default ResultRow;