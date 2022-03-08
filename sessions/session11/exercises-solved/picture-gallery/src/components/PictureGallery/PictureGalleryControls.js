import Button from '@mui/material/Button';
import './PictureGalleryControls.css';

function PictureGalleryControls(props) {
    const handleOnPreviousPictureClick = () => {
        props.onPreviousPicture();
    }

    const handleOnNextPictureClick = () => {
        props.onNextPicture();
    };

    return (
        <div className="picture-gallery__controls">
            <Button onClick={handleOnPreviousPictureClick}>Previous Picture</Button>
            <Button onClick={handleOnNextPictureClick}>Next Picture</Button>
        </div>
    );
}

export default PictureGalleryControls;
