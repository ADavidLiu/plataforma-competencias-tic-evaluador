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

class LoginCheck extends Component {
    constructor() {
        super();

        /* Aquí se debe verificar el login del usuario */

        this.state = {
            isLogeado: false,
            id: "evaluador-1",
            datosPerfil: {}
        }
    }

    componentDidMount = () => {
        /* Conectarse al backend para obtener los datos personales del evaluador */
        this.setState({
            datosPerfil: {
                nombre: "John Doe",
                imgSrc: ""
            }
        });
    }

    actualizarLogeado = nuevoEstado => {
        this.setState({
            isLogeado: nuevoEstado
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
                                        <IconButton style={{ color: "#ffffff" }} edge="start" onClick={() => this.actualizarLogeado(false)}>
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
                                    return <Dashboard {...routeProps} actualizarLogeado={this.actualizarLogeado} userID={this.state.id} />;
                                } else {
                                    return <Login {...routeProps} actualizarLogeado={this.actualizarLogeado} isLogeado={this.state.isLogeado} />
                                }
                            }} />
                            <Route path="/login/" render={(...routeProps) => <Login {...routeProps} actualizarLogeado={this.actualizarLogeado} isLogeado={this.state.isLogeado} />} />
                            <Route path="/dashboard/" render={(...routeProps) => <Dashboard {...routeProps} actualizarLogeado={this.actualizarLogeado} userID={this.state.id} />} />
                            <Route component={Pagina404} />
                        </Switch>
                    </div>
                </Container>
            </Router>
        );
    };
}

export default LoginCheck;