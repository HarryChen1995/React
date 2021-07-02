import React from "react";
import { Navbar } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import Grid from "./Grid"
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";



class NavigationBar extends React.Component {

    constructor(){
        super()
        this.state = {date: new Date()}
      }
    
      componentDidMount(){
         this.timer = setInterval(() => {
           this.setState((prev)=>({date: new Date()}))
         }, 1000);
      }
      componentWillUnmount(){
        clearInterval(this.timer)
      }
    formatDate(date){
        return (date.getMonth() + 1)  + "/" + date.getDate() + "/" + date.getFullYear() + ' ' + date.getHours()+ ":" +date.getMinutes() + ':' + date.getSeconds()
    }
    render(){
        return (<div><Navbar bg="dark" variant="dark">
        <Navbar.Brand as = {Link} to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/Grid">Grid</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to = "/About">About</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as ={Link} to = "/Profile">Profile</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <span style = {{color:"white"}}>{this.formatDate(this.state.date)}  Version 0.0.1 </span>
        </Navbar.Collapse>
      </Navbar>
      
      <Switch>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route path="/Grid">
            <Grid />
          </Route>
          <Route path="/About">
            <h1>About</h1>
          </Route>
          <Route path = "/Profile">
            <h1>Profile</h1>
          </Route>
        </Switch>
      
      </div>
      )
    }
}

export default NavigationBar