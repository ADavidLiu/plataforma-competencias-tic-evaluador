import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            evaluadorID: "",
            practicas: [],
            preentrevistas: [],
            entrevistas: []
        }
    }

    componentDidMount = () => {
        /* Conectarse al backend para traer los datos de las prácticas, preentrevistas y entrevistas */
        this.setState({
            evaluadorID: this.props.userID,
            practicas: [
                ...this.state.practicas,
                {
                    docenteID: "docente-1",
                    nombre: "Jane Doe",
                    establecimientoEducativo: "Lorem Ipsum Dolor Sit Amet",
                    imgSrc: "",
                    fechaAsignacion: "22-07-2019"
                },
                {
                    docenteID: "docente-2",
                    nombre: "John Doe",
                    establecimientoEducativo: "Lorem Ipsum Dolor Sit Amet",
                    imgSrc: "",
                    fechaAsignacion: "22-07-2019"
                }
            ],
            preentrevistas: [
                {
                    docenteID: "docente-1",
                    nombre: "Jane Doe",
                    establecimientoEducativo: "Lorem Ipsum Dolor Sit Amet",
                    imgSrc: "",
                    fechaAsignacion: "22-07-2019"
                },
                {
                    docenteID: "docente-2",
                    nombre: "John Doe",
                    establecimientoEducativo: "Lorem Ipsum Dolor Sit Amet",
                    imgSrc: "",
                    fechaAsignacion: "22-07-2019"
                },
                {
                    docenteID: "docente-2",
                    nombre: "Mike Doe",
                    establecimientoEducativo: "Lorem Ipsum Dolor Sit Amet",
                    imgSrc: "",
                    fechaAsignacion: "22-07-2019"
                }
            ],
            entrevistas: [
                {
                    docenteID: "docente-1",
                    nombre: "Jane Doe",
                    establecimientoEducativo: "Lorem Ipsum Dolor Sit Amet",
                    imgSrc: "",
                    fechaAsignacion: "22-07-2019"
                }
            ]
        });
    }

    render() {
        return (
            <Grid container spacing={5}>
                <Grid item xs={12} md={4}>
                    <Grid container>
                        <Grid item xs={12} className="mb-3">
                            <Typography variant="h5">Prácticas educativas</Typography>
                            <hr/>
                        </Grid>
                        {
                            this.state.practicas.map((practica, i) => {
                                return (
                                    <Link key={i} to={{
                                        pathname: "/practica",
                                        state: {
                                            docenteID: practica.docenteID,
                                            docenteNombre: practica.nombre
                                        }
                                    }} className="d-block w-100 mb-3" style={{textDecoration: "none"}}>
                                        <Paper className="p-4">
                                            <Typography color="textPrimary" variant="body1"><strong>{practica.nombre}</strong></Typography>
                                            <Typography color="textPrimary" variant="body2" className="my-1">{practica.establecimientoEducativo}</Typography>
                                            <Typography color="textPrimary" variant="body2">Asignado para revisión el: {practica.fechaAsignacion}</Typography>
                                        </Paper>
                                    </Link>
                                );
                            })
                        }
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid container>
                        <Grid item xs={12} className="mb-3">
                            <Typography variant="h5">Pre-entrevistas</Typography>
                            <hr/>
                        </Grid>
                        {
                            this.state.preentrevistas.map((preentrevista, i) => {
                                return (
                                    <Link key={i} to={{
                                        pathname: "/preentrevista",
                                        state: {
                                            docenteID: preentrevista.docenteID,
                                            docenteNombre: preentrevista.nombre
                                        }
                                    }} className="d-block w-100 mb-3" style={{textDecoration: "none"}}>
                                        <Paper className="p-4">
                                            <Typography color="textPrimary" variant="body1"><strong>{preentrevista.nombre}</strong></Typography>
                                            <Typography color="textPrimary" variant="body2" className="my-1">{preentrevista.establecimientoEducativo}</Typography>
                                            <Typography color="textPrimary" variant="body2">Asignado para revisión el: {preentrevista.fechaAsignacion}</Typography>
                                        </Paper>
                                    </Link>
                                );
                            })
                        }
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid container>
                        <Grid item xs={12} className="mb-3">
                            <Typography variant="h5">Entrevistas</Typography>
                            <hr/>
                        </Grid>
                        {
                            this.state.entrevistas.map((entrevista, i) => {
                                return (
                                    <Link key={i} to={{
                                        pathname: "/entrevista",
                                        state: {
                                            docenteID: entrevista.docenteID,
                                            docenteNombre: entrevista.nombre
                                        }
                                    }} className="d-block w-100 mb-3" style={{textDecoration: "none"}}>
                                        <Paper className="p-4">
                                            <Typography color="textPrimary" variant="body1"><strong>{entrevista.nombre}</strong></Typography>
                                            <Typography color="textPrimary" variant="body2" className="my-1">{entrevista.establecimientoEducativo}</Typography>
                                            <Typography color="textPrimary" variant="body2">Asignado para revisión el: {entrevista.fechaAsignacion}</Typography>
                                        </Paper>
                                    </Link>
                                );
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}

export default Dashboard;