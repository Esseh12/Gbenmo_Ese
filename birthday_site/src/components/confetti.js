import { useState, useEffect } from 'react';
import ReactConfetti from 'react-confetti';

const Confetti = () => {
    const [windowDimension, setWindowDimension] = useState({ width: window.innerWidth, height: window.innerHeight });
    const [isConfettiRunning, setIsConfettiRunning] = useState(true);

    const detectSize = () => {
        setWindowDimension({ width: window.innerWidth, height: window.innerHeight });
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize);
        return () => {
            window.removeEventListener('resize', detectSize);
        }
    }, []);

    useEffect(() => {
        const confettiTimeout = setTimeout(() => {
            setIsConfettiRunning(false);
        }, 4500); 

        return () => clearTimeout(confettiTimeout);
    }, []);

    return (
        <div>
            {isConfettiRunning && (
                <ReactConfetti
                    width={windowDimension.width}
                    height={windowDimension.height}
                    tweenDuration={1000}
                />
            )}
        </div>
    );
}

export default Confetti;
