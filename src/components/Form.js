import React from 'react';
import { connect } from 'react-redux';
import { updateInput } from '../actions/formActions';
import { toggleCategory } from '../actions/categoryActions';
import { addActivity } from '../actions/favoritesActions';
import { fetchActivity } from '../actions/fetchAction';

function Form (props) {

    const {updateInput, addActivity, toggleCategory, fetchActivity} = props

    const handleCategoryChange = (event) => {
        toggleCategory(event.target.value);
    }

    const handleInputChange = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;
        updateInput(name, value);
    }

    const URL = 'https://www.boredapi.com/api/activity';

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
    };

    const handleGenerateClick = (event) => {
        event.preventDefault();
        fetchActivity(getNewURL())
    }

    const handleAddClick = (event) => {
        event.preventDefault();
        addActivity(props.activity);
    }
    
    const exists = props.favorites.some(item => item.key === props.activity.key)

    return (
        <div className='formContainer'>
            <h3>Search For An Activity</h3>
            <form className='formWrapper'>
                <div>
                    <select className='genButton' onChange={handleCategoryChange}>
                        <option>CHOOSE SEARCH CATEGORY</option>
                        <option>type</option>
                        <option>participants</option>
                        <option>price</option>
                    </select>
                    {props.category.participants && 
                    <select className='genButton' onChange={handleInputChange} name='participants'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    }

                    {props.category.type && 
                    <select className='genButton' onChange={handleInputChange} name='type'>
                        <option>education</option>
                        <option>recreational</option>
                        <option>social</option>
                        <option>diy</option>
                        <option>relaxation</option>
                    </select>
                    }

                    {props.category.price && 
                    <select className='genButton' onChange={handleInputChange} name='price'>
                        <option value={'0.1'}>$</option>
                        <option value={'0.3'}>$$</option>
                        <option value={'0.6'}>$$$</option>
                    </select>
                    }
                </div>

                <div>
                    <button className='genButton' onClick={handleGenerateClick}>
                        GENERATE ACTIVITY
                    </button>
                </div>
                
                { !exists && 
                <div>
                    {props.activity && <h4>
                        {props.activity.activity}
                        <button className="material-icons" onClick={handleAddClick}>add_circle</button>
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
        activity: state.fetchReducer.activity,
        type: state.formReducer.type,
        participants: state.formReducer.participants,
        price: state.formReducer.price,
        key: state.formReducer.key,
    }
}



export default connect(mapStateToProps, {updateInput, toggleCategory, fetchActivity, addActivity})(Form)