import React from "react";
import { Input } from "../../input";

const NMImageUploader = () => {
  return (
    <div>
      <Input type="file" multiple accept="image/*" />
    </div>
  );
};

export default NMImageUploader;
