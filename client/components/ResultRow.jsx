import React, { useState, useEffect } from 'react';

const ResultRow = (props) => {
    const { place_name, category, address, neighborhood } = props.result

    return (
        <tr>
            <td>{place_name}</td>
            <td>{category}</td>
            <td>{address}</td>
            <td>{neighborhood}</td>
        </tr>
    );
}

export default ResultRow;