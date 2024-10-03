import React from 'react'
import { useState } from 'react'
import { Form, InputGroup, FormControl } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) =>{
        setInputValue(target.value)
    }

    const onSubmit =(event) => {
        event.preventDefault()
        const newInputValue = inputValue.trim()

        if(newInputValue.length <= 1 ) return
        onNewCategory(newInputValue)
        setInputValue('')
    }

    return (
      <Form onSubmit={onSubmit}>
        <InputGroup className="mb-2" style={{height: "50px"}}>
            <InputGroup.Text id="basic-addon1">{<FaSearch />}</InputGroup.Text>
            <FormControl
                placeholder="Nombre de la categoria"
                aria-label="Nombre de la categoria"
                aria-describedby="basic-addon1"
                value={inputValue}
                onChange={onInputChange}
            />
        </InputGroup>
      </Form>
    )
}
