import React from "react";
import Cards from "./Cards";
import Nav from "./Nav";
import {CenterModal} from "./layout/CenterModal";

function App() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Nav/>
            <Cards onClick={() => setModalShow(true)}/>
            <CenterModal show={modalShow} onHide={() => setModalShow(false)} content={'已加入購物車！'}/>
        </>
    );
}

export default App;
