export const inputData = {
    habitName: '',
    repeat: "Daily",
    goal: "1 Times a day",
    timesDay: "Morning",
    date: "Today"
}

export const inputReducer = (state, action) => {
    switch (action.type) {
        case "ADD_INPUT":
            return { ...state, habitName: action.payload }
        case "ADD_REPEAT":
            return { ...state, repeat: action.payload }
        case "ADD_GOAL":
            return { ...state, goal: action.payload }
        case "ADD_TIMESDAY":
            return { ...state, timesDay: action.payload }
        case "ADD_DATE":
            return { ...state, date: action.payload }
        case "EDIT_HABIT":
            return action.payload
            case "RESET":
                return inputData
        default:
            return state
    }
}