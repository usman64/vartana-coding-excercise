import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import { GlobalContext } from "../../context/globalState";
import CurrentIncomeForm from "../current-form/current-form.component";

const EditFormModal = () => {
  const {
    isEditFormModelOpen,
    currentFormEditing,
    toggleEditFormModel,
  } = useContext(GlobalContext);
  return (
    <div style={{ padding: "2rem" }}>
      <Modal
        show={isEditFormModelOpen}
        onHide={() => {
          toggleEditFormModel();
        }}
      >
        <Modal.Header closeButton>EDIT FORM</Modal.Header>
        <Modal.Body>
          <CurrentIncomeForm currentFormEditing={currentFormEditing} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EditFormModal;
