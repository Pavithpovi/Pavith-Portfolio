import React, { useEffect, useRef, useState } from 'react';

const BUTTERFLY_COUNT = 3;

export default function BioluminescentButterflies() {
    const containerRef = useRef(null);
    const [butterflies, setButterflies] = useState([]);
    const stateRef = useRef([]);

    useEffect(() => {
        const initial = [];
        const colors = [
            'var(--neon-teal, #00f2fe)',
            'var(--neon-pink, #ff007f)',
            'var(--neon-yellow, #ffd700)'
        ];

        for (let i = 0; i < BUTTERFLY_COUNT; i++) {
            initial.push({
                id: i,
                x: Math.random() * 80 + 10,
                y: Math.random() * 80 + 10,
                tx: Math.random() * 80 + 10,
                ty: Math.random() * 80 + 10,
                vx: 0,
                vy: 0,
                angle: Math.random() * 360,
                scale: 0.4 + Math.random() * 0.4,
                color: colors[i % colors.length],
                flapSpeed: 0.15 + Math.random() * 0.1,
                wobbleSpeed: 2 + Math.random() * 3,
                phase: Math.random() * 100
            });
        }
        
        stateRef.current = initial;
        setButterflies([...initial]);

        let mouseX = null;
        let mouseY = null;

        const handleMouseMove = (e) => {
            mouseX = (e.clientX / window.innerWidth) * 100;
            mouseY = (e.clientY / window.innerHeight) * 100;
        };

        const handleMouseLeave = () => {
            mouseX = null;
            mouseY = null;
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', handleMouseLeave);

        let animationFrameId;
        let lastTime = Date.now();

        const updatePhysics = () => {
            const now = Date.now();
            const dt = (now - lastTime) / 1000;
            lastTime = now;

            const current = stateRef.current;

            current.forEach((b) => {
                const distToTargetX = b.tx - b.x;
                const distToTargetY = b.ty - b.y;
                const distToTarget = Math.sqrt(distToTargetX * distToTargetX + distToTargetY * distToTargetY);

                if (distToTarget < 6) {
                    b.tx = Math.random() * 80 + 10;
                    b.ty = Math.random() * 80 + 10;
                }

                let targetX = b.tx;
                let targetY = b.ty;
                if (mouseX !== null && mouseY !== null) {
                    const distToMouseX = mouseX - b.x;
                    const distToMouseY = mouseY - b.y;
                    const distToMouse = Math.sqrt(distToMouseX * distToMouseX + distToMouseY * distToMouseY);
                    
                    if (distToMouse < 25) {
                        targetX = mouseX + (distToMouseX > 0 ? -4 : 4);
                        targetY = mouseY + (distToMouseY > 0 ? -4 : 4);
                    }
                }

                const dx = targetX - b.x;
                const dy = targetY - b.y;
                const angleToTarget = Math.atan2(dy, dx);

                let diffAngle = angleToTarget - (b.angle * Math.PI) / 180;
                while (diffAngle < -Math.PI) diffAngle += Math.PI * 2;
                while (diffAngle > Math.PI) diffAngle -= Math.PI * 2;

                const turnSpeed = 2;
                const maxTurn = turnSpeed * dt;
                const turn = Math.max(-maxTurn, Math.min(maxTurn, diffAngle));
                
                b.angle = (b.angle + (turn * 180) / Math.PI) % 360;

                const speed = 8 + b.scale * 4;
                const rad = (b.angle * Math.PI) / 180;
                
                b.phase += b.wobbleSpeed * dt;
                const wobble = Math.sin(b.phase) * 3;
                
                const moveX = Math.cos(rad) * speed * dt;
                const moveY = Math.sin(rad) * speed * dt;

                const perpX = -Math.sin(rad) * wobble * dt * 25;
                const perpY = Math.cos(rad) * wobble * dt * 25;

                b.x += moveX + perpX;
                b.y += moveY + perpY;

                b.x = Math.max(2, Math.min(98, b.x));
                b.y = Math.max(2, Math.min(98, b.y));
            });

            current.forEach((b) => {
                const el = document.getElementById(`butterfly-${b.id}`);
                if (el) {
                    el.style.transform = `translate3d(${b.x}vw, ${b.y}vh, 0) rotate(${b.angle + 90}deg) scale(${b.scale})`;
                }
            });

            animationFrameId = requestAnimationFrame(updatePhysics);
        };

        animationFrameId = requestAnimationFrame(updatePhysics);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div 
            ref={containerRef}
            className="bioluminescent-butterflies-container"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                pointerEvents: 'none',
                zIndex: 99,
                overflow: 'hidden'
            }}
        >
            {butterflies.map((b) => (
                <div
                    key={b.id}
                    id={`butterfly-${b.id}`}
                    style={{
                        position: 'absolute',
                        width: '32px',
                        height: '32px',
                        left: '-16px',
                        top: '-16px',
                        transformOrigin: 'center center',
                        transition: 'transform 0.01s linear',
                        willChange: 'transform',
                        filter: `drop-shadow(0 0 8px ${b.color})`
                    }}
                >
                    <svg viewBox="0 0 50 50" style={{ width: '100%', height: '100%' }}>
                        <defs>
                            <linearGradient id={`grad-${b.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#ffffff" stopOpacity={0.9} />
                                <stop offset="60%" stopColor={b.color} stopOpacity={0.8} />
                                <stop offset="100%" stopColor="#040a15" stopOpacity={0.4} />
                            </linearGradient>
                        </defs>
                        {/* Left Wing */}
                        <path 
                            d="M25,25 C12,12 2,15 5,25 C7,31 16,29 25,25 Z" 
                            fill={`url(#grad-${b.id})`}
                            style={{
                                transformOrigin: '25px 25px',
                                animation: `wing-flap-left ${b.flapSpeed}s infinite ease-in-out`
                            }}
                        />
                        {/* Right Wing */}
                        <path 
                            d="M25,25 C38,12 48,15 45,25 C43,31 34,29 25,25 Z" 
                            fill={`url(#grad-${b.id})`}
                            style={{
                                transformOrigin: '25px 25px',
                                animation: `wing-flap-right ${b.flapSpeed}s infinite ease-in-out`
                            }}
                        />
                        {/* Body */}
                        <path 
                            d="M24,20 C24,19 26,19 26,20 L25.5,32 C25.5,33 24.5,33 24.5,32 Z" 
                            fill="#040b18" 
                        />
                        {/* Antennas */}
                        <path d="M24,20 C22,16 20,16 20,17" stroke={b.color} strokeWidth="0.8" fill="none" />
                        <path d="M26,20 C28,16 30,16 30,17" stroke={b.color} strokeWidth="0.8" fill="none" />
                    </svg>
                </div>
            ))}
        </div>
    );
}
