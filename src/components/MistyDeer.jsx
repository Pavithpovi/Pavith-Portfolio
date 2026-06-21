import React from 'react';

export default function MistyDeer() {
    return (
        <div className="misty-deer-container">
            <svg 
                viewBox="0 0 100 100" 
                className="misty-deer-svg"
                style={{
                    width: '100%',
                    height: '100%',
                    filter: 'drop-shadow(0 0 12px var(--neon-teal, #00f2fe))'
                }}
            >
                {/* Antlers (Bioluminescent neon paths) */}
                <g className="deer-body-group">
                    {/* Left Antler */}
                    <path 
                        d="M 33 20 Q 28 10 20 8 M 28 15 Q 22 13 18 16 M 25 12 Q 22 8 23 4 M 30 18 Q 25 14 26 10" 
                        stroke="var(--neon-teal, #00f2fe)" 
                        strokeWidth="1.2" 
                        strokeLinecap="round" 
                        fill="none" 
                    />
                    {/* Right Antler */}
                    <path 
                        d="M 35 21 Q 38 11 44 7 M 36 16 Q 40 13 43 15 M 37 12 Q 41 8 42 4 M 38 18 Q 43 14 42 10" 
                        stroke="var(--neon-teal, #00f2fe)" 
                        strokeWidth="1.2" 
                        strokeLinecap="round" 
                        fill="none" 
                    />
                    
                    {/* Ears */}
                    <path d="M 32 22 Q 29 16 31 19 Z" fill="#040b18" />
                    <path d="M 36 23 Q 39 17 37 20 Z" fill="#040b18" />

                    {/* Head */}
                    <path d="M 32 25 L 25 21 C 24 20, 26 18, 29 19 L 35 22 Z" fill="#040b18" />

                    {/* Neck */}
                    <path d="M 28 50 Q 25 35 32 25 L 38 27 Q 34 40 38 52 Z" fill="#040b18" />

                    {/* Chest & Body */}
                    <circle cx="36" cy="52" r="10" fill="#040b18" />
                    <ellipse cx="50" cy="55" rx="20" ry="12" fill="#040b18" />

                    {/* Tail */}
                    <path d="M 68 52 Q 73 50 72 56 Z" fill="#040b18" />
                </g>

                {/* Legs (Animated joints) */}
                {/* Front Left Leg */}
                <path 
                    d="M 33 58 L 32 75 L 29 88" 
                    className="leg-fl" 
                    stroke="#040b18" 
                    strokeWidth="3.2" 
                    strokeLinecap="round" 
                    fill="none"
                />
                {/* Front Right Leg */}
                <path 
                    d="M 38 58 L 38 72 L 41 88" 
                    className="leg-fr" 
                    stroke="#040b18" 
                    strokeWidth="3.2" 
                    strokeLinecap="round" 
                    fill="none"
                />
                {/* Back Left Leg */}
                <path 
                    d="M 62 58 L 62 74 L 64 88" 
                    className="leg-bl" 
                    stroke="#040b18" 
                    strokeWidth="3.2" 
                    strokeLinecap="round" 
                    fill="none"
                />
                {/* Back Right Leg */}
                <path 
                    d="M 67 58 L 65 72 L 62 88" 
                    className="leg-br" 
                    stroke="#040b18" 
                    strokeWidth="3.2" 
                    strokeLinecap="round" 
                    fill="none"
                />
            </svg>
        </div>
    );
}
