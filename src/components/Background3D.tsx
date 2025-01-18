import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    const particleCount = 1500;
    const particleSpread = 200;
    const particleYRange = 300;
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    const createSnowParticles = () => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const velocities = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      const colorPalette = [
        new THREE.Color('#FFFFFF'),
        new THREE.Color('#E5DEFF'),
        new THREE.Color('#FFDEE2'),
        new THREE.Color('#D3E4FD')
      ];

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Position
        positions[i3] = (Math.random() - 0.5) * particleSpread;
        positions[i3 + 1] = Math.random() * particleYRange - particleYRange / 2;
        positions[i3 + 2] = (Math.random() - 0.5) * particleSpread;
        
        // Velocity (mainly downward with slight horizontal movement)
        velocities[i3] = (Math.random() - 0.5) * 0.2;      // X velocity
        velocities[i3 + 1] = -0.2 - Math.random() * 0.3;   // Y velocity (downward)
        velocities[i3 + 2] = (Math.random() - 0.5) * 0.2;  // Z velocity
        
        // Color
        const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        colors[i3] = color.r;
        colors[i3 + 1] = color.g;
        colors[i3 + 2] = color.b;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      
      const material = new THREE.PointsMaterial({
        size: 0.8,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
      });

      const particles = new THREE.Points(geometry, material);
      particles.userData.velocities = velocities;
      return particles;
    };

    const snowParticles = createSnowParticles();
    scene.add(snowParticles);

    camera.position.z = 100;

    const animate = () => {
      requestAnimationFrame(animate);

      const positions = snowParticles.geometry.attributes.position.array as Float32Array;
      const velocities = snowParticles.userData.velocities;

      for (let i = 0; i < positions.length; i += 3) {
        // Update positions based on velocities
        positions[i] += velocities[i];
        positions[i + 1] += velocities[i + 1];
        positions[i + 2] += velocities[i + 2];

        // Slight random movement
        velocities[i] += (Math.random() - 0.5) * 0.01;
        velocities[i + 2] += (Math.random() - 0.5) * 0.01;

        // Keep velocities within bounds
        velocities[i] = Math.max(Math.min(velocities[i], 0.2), -0.2);
        velocities[i + 2] = Math.max(Math.min(velocities[i + 2], 0.2), -0.2);

        // Reset particles that fall below the view
        if (positions[i + 1] < -particleYRange / 2) {
          positions[i] = (Math.random() - 0.5) * particleSpread;
          positions[i + 1] = particleYRange / 2;
          positions[i + 2] = (Math.random() - 0.5) * particleSpread;
          
          velocities[i] = (Math.random() - 0.5) * 0.2;
          velocities[i + 1] = -0.2 - Math.random() * 0.3;
          velocities[i + 2] = (Math.random() - 0.5) * 0.2;
        }
      }

      snowParticles.geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      snowParticles.geometry.dispose();
      (snowParticles.material as THREE.PointsMaterial).dispose();
    };

  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
};

export default Background3D;
