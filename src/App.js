import React from "react";
import Cards from "./Cards";
import Nav from "./Nav";
import {CenterModal} from "./layout/CenterModal";
import {Button} from "react-bootstrap";

function App() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Nav/>
            <Cards/>

            <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
            </Button>
            <CenterModal show={modalShow} onHide={() => setModalShow(false)}/>
        </>
    );
}

export default App;
