import React from 'react'

interface InputProps {
    value:string,
    handleChange:(event:React.ChangeEvent<HTMLInputElement>)=>void
}

function Input(props: InputProps) {
    const {} = props

    return (
        <input type="text" value={props.value} onChange={props.handleChange} ></input>
    )
}

export default Input
