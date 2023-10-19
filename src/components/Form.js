import React from 'react';
import { connect } from 'react-redux';
import { updateActivity, updateInput } from '../actions/formActions';
import { toggleCategory } from '../actions/categoryActions';
import axios from 'axios';


const URL = 'https://www.boredapi.com/api/activity'



function Form (props) {
    console.log(props)

    const {updateInput, updateActivity, toggleCategory} = props

    const handleCategoryChange = (event) => {
        toggleCategory(event.target.value);
    }
    const handleChange = (evt) => {
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
        console.log(newURL)
        return newURL    
    }

    const handleClick = (event) => {
        event.preventDefault();

        axios.get(getNewURL())
            .then (response => {
                console.log(response.data)
            })
            .catch (error => {
                console.log(error)
            })
    }


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
                    <select onChange={handleChange} name='participants'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    }

                    {props.category.type && 
                    <select onChange={handleChange} name='type'>
                        <option>education</option>
                        <option>recreational</option>
                        <option>social</option>
                        <option>diy</option>
                        <option>relaxation</option>
                    </select>
                    }

                    {props.category.price && 
                    <select onChange={handleChange} name='price'>
                        <option value={'0'}>$</option>
                        <option value={'0.5'}>$$</option>
                        <option value={'1'}>$$$</option>
                    </select>
                    }
                </div>

                <div>
                    <button onClick={handleClick}>
                        GENERATE ACTIVITY
                    </button>
                </div>

            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        category: state.categoryReducer.category,
        activity: state.formReducer.activity,
        type: state.formReducer.type,
        participants: state.formReducer.participants,
        price: state.formReducer.price,
        key: state.formReducer.key,
    }
}


export default connect(mapStateToProps, {updateInput, updateActivity, toggleCategory})(Form)