import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCcw, Sparkles } from 'lucide-react';

interface Hero3DCanvasProps {
  onExploreClick?: () => void;
}

export const Hero3DCanvas: React.FC<Hero3DCanvasProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGLSupported, setWebGLSupported] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [activeColor, setActiveColor] = useState<'forest' | 'bronze' | 'lime'>('forest');
  const [isInteracting, setIsInteracting] = useState(false);

  // References for runtime animation and interaction
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const headphoneGroupRef = useRef<THREE.Group | null>(null);
  const haloRingRef = useRef<THREE.Mesh | null>(null);
  const materialsRef = useRef<{ [key: string]: THREE.MeshStandardMaterial }>({});

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clean up any stale canvas from previous renders
    container.innerHTML = '';

    let renderer: THREE.WebGLRenderer | null = null;
    let animationFrameId: number;

    try {
      // Check WebGL availability
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLSupported(false);
        return;
      }

      const width = container.clientWidth || 550;
      const height = container.clientHeight || 550;

      // Scene
      const scene = new THREE.Scene();
      sceneRef.current = scene;

      // Camera
      const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 1000);
      camera.position.set(0, 0.8, 4.4);

      // Renderer with safe initialization
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.25;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      rendererRef.current = renderer;

      container.appendChild(renderer.domElement);

    // --- LIGHTING SETUP ---
    // Deep Forest Green Ambient Fill
    const ambientLight = new THREE.AmbientLight(0x0d2218, 2.2);
    scene.add(ambientLight);

    // Key Studio Light (Crisp White/Warm)
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.4);
    keyLight.position.set(4, 5, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.001;
    scene.add(keyLight);

    // Electric Lime Rim / Back Light (creates futuristic green edge glow)
    const limeRimLight = new THREE.DirectionalLight(0xb8e938, 4.2);
    limeRimLight.position.set(-3.5, 2.5, -3.5);
    scene.add(limeRimLight);

    // Warm Bronze Accent Light
    const bronzeLight = new THREE.PointLight(0xb38b57, 2.5, 8);
    bronzeLight.position.set(2.5, -0.5, 2);
    scene.add(bronzeLight);

    // --- MATERIALS ---
    const primaryShellMat = new THREE.MeshStandardMaterial({
      color: 0x0f1813, // Dark forest charcoal
      roughness: 0.35,
      metalness: 0.65,
    });

    const bronzeMetalMat = new THREE.MeshStandardMaterial({
      color: 0xb38b57, // Warm bronze highlight
      roughness: 0.22,
      metalness: 0.88,
    });

    const cushionMat = new THREE.MeshStandardMaterial({
      color: 0x080f0c, // Deep textured leather
      roughness: 0.85,
      metalness: 0.05,
    });

    const haloMat = new THREE.MeshStandardMaterial({
      color: 0xb8e938,
      emissive: 0xb8e938,
      emissiveIntensity: 1.6,
      roughness: 0.15,
      metalness: 0.3,
    });

    const pedestalMat = new THREE.MeshStandardMaterial({
      color: 0x0a1410,
      roughness: 0.55,
      metalness: 0.45,
    });

    materialsRef.current = {
      primary: primaryShellMat,
      bronze: bronzeMetalMat,
      cushion: cushionMat,
      halo: haloMat,
    };

    // --- 3D ENVIRONMENT: PEDESTAL & HALO RING ---
    const stageGroup = new THREE.Group();
    scene.add(stageGroup);

    // Pedestal Base (Dark Cylindrical Stage with Bronze Rim)
    const pedestalGeo = new THREE.CylinderGeometry(1.5, 1.6, 0.25, 48);
    const pedestalMesh = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestalMesh.position.y = -1.2;
    pedestalMesh.receiveShadow = true;
    stageGroup.add(pedestalMesh);

    // Pedestal Bronze Chamfer Ring
    const chamferGeo = new THREE.TorusGeometry(1.52, 0.03, 16, 48);
    const chamferMesh = new THREE.Mesh(chamferGeo, bronzeMetalMat);
    chamferMesh.rotation.x = Math.PI / 2;
    chamferMesh.position.y = -1.08;
    stageGroup.add(chamferMesh);

    // Luminous Electric-Green Halo Ring behind product
    const haloGeo = new THREE.TorusGeometry(1.7, 0.035, 24, 64);
    const haloMesh = new THREE.Mesh(haloGeo, haloMat);
    haloMesh.position.set(0, 0.1, -0.65);
    haloMesh.rotation.x = 0.08;
    stageGroup.add(haloMesh);
    haloRingRef.current = haloMesh;

    // Contact Shadow Disc
    const shadowGeo = new THREE.PlaneGeometry(3.6, 3.6);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x020704,
      transparent: true,
      opacity: 0.65,
      depthWrite: false,
    });
    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.y = -1.07;
    stageGroup.add(shadowMesh);

    // --- DETAILED 3D HEADPHONE PRODUCT MODEL ---
    const headphone = new THREE.Group();
    headphoneGroupRef.current = headphone;
    headphone.position.y = -0.05;
    scene.add(headphone);

    // 1. Headband Arc (Aerospace aluminum main bridge)
    const arcRadius = 1.15;
    const arcTube = 0.052;
    const arcGeo = new THREE.TorusGeometry(arcRadius, arcTube, 20, 48, Math.PI * 0.95);
    const arcMesh = new THREE.Mesh(arcGeo, primaryShellMat);
    arcMesh.rotation.z = Math.PI * 0.025;
    arcMesh.position.y = 0.1;
    headphone.add(arcMesh);

    // 2. Headband Inner Cushion Pad (Ergonomic memory foam)
    const cushionArcGeo = new THREE.TorusGeometry(arcRadius - 0.045, 0.04, 16, 40, Math.PI * 0.65);
    const cushionArcMesh = new THREE.Mesh(cushionArcGeo, cushionMat);
    cushionArcMesh.rotation.z = Math.PI * 0.175;
    cushionArcMesh.position.y = 0.1;
    headphone.add(cushionArcMesh);

    // 3. Left & Right Pivot Arms with Bronze Chamfers & Screws
    [-1, 1].forEach((side) => {
      const earGroup = new THREE.Group();
      earGroup.position.set(side * 1.18, -0.22, 0);

      // Bronze Pivot Bracket
      const bracketGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.28, 24);
      const bracketMesh = new THREE.Mesh(bracketGeo, bronzeMetalMat);
      bracketMesh.rotation.z = side * 0.25;
      bracketMesh.position.y = 0.2;
      earGroup.add(bracketMesh);

      // Pivot Hinge Disc with ODDA Monogram Emblem
      const hingeDiscGeo = new THREE.CylinderGeometry(0.16, 0.16, 0.06, 32);
      const hingeDiscMesh = new THREE.Mesh(hingeDiscGeo, bronzeMetalMat);
      hingeDiscMesh.rotation.x = Math.PI / 2;
      earGroup.add(hingeDiscMesh);

      // Ear Cup Outer Shell (Machined beveled capsule)
      const cupOuterGeo = new THREE.CylinderGeometry(0.48, 0.52, 0.24, 36);
      const cupOuterMesh = new THREE.Mesh(cupOuterGeo, primaryShellMat);
      cupOuterMesh.rotation.z = Math.PI / 2;
      cupOuterMesh.castShadow = true;
      earGroup.add(cupOuterMesh);

      // Outer Bronze Accent Ring on Ear Cup
      const accentRingGeo = new THREE.TorusGeometry(0.5, 0.02, 16, 36);
      const accentRingMesh = new THREE.Mesh(accentRingGeo, bronzeMetalMat);
      accentRingMesh.rotation.y = Math.PI / 2;
      accentRingMesh.position.x = side * 0.08;
      earGroup.add(accentRingMesh);

      // Memory Foam Cushion (Thick comfortable ear cushion)
      const earCushionGeo = new THREE.CylinderGeometry(0.49, 0.49, 0.22, 36);
      const earCushionMesh = new THREE.Mesh(earCushionGeo, cushionMat);
      earCushionMesh.rotation.z = Math.PI / 2;
      earCushionMesh.position.x = -side * 0.15;
      earGroup.add(earCushionMesh);

      // Rotary Haptic Dial on the right ear cup
      if (side === 1) {
        const dialGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.08, 28);
        const dialMesh = new THREE.Mesh(dialGeo, bronzeMetalMat);
        dialMesh.rotation.z = Math.PI / 2;
        dialMesh.position.x = 0.18;
        earGroup.add(dialMesh);
      }

      headphone.add(earGroup);
    });

    // Slight initial tilt for dynamic flagship presentation
    headphone.rotation.y = -0.38;
    headphone.rotation.x = 0.12;

    // --- POINTER INTERACTION & ORBIT CONTROLS ---
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let targetRotationY = -0.38;
    let targetRotationX = 0.12;
    let currentRotationY = -0.38;
    let currentRotationX = 0.12;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      setIsInteracting(true);
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        targetRotationY += deltaX * 0.008;
        targetRotationX = Math.max(-0.4, Math.min(0.4, targetRotationX + deltaY * 0.008));

        previousMousePosition = { x: e.clientX, y: e.clientY };
      } else {
        // Subtle pointer parallax when just hovering
        const rect = container.getBoundingClientRect();
        const normX = (e.clientX - rect.left) / rect.width - 0.5;
        const normY = (e.clientY - rect.top) / rect.height - 0.5;
        targetRotationY = -0.38 + normX * 0.4;
        targetRotationX = 0.12 + normY * 0.25;
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Touch support for mobile and tablet
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        setIsInteracting(true);
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - previousMousePosition.x;
        const deltaY = e.touches[0].clientY - previousMousePosition.y;

        targetRotationY += deltaX * 0.009;
        targetRotationX = Math.max(-0.4, Math.min(0.4, targetRotationX + deltaY * 0.009));

        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchEnd = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // --- ANIMATION LOOP ---
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Slow elegant auto-rotation when user is not actively dragging
      if (!isDragging) {
        targetRotationY += 0.003;
      }

      // Smooth interpolation (damping)
      currentRotationY += (targetRotationY - currentRotationY) * 0.06;
      currentRotationX += (targetRotationX - currentRotationX) * 0.06;

      if (headphoneGroupRef.current) {
        headphoneGroupRef.current.rotation.y = currentRotationY;
        headphoneGroupRef.current.rotation.x = currentRotationX;
        // Subtle levitation
        headphoneGroupRef.current.position.y = -0.05 + Math.sin(elapsedTime * 1.5) * 0.04;
      }

      // Pulsing luminous halo ring
      if (haloRingRef.current) {
        const haloPulse = 1.4 + Math.sin(elapsedTime * 2.5) * 0.25;
        (haloRingRef.current.material as THREE.MeshStandardMaterial).emissiveIntensity = haloPulse;
        haloRingRef.current.rotation.z = elapsedTime * 0.1;
      }

      if (renderer) {
        renderer.render(scene, camera);
      }
    };

      animate();

      // Resize handler
      const handleResize = () => {
        if (!container || !renderer) return;
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('resize', handleResize);
        container.removeEventListener('mousedown', onMouseDown);
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
        container.removeEventListener('touchstart', onTouchStart);
        window.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('touchend', onTouchEnd);
        if (renderer && renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        if (renderer) {
          renderer.dispose();
        }
      };
    } catch (err) {
      console.warn('Three.js initialization safely switched to photographic fallback:', err);
      setWebGLSupported(false);
    }
  }, []);

  // Update materials when color theme changes
  const handleColorChange = (color: 'forest' | 'bronze' | 'lime') => {
    setActiveColor(color);
    if (!materialsRef.current.primary) return;

    if (color === 'forest') {
      materialsRef.current.primary.color.setHex(0x0f1813);
      materialsRef.current.primary.metalness = 0.65;
    } else if (color === 'bronze') {
      materialsRef.current.primary.color.setHex(0x3a2c1d);
      materialsRef.current.primary.metalness = 0.85;
    } else if (color === 'lime') {
      materialsRef.current.primary.color.setHex(0x192d1f);
      materialsRef.current.primary.metalness = 0.5;
    }
  };

  const handleReset = () => {
    if (headphoneGroupRef.current) {
      headphoneGroupRef.current.rotation.set(0.12, -0.38, 0);
    }
  };

  return (
    <div
      className="relative w-full aspect-square max-w-[560px] mx-auto flex items-center justify-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D WebGL Canvas Container */}
      <div
        ref={containerRef}
        className={`w-full h-full cursor-grab active:cursor-grabbing relative z-10 transition-opacity duration-700 ${
          webGLSupported ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* High-Resolution Photographic Fallback (rendered if WebGL is unavailable or fails) */}
      {!webGLSupported && (
        <div className="absolute inset-0 flex items-center justify-center p-6 z-10">
          <div className="relative w-full h-full max-w-[460px] max-h-[460px] rounded-3xl bg-[#0a1811] border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
            {/* Halo ring graphic */}
            <div className="absolute w-[340px] h-[340px] rounded-full border-2 border-[#b8e938] shadow-[0_0_50px_rgba(184,233,56,0.5)] animate-pulse-subtle" />
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=85"
              alt="ODDA-1 Apex Studio Headphones"
              className="w-[82%] h-[82%] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-10 transform -rotate-12"
            />
          </div>
        </div>
      )}

      {/* Floating Interactive 3D Control Badges */}
      <div className="absolute bottom-3 left-4 right-4 z-20 flex items-center justify-between pointer-events-auto">
        {/* Color Palette Switcher */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0d2218]/85 backdrop-blur-md border border-white/10 shadow-lg">
          <span className="text-[10px] uppercase font-bold tracking-wider text-[#9cb3a5] mr-1 hidden sm:inline">
            Finish:
          </span>
          <button
            onClick={() => handleColorChange('forest')}
            title="Forest Obsidian"
            className={`w-4 h-4 rounded-full bg-[#0a1d14] border transition-transform ${
              activeColor === 'forest' ? 'border-[#b8e938] scale-125 shadow-[0_0_8px_#b8e938]' : 'border-white/30'
            }`}
          />
          <button
            onClick={() => handleColorChange('bronze')}
            title="Imperial Bronze"
            className={`w-4 h-4 rounded-full bg-[#b38b57] border transition-transform ${
              activeColor === 'bronze' ? 'border-[#b8e938] scale-125 shadow-[0_0_8px_#b38b57]' : 'border-white/30'
            }`}
          />
          <button
            onClick={() => handleColorChange('lime')}
            title="Cyber Lime"
            className={`w-4 h-4 rounded-full bg-[#b8e938] border transition-transform ${
              activeColor === 'lime' ? 'border-white scale-125 shadow-[0_0_8px_#b8e938]' : 'border-white/30'
            }`}
          />
        </div>

        {/* Drag to Orbit Hint & Reset Control */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#07140e]/80 backdrop-blur-md border border-white/10 text-[11px] text-[#9cb3a5]">
            <Sparkles className="w-3 h-3 text-[#b8e938]" />
            <span>{isInteracting ? '360° Free Orbit' : 'Drag to rotate'}</span>
          </div>

          <button
            onClick={handleReset}
            title="Reset 3D Perspective"
            className="w-8 h-8 rounded-full bg-[#12251c] hover:bg-[#162e23] border border-white/10 flex items-center justify-center text-[#9cb3a5] hover:text-white transition-all active:scale-95 shadow-md"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
