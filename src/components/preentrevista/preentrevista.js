import React, { Component } from "react";

import Calificar from "../calificar/calificar";

class Preentrevista extends Component {
    constructor() {
        super();

        this.state = {
            docenteID: "",
            preguntas: []
        }
    }

    componentDidMount = () => {
        /* Conectarse al backend para traer las preguntas de este docenteID */
        const preguntasCargadas = [
            {
                label: "¿Ha propuesto cambios en otros escenarios educativos como consecuencia del uso de las TIC en su práctica educativa?",
                respuesta: "Sí",
                subPreguntas: [
                    {
                        label: "¿Cuáles? (Máximo 400 caracteres)",
                        respuesta: "Ex excepteur quis amet fugiat voluptate ut do nostrud aliqua. Amet pariatur nulla sunt adipisicing ut consectetur. Elit commodo enim aliquip irure.",
                        descriptoresAsociados: ["E1ub", "E1ue"]
                    }
                ]
            },
            {
                label: "¿Ha realizado modificaciones al diseño de la práctica educativa apoyada en TIC que presentó?",
                respuesta: "Sí",
                subPreguntas: [
                    {
                        label: "¿Para qué ha modificado el diseño de su práctica educativa apoyada en TIC? Puede elegir más de una opción.",
                        respuesta: "Para facilitar la presentación, almacenamiento, transmisión o intercambio de información.",
                        subPreguntas: [
                            {
                                label: "Explique (Máximo 400 caracteres)",
                                respuesta: "Dolor sit consequat magna culpa quis pariatur magna magna eiusmod deserunt eu. Qui quis cillum consectetur nulla elit cupidatat. Consequat aliqua cupidatat irure voluptate. Deserunt officia duis nostrud reprehenderit occaecat id id aliqua non labore.",
                                descriptoresAsociados: ["I1ta"]
                            }
                        ]
                    },
                    {
                        label: "¿Para qué ha modificado el diseño de su práctica educativa apoyada en TIC? Puede elegir más de una opción.",
                        respuesta: "Para utilizar herramientas TIC novedosas, estéticas o accesibles.",
                        subPreguntas: [
                            {
                                label: "Explique (Máximo 400 caracteres)",
                                respuesta: "Elit enim sit deserunt tempor ea anim eiusmod. In proident consequat est in exercitation ex commodo. Anim exercitation id officia eu ex aute elit aute reprehenderit ea esse incididunt. Ullamco consectetur elit velit ex incididunt duis est sunt ad.",
                                descriptoresAsociados: ["R1tc"]
                            }
                        ]
                    }
                ]
            }
        ];

        this.setState({
            docenteID: this.props[0].location.state.docenteID,
            preguntas: preguntasCargadas
        });
    }

    render() {
        return <Calificar preguntas={this.state.preguntas} />;
    }
}

export default Preentrevista;