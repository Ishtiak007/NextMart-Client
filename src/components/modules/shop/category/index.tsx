import { Button } from "@/components/ui/button";
import React from "react";

const ManageCategories = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Manage categories</h1>
        <Button>Create Category</Button>
      </div>
    </div>
  );
};

export default ManageCategories;
