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

    const geometryFolder = gui.addFolder("Mesh Geometry");
    geometryFolder.open();
    // Changing Geometry (scale, rotation)
    const rotationFolder = geometryFolder.addFolder("Rotation");
    rotationFolder.add(boxMesh.rotation, "x", 0, Math.PI).name("Rotate X Axis");
    rotationFolder.add(boxMesh.rotation, "y", 0, Math.PI).name("Rotate Y Axis");
    rotationFolder.add(boxMesh.rotation, "z", 0, Math.PI).name("Rotate Z Axis");
    const scaleFolder = geometryFolder.addFolder("Scale");
    scaleFolder.add(boxMesh.scale, "x", 0, 2).name("Scale X Axis");
    scaleFolder.add(boxMesh.scale, "y", 0, 2).name("Scale Y Axis");
    scaleFolder.add(boxMesh.scale, "z", 0, 2).name("Scale Z Axis");
    scaleFolder.open();

    //updating material (color & wireframe)
    const materialFolder = gui.addFolder("Mesh Material");
    const materialParams = {
      boxMeshColor: boxMesh.material.color.getHex(),
    };
    materialFolder.add(boxMesh.material, "wireframe");
    materialFolder
      .addColor(materialParams, "boxMeshColor")
      .onChange((value) => boxMesh.material.color.set(value));

    return () => {
      gui.destroy();
    };
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;
