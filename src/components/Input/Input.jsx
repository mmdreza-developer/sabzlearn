import React, { useEffect, useReducer } from 'react'
import Validator from '../Validators/Validator'
const inputReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE": {
            return {
                ...state,
                value: action.value,
                isValid: Validator(action.value, action.validations)
            }
        }
        default:
            return state
    }
}
export default function Input(props) {

    const [mainInput, dispatch] = useReducer(inputReducer, {
        value: "",
        isValid: false
    })
    const { value, isValid } = mainInput
    const { id, onInputHandler } = props;
    useEffect(() => {
        onInputHandler(id, value, isValid)
    }, [value])
    const onChangeHandler = (event) => {
        console.log(event.target.value);
        dispatch({
            type: "CHANGE",
            value: event.target.value,
            validations: props.validations,
            isValid: true
        })
    }
    const element = props.element === "input" ? (
        <input
            type={props.type}
            value={mainInput.value}
            onChange={onChangeHandler}
            placeholder={props.placeholder}
            className={`${props.className} ${mainInput.isValid ? "border-2 border-green-500" : "border-2 border-red-500"}`}
        />
    ) : <textarea
        placeholder={props.placeholder}
        className={props.className}
    />
    return (
        <>{element}</>
    )
}
