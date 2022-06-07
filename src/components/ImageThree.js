import { Parallax } from 'react-parallax';
import spaceStation from '../img/3.jpg';

const ImageOne = () => (
    <Parallax className='image' blur={2} bgImage={spaceStation} strength={200}>
        <div className='content'>
            <span className='img-text'>a trip to space</span>
        </div>
    </Parallax>
);
export default ImageOne