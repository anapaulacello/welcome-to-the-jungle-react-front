import React,{ useState} from 'react'
import { Link } from 'react-router-dom';
import {AnimalForm,FamilyForm, HabitatsForm} from "../../components/"
import "./New.css"
const New = () => {
    const [step, setStep] = useState(0);

    const changeStep = () => {
        if (step === 0) {
            setStep(1);
        } else {
            setStep(2);
        }
    }

    const goBack = () => {
        if (step === 2) {
            setStep(1);
        } else {
            setStep(0);
        }
    }
        if (step === 0) {
            return (
                <div className="add-new-container">
                    <h1 className=" add-new-container_title">Añade un nuevo animal</h1>
                    <AnimalForm></AnimalForm>
                    <button className="btn btn-success " onClick={changeStep}>Añadir Familia</button>
                    <Link to="/animals">
                            <button className="add-new_family_button  btn btn-success ">ver animales</button>
                    </Link>
                </div>

            )

        } else if (step === 1) {
            return (
                <div className="add-new-container">
                    <h1 className=" add-new-container_title">Añade una nueva familia</h1>
                    <FamilyForm></FamilyForm>
                    <div className="add-new-container_buttons">
                        <button className="add-new_family_button btn btn-success " onClick={goBack}>Atras</button>
                        <button className="add-new_family_button btn btn-success " onClick={changeStep}>Añadir Habitat</button>
                    </div>
                </div>

            )
        } else {
            return (
                <div className="add-new-container">
                    <h1 className=" add-new-container_title">Añade un nuevo habitat</h1>
                    <HabitatsForm></HabitatsForm>
                    <div className="add-new-container_buttons">
                        <button className="add-new_family_button  btn btn-success " onClick={goBack}>atras</button>
                        <Link to="/animals">
                            <button className="add-new_family_button  btn btn-success ">ver animales</button>
                        </Link>
                    </div>
                </div>
            )
        }
}

export default New
