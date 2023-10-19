

export const UPDATE_INPUT = 'UPDATE_INPUT';
export const UPDATE_ACTIVITY = 'UPDATE_ACTIVITY';

export const updateInput = (name, value) => {

    return {type: UPDATE_INPUT, payload: {name, value}}
}

export const updateActivity = (activity) => {
    return {type: UPDATE_ACTIVITY, payload: activity}
}