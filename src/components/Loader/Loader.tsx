import React from 'react';
import { LuPawPrint } from 'react-icons/lu';

const pulseAnimation = `
@keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.7; }
    100% { transform: scale(1); opacity: 1; }
}

.body-loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
        z-index: 9999;
    }
.loader-wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    border-radius: 50%;
    background: #f0f0f0;
    animation: pulse 1s infinite;
}
.loader-icon {
    width: 32px;
    height: 32px;
    fill: #0078d4;
}
`;

export const Loader: React.FC = () => (
    <>
    
        <style>{pulseAnimation}</style>
        <div className='body-loader'>
            <div className="loader-wrapper">
            <LuPawPrint color="#333" size={32} />
        </div>
        </div>
    </>
);