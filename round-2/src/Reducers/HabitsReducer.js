export const initialData = [
    {
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        habitName: "swimming",
        repeat: "daily",
        goal: "1 times daily",
        timesDay: "Night",
        date: "02-3-2012",
        isArchive: false
    },

    {
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        habitName: "Yoga",
        repeat: "daily",
        goal: "1 times daily",
        timesDay: "Evening",
        date: "21-05-2015",
        isArchive: false
    },

    {
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        habitName: "Journalling",
        repeat: "daily",
        goal: "1 times daily",
        timesDay: "Afternoon",
        date: "05-29-10",
        isArchive: false
    }
    , {
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        habitName: "Exercise",
        repeat: "daily",
        goal: "1 times daily",
        timesDay: "Morning",
        date: "25-01-2022",
        isArchive: false
    }
]


export const habitReducerFunc = (state, action) => {
    switch (action.type) {
        case "ADD_HABIT":
            return [...state, action.payload]
        case "DELETE_HABIT":
            return action.payload
        case "UPDATE_HABIT":
            return action.payload
        case "HANDLE_ARCHIVE_TOGGLE":
            return action.payload
        default:
            return state
    }
}