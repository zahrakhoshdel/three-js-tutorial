import { useEffect } from "react";

import * as THREE from "three";
import { GUI } from "dat.gui";

import SceneInit from "./lib/SceneInit";

function App() {
  useEffect(() => {
    const test = new SceneInit("myThreeJsCanvas");
    test.initialize();
    test.animate();

    const boxGeometry = new THREE.BoxGeometry(24, 24, 24);
    const boxMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    test.scene.add(boxMesh);

    //initialize
    const gui = new GUI();

    // Changing Geometry (scale, rotation)
    gui.add(boxMesh.rotation, "x", 0, Math.PI).name("Rotate X Axis");
    gui.add(boxMesh.rotation, "y", 0, Math.PI).name("Rotate Y Axis");
    gui.add(boxMesh.rotation, "z", 0, Math.PI).name("Rotate Z Axis");
    gui.add(boxMesh.scale, "x", 0, 2).name("Scale X Axis");
    gui.add(boxMesh.scale, "y", 0, 2).name("Scale Y Axis");
    gui.add(boxMesh.scale, "z", 0, 2).name("Scale Z Axis");

    //updating material (color & wireframe)
    const materialParams = {
      boxMeshColor: boxMesh.material.color.getHex(),
    };
    gui.add(boxMesh.material, "wireframe");
    gui
      .addColor(materialParams, "boxMeshColor")
      .onChange((value) => boxMesh.material.color.set(value));
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;
