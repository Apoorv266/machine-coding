import React, { createContext, useReducer, useState } from 'react'
import { habitReducerFunc, initialData } from '../Reducers/HabitsReducer'
import { inputData, inputReducer } from '../Reducers/InputValue'

export const habitContext = createContext()
const HabitContextWrapper = ({ children }) => {
    const [state, dispatch] = useReducer(habitReducerFunc, initialData)
    const [inputState, inputDispatch] = useReducer(inputReducer, inputData)
    const [dispModal, setdispModal] = useState(false)
    const [selectedHabit, setselectedHabit] = useState({})
const [dispDetailsModal, setdispDetailsModal] = useState(false)


    const addHabitFunc = () => {
        const isObjExist = state.find((item) => item.id === selectedHabit.id)
        const habitObj = {
            ...inputState,
            id: Math.floor(Math.random()*(999-100+1)+100)
        }

        const upd_obj = state.map(obj => {
            if (obj.id === selectedHabit.id) {
                obj.habitName = inputState.habitName;
                obj.repeat = inputState.repeat;
                obj.goal = inputState.goal;
                obj.timesDay = inputState.timesDay;
                obj.date = inputState.date;
            }
            return obj;
        })

        if (inputState.habitName !== "") {
            if (isObjExist) {
                dispatch({ type: "UPDATE_HABIT", payload: upd_obj })
            }
             else {
                dispatch({ type: "ADD_HABIT", payload: habitObj })
            }
            setdispModal(false)
        }
        setselectedHabit({})
        inputDispatch({type: "RESET"})
    }


    const deleteFunc = (id) => {
        const newArr = state.filter((item) => (item.id !== id))
        dispatch({ type: "DELETE_HABIT", payload: newArr })
    }

    const editHabitFunc = (habitItem) => {
        setdispModal(true)
        setselectedHabit(habitItem)
        inputDispatch({ type: "EDIT_HABIT", payload: habitItem })
    }

    const ViewHabitsFunc = (habitItem) =>{
        setselectedHabit(habitItem)
        setdispDetailsModal(true)
    }

    const handleArchiveFunc = (id) =>{
        const updatedArray = state.map((item) => item.id === id ? {...item, isArchive: true} : item)
        dispatch({ type: "HANDLE_ARCHIVE_TOGGLE", payload: updatedArray })
    }

    const handleUnArchiveFunc = (id) =>{
        const updatedArray = state.map((item) => item.id === id ? {...item, isArchive: false} : item)
        dispatch({ type: "HANDLE_ARCHIVE_TOGGLE", payload: updatedArray })
    }


    return (
        <habitContext.Provider value={{ state, dispatch, inputState, inputDispatch, addHabitFunc, setdispModal, dispModal, deleteFunc, editHabitFunc ,ViewHabitsFunc,dispDetailsModal, setdispDetailsModal, selectedHabit,handleArchiveFunc,handleUnArchiveFunc, setselectedHabit}}>{children}</habitContext.Provider>
    )
}

export default HabitContextWrapper