import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/mail.css';
import Envelope from '../images/closedMail.png';
import OpenEnvelope from '../images/openMail.jpg';
import Stamp from '../images/stamp.png';
import HandWrittenNote from '../images/handwrittenNote.png';

const Mail = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNote, setShowNote] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setIsOpen(true);
    }

    const handleButtonClick = () => {
        navigate('/collage');
    }

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                setShowNote(true);
            }, 500); // 0.5 second delay for the note to appear after the envelope opens
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return (
        <>
            <div className="img-container">
                <img 
                    src={isOpen ? OpenEnvelope : Envelope} 
                    alt="envelope" 
                    className={`envelope ${isOpen ? 'open' : ''}`}
                />
                {!isOpen && (
                    <img 
                        src={Stamp} 
                        alt="stamp" 
                        className="stamp" 
                        onClick={handleClick}
                    />
                )}
                {showNote && (
                    <div className="note-container">
                        <img 
                            src={HandWrittenNote} 
                            alt="handwritten note" 
                            className="handwritten-note"
                        />
                        <button className="done-reading-btn" onClick={handleButtonClick}>
                            Done reading?
                        </button>
                    </div>
                )}
                {!isOpen && (
                    <div>
                        <h1>Click the stamp to open</h1>
                    </div>
                )}
            </div>
        </>
    )
}

export default Mail;
