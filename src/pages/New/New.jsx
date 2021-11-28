import React from 'react'
import AnimalForm from '../../components/AnimalForm/AnimalForm'
import HabitatsForm from '../../components/HbitatsForm/HabitatsForm'

const New = () => {
    return (
        <div>
            <h1>Añade un nuevo habitat</h1>
            <HabitatsForm></HabitatsForm>
            <h1>Añade un nuevo animal</h1>
            <AnimalForm></AnimalForm>
        </div>
    )
}

export default New
