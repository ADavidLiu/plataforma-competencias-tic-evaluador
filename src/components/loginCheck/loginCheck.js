import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Home from '@material-ui/icons/Home';
import ExitToApp from '@material-ui/icons/ExitToApp';

import Login from "../login/login";
import Dashboard from "../dashboard/dashboard";
import Pagina404 from "../pagina404/pagina404";
import Practica from "../practica/practica";
import Entrevista from "../entrevista/entrevista";
import Preentrevista from "../preentrevista/preentrevista";

class LoginCheck extends Component {
    constructor() {
        super();

        this.state = {
            isLogeado: true,
            id: "",
            datosPerfil: {}
        }
    }

    componentDidMount = () => {
        /* Aquí se debe verificar el login inicial del usuario */
        /* Sino, conectarse al backend para obtener los datos personales del evaluador */
        this.setState({
            datosPerfil: {
                id: "evaluador-1",
                nombre: "John Doe",
                imgSrc: ""
            }
        });
    }

    revisarInformacion = data => {
        /* Conectarse al backend para chequear si se logeó bien */

        /* if true */
        this.setState({
            isLogeado: true,
            id: "evaluador-1",
            datosPerfil: {
                nombre: "John Doe",
                imgSrc: ""
            }
        });
    }

    logout = () => {
        this.setState({
            isLogeado: false,
            id: "",
            datosPerfil: {}
        });
    }

    render() {
        return (
            <Router>
                <CssBaseline />
                {
                    this.state.isLogeado ? (
                        <AppBar position="static" color="primary">
                            <Toolbar>
                                <Avatar alt="Imagen de perfil" src={this.state.datosPerfil.imgSrc !== "" ? this.state.datosPerfil.imgSrc : "https://via.placeholder.com/200"} className="mr-3" />
                                <Typography variant="h6" color="inherit">{this.state.datosPerfil.nombre}</Typography>
                                <div className="d-flex align-items-center justify-content-end flex-grow-1">
                                    <Link to="/" className="mr-4">
                                        <IconButton style={{ color: "#ffffff" }} edge="start">
                                            <Home />
                                        </IconButton>
                                    </Link>
                                    <Link to="/">
                                        <IconButton style={{ color: "#ffffff" }} edge="start" onClick={this.logout}>
                                            <ExitToApp />
                                        </IconButton>
                                    </Link>
                                </div>
                            </Toolbar>
                        </AppBar>
                    ) : (
                        <AppBar position="static" color="primary">
                            <Toolbar>
                                <Typography variant="h6" color="inherit">Plataforma de competencias TIC</Typography>
                            </Toolbar>
                        </AppBar>
                    )
                }
                <Container component="main">
                    <div className="py-5">
                        <Switch>
                            <Route path="/" exact render={(...routeProps) => {
                                if (this.state.isLogeado) {
                                    return <Dashboard {...routeProps} userID={this.state.id} />;
                                } else {
                                    return <Login {...routeProps} isLogeado={this.state.isLogeado} userID={this.state.id} revisarInformacion={this.revisarInformacion} />
                                }
                            }} />
                            {
                                this.state.isLogeado ? (
                                    <Switch>
                                        <Route path="/login/" render={(...routeProps) => <Login {...routeProps} isLogeado={this.state.isLogeado} userID={this.state.id} revisarInformacion={this.revisarInformacion} />} />
                                        <Route path="/dashboard/" render={(...routeProps) => <Dashboard {...routeProps} userID={this.state.id} />} />
                                        <Route path="/practica/" render={(...routeProps) => <Practica {...routeProps} userID={this.state.id} />} />
                                        <Route path="/entrevista/" render={(...routeProps) => <Entrevista {...routeProps} userID={this.state.id} />} />
                                        <Route path="/preentrevista/" render={(...routeProps) => <Preentrevista {...routeProps} userID={this.state.id} />} />
                                        <Route component={Pagina404} />
                                    </Switch>
                                ) : ""
                            }
                            <Route component={Pagina404} />
                        </Switch>
                    </div>
                </Container>
            </Router>
        );
    };
}

export default LoginCheck;