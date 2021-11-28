import React from 'react'
import { Link } from 'react-router-dom'
import AnimalForm from '../../components/AnimalForm/AnimalForm'

const New = () => {
    return (
        <div>            
            <h1>Añade un nuevo animal</h1>
            <AnimalForm></AnimalForm>
            <Link to="/newFamily"><h1>añade una nueva familia</h1></Link>
        </div>
    )
}

export default New
