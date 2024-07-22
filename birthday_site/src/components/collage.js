import '../styles/homepage.css';
import { useNavigate } from 'react-router-dom';
import image from '../images/collage1.png';

const Collage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

    
    return (
        <>
            <div className='collage_img_container'>
                <div className='collage_img_subcontainer'>
                    <img src={image} alt="collage" onClick={handleClick}/>
                </div>
                <div className="collage_img_content">
                    <h1>From Cookie💜</h1>
                </div>
            </div>
        </>
    )
}

export default Collage;