import { Parallax } from 'react-parallax';
import Satellite from '../img/2.jpg';

const ImageOne = () => (
    <Parallax className='image' blur={2} bgImage={Satellite} strength={200}>
        <div className='content'>
            <span className='img-text'>a trip to space</span>
        </div>
    </Parallax>
);
export default ImageOne