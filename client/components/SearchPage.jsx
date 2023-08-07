import React, { useState, useEffect } from 'react';
import ReactSelect from 'react-select';
import ResultRow from './ResultRow.jsx'

const SearchPage = () => {
    const [ categories, setCategories ] = useState([])
    const [ neighborhoods, setNeighborhoods ] = useState([])
    const [ tags, setTags ] = useState([])

    const handleChange = (selectedOptions, actionMeta) => {
        if (actionMeta.name === 'categories') {
            setCategories(selectedOptions)
        } else if (actionMeta.name === 'neighborhoods') {
            setNeighborhoods(selectedOptions)
        } else if (actionMeta.name === 'tags') {
            setTags(selectedOptions)
        }
    }

    const querySQL = () => {
        const toQuery = {
            categories: categories.map(option => option.value),
            neighborhoods: neighborhoods.map(option => option.value),
            tags: tags.map(option => option.value)
        }

        fetch('api/placeSearch'), {
            method:'GET',
            params: toQuery
        }
            .then((response) => response.json())
            .then((output) => {
                console.log(output)
                const rows = []
                for(const result in output) {
                    rows.push(<ResultRow result={props} />)
                }
            })
    }

    const categoriesOptions = [
        { value:'brewery', label:'Brewery' },
        { value:'cafe', label:'Cafe' },
        { value:'library', label:'Library' },
        { value:'park', label:'Park' }
    ]
    const neighborhoodOptions = [
        { value:'Battery Park City', label:'Battery Park City' },
        { value:'Chelsea', label:'Chelsea' },
        { value:'City Hall', label:'City Hall' },
        { value:'Clinton', label:'Clinton' },
        { value:'East Harlem', label:'East Harlem' },
        { value:'East Village', label:'East Village' },
        { value:'Gramercy Park', label:'Gramercy Park' },
        { value:'Hamilton Heights', label:'Hamilton Heights' },
        { value:'Harlem', label:'Harlem' },
        { value:'Lower East Side', label:'Lower East Side' },
        { value:'Meatpacking District', label:'Meatpacking District' },
        { value:'Midtown East', label:'Midtown East' },
        { value:'Midtown West', label:'Midtown West' },
        { value:'Morningside Heights', label:'Morningside Heights' },
        { value:'Murray Hill', label:'Murray Hill' },
        { value:'Noho/Soho', label:'Noho/Soho' },
        { value:'Theater District', label:'Theater District' },
        { value:'Tribeca', label:'Tribeca' },
        { value:'Upper East Side', label:'Upper East Side' },
        { value:'Upper West Side', label:'Upper West Side' },
        { value:'Wall Street', label:'Wall Street' },
        { value:'Washington Heights', label:'Washington Heights' }
    ]
    const tagOptions = [
        { value:'Good Coffee', label:'Good Coffee' },
        { value:'Strong Wifi', label:'Strong Wifi' },
        { value:'Quiet', label:'Quiet' },
        { value:'Social', label:'Social' },
        { value:'Clean Bathrooms', label:'Clean Bathrooms' },
        { value:'Abundant Outlets', label:'Abundant Outlets' },
        { value:'Outdoor Seating', label:'Outdoor Seating' },
        { value:'Big Group Friendly', label:'Big Group Friendly' }
    ]

    return (
        <div className='searchContainer'>
            <h1>Guide</h1>
            <div className='filterBar'>
                <label>Category</label>
                    <ReactSelect name='categories' options={categoriesOptions} onChange={handleChange} value={categories}/>
                <label>Neighborhood</label>
                    <ReactSelect name='neighborhoods' options={neighborhoodOptions} onChange={handleChange}/>
                <label>Tags</label>
                    <ReactSelect name='tags' options={tagOptions} onChange={handleChange}/>
                <button onClick={querySQL}>Find!</button>
            </div>
            <table>
                <tr>
                    <th>Place</th>
                    <th>Category</th>
                    <th>Address</th>
                    <th>Neighborhood</th>
                </tr>
                {rows}
            </table>
        </div>

    )

};

export default SearchPage;