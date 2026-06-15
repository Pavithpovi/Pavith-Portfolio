import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const particleCount = 120;
        const phases = [];
        const amplitudes = [];
        let animationFrameId;

        // Initialize Scene & Camera
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
        camera.position.z = 25;

        // Initialize WebGL Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            alpha: true,
            antialias: true
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Generate glowing circular particle texture programmatically
        const textureCanvas = document.createElement('canvas');
        textureCanvas.width = 32;
        textureCanvas.height = 32;
        const ctx = textureCanvas.getContext('2d');
        const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.2, 'rgba(0, 242, 254, 0.8)');
        gradient.addColorStop(0.5, 'rgba(13, 243, 201, 0.2)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(16, 16, 16, 0, Math.PI * 2);
        ctx.fill();
        const texture = new THREE.CanvasTexture(textureCanvas);

        // Particle Geometry
        const particleGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount; i++) {
            // Position bounds
            positions[i * 3] = (Math.random() - 0.5) * 60;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 40 - 10;

            // Custom color mixes (cyan, teal, gold)
            const rand = Math.random();
            if (rand < 0.4) {
                colors[i * 3] = 0.05;
                colors[i * 3 + 1] = 0.95;
                colors[i * 3 + 2] = 0.78;
            } else if (rand < 0.8) {
                colors[i * 3] = 0.0;
                colors[i * 3 + 1] = 0.8;
                colors[i * 3 + 2] = 1.0;
            } else {
                colors[i * 3] = 1.0;
                colors[i * 3 + 1] = 0.84;
                colors[i * 3 + 2] = 0.0;
            }

            phases.push(Math.random() * Math.PI * 2);
            amplitudes.push(0.5 + Math.random() * 1.5);
        }

        particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        // Particle Material
        const particleMaterial = new THREE.PointsMaterial({
            size: 0.8,
            vertexColors: true,
            map: texture,
            transparent: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        // Add particles to scene
        const particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);

        // Add lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0x00f2fe, 1, 100);
        pointLight.position.set(0, 0, 10);
        scene.add(pointLight);

        // Track mouse movement
        let targetMouseX = 0;
        let targetMouseY = 0;
        let curMouseX = 0;
        let curMouseY = 0;

        const onMouseMove = (e) => {
            targetMouseX = (e.clientX - window.innerWidth / 2) / 80;
            targetMouseY = (e.clientY - window.innerHeight / 2) / 80;
        };

        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('resize', onResize);

        // Render Loop
        let lastScrollY = window.scrollY;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            const time = Date.now() * 0.001;
            const currentScrollY = window.scrollY;
            const scrollDelta = currentScrollY - lastScrollY;
            lastScrollY = currentScrollY;

            const posArray = particleGeometry.attributes.position.array;

            for (let i = 0; i < particleCount; i++) {
                const i3 = i * 3;
                
                // Drift calculations
                posArray[i3] += Math.sin(time + phases[i]) * 0.015;
                posArray[i3 + 1] += Math.cos(time * 0.5 + phases[i]) * 0.015 + 0.01 + (scrollDelta * 0.005);

                // Boundary resets
                if (posArray[i3 + 1] > 30) {
                    posArray[i3 + 1] = -30;
                    posArray[i3] = (Math.random() - 0.5) * 60;
                }

                if (posArray[i3] > 35) posArray[i3] = -35;
                if (posArray[i3] < -35) posArray[i3] = 35;
            }

            particleGeometry.attributes.position.needsUpdate = true;

            // Parallax tracking
            curMouseX += (targetMouseX - curMouseX) * 0.05;
            curMouseY += (targetMouseY - curMouseY) * 0.05;

            camera.position.x = curMouseX;
            camera.position.y = -curMouseY + 25 - (currentScrollY * 0.015);
            camera.lookAt(scene.position.x, scene.position.y - (currentScrollY * 0.015), 0);

            renderer.render(scene, camera);
        };

        animate();

        // Clean up WebGL resources and event handlers
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', onResize);
            cancelAnimationFrame(animationFrameId);
            
            particleGeometry.dispose();
            particleMaterial.dispose();
            texture.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <>
            <canvas id="three-canvas" ref={canvasRef}></canvas>
            <div className="bg-nature-overlay"></div>
            <div className="bg-gradient-overlay"></div>
        </>
    );
}
