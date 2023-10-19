import React from "react";
import { connect } from "react-redux";
import { addActivity, removeActivity } from "../actions/favoritesActions";
import FavoritesItem from './FavoritesItem';


function Favorites(props) {

    const {removeActivity, addActivity} = props;

    const handleRemove = (key) => {
        removeActivity(key)
    }

    return (
        <div>
            <div>
                <h3>Favorite Activities</h3>
            </div>

            <div>
                {props.favorites.map(activity => {
                    return <div key={activity.key}>
                        <h4>
                            {activity.activity}
                            <button style={{padding: '1px', margin: '2px', borderRadius: '50%'}} className="material-icons" onClick={()=>{handleRemove(activity.key)}}>remove_circle</button>
                        </h4>
                    </div>
                })
                }
            </div>

        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        favorites: [...state.favoritesReducer.favorites]
    };
};

export default connect(mapStateToProps, {addActivity, removeActivity})(Favorites);