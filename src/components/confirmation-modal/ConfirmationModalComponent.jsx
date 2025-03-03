import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const ConfirmationModalComponent = forwardRef((props, ref) => {

    const [modal, setModal] = useState(false)
    const [info, setInfo] = useState(null)

    useImperativeHandle(ref, () => ({
        open(data) {
            setModal(!modal)
            setInfo(data)
        }
    }))

    const handleUserDelete = () => {
        setModal(false)
        props.handleDeleteUser(info.id)
    }

    return (
        <Modal
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={modal}

        >
            <Modal.Header >
                <Modal.Title id="contained-modal-title-vcenter">
                    Delete Confirmation
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '120px', padding: '20px' }}>
                    <div style={{ fontSize: '18px' }}>
                        Are you sure you want to delete user ?
                    </div>

                    <div><b>{info?.fname + " " + info?.lname}</b></div>
                </div>
            </Modal.Body>
            <Modal.Footer style={{ justifyContent: 'center' }}>
                <Button variant='primary' onClick={handleUserDelete}>Confirm</Button>
                <Button variant='secondary' onClick={() => setModal(false)}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    )
})

export default ConfirmationModalComponent;