import { useEffect } from "react";

import * as THREE from "three";
import { TeapotGeometry } from "three/examples/jsm/geometries/TeapotGeometry";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry";

import SceneInit from "./lib/SceneInit";

function App() {
  useEffect(() => {
    const test = new SceneInit("myThreeJsCanvas");
    test.initialize();
    test.animate();

    // Adding geometries to a three.js scene.
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1, 1, 1, 16);
    const boxMaterial = new THREE.MeshNormalMaterial({ wireframe: true });
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    boxMesh.position.x = -1;
    test.scene.add(boxMesh);

    const cylinderGeometry = new THREE.CylinderGeometry(0.5, 0.5, 1, 6, 16);
    const cylinderMaterial = new THREE.MeshNormalMaterial({ wireframe: true });
    const cylinderMesh = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    cylinderMesh.position.x = 1;
    test.scene.add(cylinderMesh);
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" />
    </div>
  );
}

export default App;
