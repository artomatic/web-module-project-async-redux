import React from "react";
import { connect } from "react-redux";
import { addActivity, removeActivity } from "../actions/favoritesActions";
import FavoritesItem from './FavoritesItem';


function Favorites(props) {

    return (
        <div>
            <div>
                <h3>Favorite Activities</h3>
            </div>

            <div>
                {props.favorites.map(activity => {
                    return <h4 key={activity.key}>{activity.activity}</h4>
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