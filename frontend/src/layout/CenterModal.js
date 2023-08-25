import React from "react";
import {Button, Modal} from "react-bootstrap";

export function CenterModal(props) {

    const {title = '提示訊息', content = '系統忙碌中，請稍後再試...', btnLeft = '確認', btnRight, children} = props

    return (
        <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children || <p>{content}</p>}
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'secondary'} onClick={props.onHide}>{btnLeft}</Button>
                {
                    btnRight && <Button variant={'secondary'} onClick={props.onHide}>{btnRight}</Button>
                }
            </Modal.Footer>
        </Modal>
    )
}

