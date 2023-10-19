export const TOGGLE_CATEGORY = 'TOGGLE-CATEGORY'

export const toggleCategory = (category)=> {
    return {type: TOGGLE_CATEGORY, payload: category}
}