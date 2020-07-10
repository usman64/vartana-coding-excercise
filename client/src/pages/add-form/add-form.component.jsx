import React, { useState } from "react";
import AddForm from "../../components/add-form/add-form.component";
import { SelectFormCategory } from "../../components/select-form-category/select-form-category";
import EditFormModal from "../../components/edit-form-modal/edit-form-model.component";

const AddFormPage = () => {
  const [formCategory, setFormCategory] = useState("");
  return (
    <>
      {formCategory !== "" ? (
        <>
          <AddForm formCategory={formCategory} />
          <EditFormModal formCategory={formCategory} />
        </>
      ) : (
        <SelectFormCategory setFormCategory={setFormCategory} />
      )}
    </>
  );
};

export default AddFormPage;
