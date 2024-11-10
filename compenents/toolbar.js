// src/components/Toolbar.js
import React from "react";

function Toolbar({ onAddText, onApplyGrayscale, onApplySepia, onRotate, onUploadImage }) {
  return (
    <div className="toolbar">
      <button onClick={onAddText}>Add Text</button>
      <button onClick={onApplyGrayscale}>Grayscale</button>
      <button onClick={onApplySepia}>Sepia</button>
      <button onClick={onRotate}>Rotate</button>
      <button onClick={() => document.getElementById("fileInput").click()}>Upload Image</button>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        accept="image/*"
        onChange={(e) => onUploadImage(e.target.files[0])}
      />
    </div>
  );
}

export default Toolbar;

