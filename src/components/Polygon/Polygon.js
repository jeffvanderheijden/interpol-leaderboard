import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const Polygon = () => {
    const threeCanvasRef = useRef(null);

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: threeCanvasRef.current, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Create Icosahedron geometry (a polyhedron that resembles a sphere)
        const geometry = new THREE.IcosahedronGeometry(1, 0);
        const material = new THREE.LineBasicMaterial({ color: 0xffffff });
        const edges = new THREE.EdgesGeometry(geometry);
        const line = new THREE.LineSegments(edges, material);
        scene.add(line);

        camera.position.z = 5;

        // Animation function
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate the shape
            // line.rotation.x += 0.01;
            line.rotation.y += 0.0008;

            renderer.render(scene, camera);
        };

        // Start animation
        animate();

        // Adjust canvas size on window resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            renderer.dispose();
        };
    }, []);

    return (
        <canvas ref={threeCanvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, opacity: .3 }}></canvas>
    );
};

export default Polygon;