import React from "react"
import { Container, Row, Col } from "react-bootstrap"
class Grid extends React.Component {
    render(){


        var height = 100

        return (

            <Container fluid>
                <Row>
                    <Col style = {{backgroundColor:"grey", height: height}}>
                    Col 1 of Row 1
                    </Col>
                    <Col style = {{backgroundColor:"red", height: height}}>
                    Col 2 of Row 2
                    </Col>
                </Row>
                <Row>
                    <Col sm = {2} style = {{backgroundColor:"green", height: height}}>
                    Col 1 of Row 1
                    </Col>
                    <Col sm = {2} style = {{backgroundColor:"purple", height: height}}>
                    Col 2 of Row 2
                    </Col>
                    <Col sm = {8} style = {{backgroundColor:"blue", height: height}}>
                    Col 2 of Row 2
                    </Col>
                </Row>

            </Container>


        )
    }
}

export default Grid