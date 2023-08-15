import React from "react";
import {Button, Modal} from "react-bootstrap";

export function CenterModal(props) {

    const {title = '提示訊息', content = '系統忙碌中，請稍後再試...'} = props

    return (
        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>{content}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'secondary'} onClick={props.onHide}>確認</Button>
            </Modal.Footer>
        </Modal>
    )
}

