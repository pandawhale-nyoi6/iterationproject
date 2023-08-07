import React, { useState, useEffect } from 'react';

const UserPage = () => {
    const [tags, updateTags] = useState([])

    //load tags from SQL 
    useEffect(() => {
        //grab list of tags from SQL (SELECT tags FROM places)
        fetch('/api/places/tags')
            .then((data) => data.json())
            .then((output) => {
                console.log(output)
                updateTags(...output)
                console.log(tags)
            })
    }, [])

    const tagList = []
    for (const tag in tags) {
        tagList.push(<option value={tag}></option>)
    }

    return (
        <div className='searchContainer'>
            <h1>Guide</h1>
            <div className='filterBar'>
                <label>Category</label>
                <select name='Category' id='category' multiple>
                    <option value='Brewery'></option>
                    <option value='Cafe'></option>
                    <option value='Library'></option>
                    <option value='Park'></option>
                </select>
                <label>Neighborhood</label>
                <select name='Neighborhood' id='neighborhood' multiple>
                    <option value='Battery Park City'></option>
                    <option value='Chelsea'></option>
                    <option value='City Hall'></option>
                    <option value='Clinton'></option>
                    <option value='East Harlem'></option>
                    <option value='East Village'></option>
                    <option value='Gramercy Park'></option>
                    <option value='Hamilton Heights'></option>
                    <option value='Harlem'></option>
                    <option value='Lower East Side'></option>
                    <option value='Meatpacking District'></option>
                    <option value='Midtown East'></option>
                    <option value='Midtown West'></option>
                    <option value='Morningside Heights'></option>
                    <option value='Murray Hill'></option>
                    <option value='Noho/Soho'></option>
                    <option value='Theater District'></option>
                    <option value='Tribeca'></option>
                    <option value='Upper East Side'></option>
                    <option value='Upper West Side'></option>
                    <option value='Wall Street'></option>
                    <option value='Washington Heights'></option>
                </select>
                <label>Tags</label>
                <select name='Tags' id='tags'>
                    {tagList}
                </select>
            </div>
        </div>

    )

};

export default UserPage;