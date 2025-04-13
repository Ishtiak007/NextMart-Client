import React from "react";
import CreateCategoryModal from "./CreateCategoryModal";

const ManageCategories = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Manage categories</h1>
        <CreateCategoryModal />
      </div>
    </div>
  );
};

export default ManageCategories;
