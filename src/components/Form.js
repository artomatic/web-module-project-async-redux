import React from 'react';
import { connect } from 'react-redux';
import { updateInput, updateActivity } from '../actions/formActions';
import { toggleCategory } from '../actions/categoryActions';
import { addActivity } from '../actions/favoritesActions';
import axios from 'axios';


const URL = 'https://www.boredapi.com/api/activity'



function Form (props) {

    const {updateInput, addActivity, toggleCategory, updateActivity} = props

    const handleCategoryChange = (event) => {
        toggleCategory(event.target.value);
    }

    const handleInputChange = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;
        updateInput(name, value);
    }

    const getNewURL = () => {
        let newURL = URL;
        if (props.category.type) {
            newURL += `?type=${props.type}`
        }
        if (props.category.participants) {
            newURL += `?participants=${props.participants}`
        }
        if (props.category.price) {
            newURL += `?price=${props.price}`
        }
        return newURL    
    }

    const handleGenerateClick = (event) => {
        event.preventDefault();

        axios.get(getNewURL())
            .then (response => {
                console.log(response.data);
                const newActivity = {
                    activity: response.data.activity,
                    key: response.data.key
                }
                updateActivity(newActivity);
            })
            .catch (error => {
                console.log(error);
            })
    }

    const handleAddClick = (event) => {
        event.preventDefault();
        addActivity(props.activity);
    }
    
    const exists = props.favorites.some(item => item.key === props.activity.key)

    return (
        <div>
            <h3>Search For An Activity</h3>
            <form>
                <div>
                    <select onChange={handleCategoryChange}>
                        <option>CHOOSE SEARCH CATEGORY</option>
                        <option>type</option>
                        <option>participants</option>
                        <option>price</option>
                    </select>
                    {props.category.participants && 
                    <select onChange={handleInputChange} name='participants'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    }

                    {props.category.type && 
                    <select onChange={handleInputChange} name='type'>
                        <option>education</option>
                        <option>recreational</option>
                        <option>social</option>
                        <option>diy</option>
                        <option>relaxation</option>
                    </select>
                    }

                    {props.category.price && 
                    <select onChange={handleInputChange} name='price'>
                        <option value={'0'}>$</option>
                        <option value={'0.5'}>$$</option>
                        <option value={'1'}>$$$</option>
                    </select>
                    }
                </div>

                <div>
                    <button onClick={handleGenerateClick}>
                        GENERATE ACTIVITY
                    </button>
                </div>
                
                { !exists && 
                <div>
                    {props.activity && <h4>
                        {props.activity.activity}
                        <button style={{padding: '1px', margin: '2px', borderRadius: '50%'}} className="material-icons" onClick={handleAddClick}>add_circle</button>
                    </h4>}
                </div>}

            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        favorites: [...state.favoritesReducer.favorites],
        category: state.categoryReducer.category,
        activity: state.formReducer.activity,
        type: state.formReducer.type,
        participants: state.formReducer.participants,
        price: state.formReducer.price,
        key: state.formReducer.key,
    }
}


export default connect(mapStateToProps, {updateInput, toggleCategory, updateActivity, addActivity})(Form)