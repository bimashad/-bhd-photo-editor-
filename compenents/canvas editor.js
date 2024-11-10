// CanvasEditor.js
import React, { useEffect, useRef } from "react";
import { fabric } from "fabric";

function CanvasEditor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Initialize Fabric.js Canvas
    const canvas = new fabric.Canvas("editorCanvas", {
      width: 800,
      height: 600,
      backgroundColor: "#fff",
    });
    canvasRef.current = canvas;
  }, []);

  const addText = () => {
    const canvas = canvasRef.current;
    const text = new fabric.Textbox("Edit me", {
      left: 100,
      top: 100,
      fontSize: 24,
      fill: "black",
    });
    canvas.add(text).setActiveObject(text);
  };

  const applyGrayscale = () => {
    const canvas = canvasRef.current;
    canvas.getActiveObject().filters.push(new fabric.Image.filters.Grayscale());
    canvas.getActiveObject().applyFilters();
    canvas.renderAll();
  };

  const applySepia = () => {
    const canvas = canvasRef.current;
    canvas.getActiveObject().filters.push(new fabric.Image.filters.Sepia());
    canvas.getActiveObject().applyFilters();
    canvas.renderAll();
  };

  const rotate = () => {
    const canvas = canvasRef.current;
    const obj = canvas.getActiveObject();
    if (obj) {
      obj.rotate((obj.angle + 90) % 360).setCoords();
      canvas.renderAll();
    }
  };

  const handleImageUpload = (file) => {
    const canvas = canvasRef.current;
    const reader = new FileReader();
    reader.onload = (e) => {
      fabric.Image.fromURL(e.target.result, (img) => {
        img.set({ left: 100, top: 100 });
        canvas.add(img).setActiveObject(img);
        canvas.renderAll();
      });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <canvas id="editorCanvas"></canvas>
      <Toolbar
        onAddText={addText}
        onApplyGrayscale={applyGrayscale}
        onApplySepia={applySepia}
        onRotate={rotate}
        onUploadImage={handleImageUpload}
      />
    </div>
  );
}

export default CanvasEditor;
