import React from 'react'
import { useState } from 'react';
import Logo from '../assets/noun-jenga-3946115.png'
import Title from '../assets/jenga-logo-png-transparent.png'

function Jenga() {
    const [texto, setTexto] = useState('');
    const [number, setNumber] = useState('');
    const [pieza, setPieza] = useState('');
    const [color, setColor] = useState('initial');

    let arrayPiezas = require('./dataJason.json');
        const handleSubmit = (event) => {
            event.preventDefault();
            let piezaSeleccionada = number - 1;
            if (
                number > 46 ||
                number <= 0 ||
                number === isNaN ||
                number === null ||
                number === undefined
                ) {
                alert("POR FAVOR INGRESA UN NÚMERO VALIDO DEMENTE❗🤣");
            } else {
                setPieza(arrayPiezas[piezaSeleccionada].pieza)
                setTexto(arrayPiezas[piezaSeleccionada].texto)
                setColor(arrayPiezas[piezaSeleccionada].color)
            };
        }

        
    return (
    
        <>
            <div className='row'>
                <div className='column'>
                    <img src={Title} className="App-title" alt="app-name" />
                    <img src={Logo} className="App-logo" alt="logo" />
                    <form onSubmit={handleSubmit}>
                        <input
                        name="number"
                        pattern="[0-9]{0,13}"
                        value={number}
                        className='Input-box'
                        onChange={(e) => setNumber(e.target.value)}
                        />
                        <input type="submit" className='Submit-button' value="A ver..."/>
                        <h5>
                            Recuerda ingresar solo números enteros entre 1 y 46.
                        </h5>
                        <h6>
                            Parece estupido pero siempre hay alguien especial 😁
                        </h6>
                    </form>
                </div>
                <div className='column'>
                        <h3 className=''>Prenda</h3>
                        <div className={color}>
                            <div className='space'>
                            <p>Sacaste la pieza {pieza}</p>
                            <h1>
                                Te toca...
                            </h1>
                            <p>{texto}</p>
                            </div>
                        </div>
                </div>
            </div>
        </>
        );
};

export default Jenga