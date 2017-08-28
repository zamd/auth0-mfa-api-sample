
export default function createReducer(initialState, actionHandlers){
    return (state=initialState, action) => {
        const actionHandler = actionHandlers[action.type];
        if (!actionHandler)
            return state;
        return actionHandler(state);
    }

}