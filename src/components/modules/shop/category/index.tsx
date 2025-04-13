import React from "react";
import CreateCategoryModal from "./CreateCategoryModal";
import { ICategory } from "@/types";

type TCategoriesProps = {
  categories: ICategory[];
};

const ManageCategories = ({ categories }: TCategoriesProps) => {
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
