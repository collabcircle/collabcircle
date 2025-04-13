'use client';
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export const IciclesCanvas = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(0.5, 8, 8);
    const material = new THREE.MeshBasicMaterial({ color: 0xadd8e6 });
    const iceCubes = [];

    for (let i = 0; i < 200; i++) {
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(Math.random() * 200 - 100, Math.random() * 200, Math.random() * 200 - 100);
      scene.add(cube);
      iceCubes.push(cube);
    }

    const animate = () => {
      requestAnimationFrame(animate);
      iceCubes.forEach(cube => {
        cube.position.y -= 0.4;
        if (cube.position.y < -100) cube.position.y = 100;
      });
      renderer.render(scene, camera);
    };

    animate();
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="absolute top-0 left-0 w-full h-full z-0" ref={mountRef} />;
};
