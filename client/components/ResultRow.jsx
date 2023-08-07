import React from 'react';

const ResultRow = (props) => {
    const { place_name, category, address, neighborhood } = props.result

    return (
        <tr>
            <td>{place_name}</td>
            <td>{address}</td>
            <button>Rate</button>
            <button>Save</button>
        </tr>
    );
}

export default ResultRow;