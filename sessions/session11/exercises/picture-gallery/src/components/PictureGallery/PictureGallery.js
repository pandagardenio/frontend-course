import { useState } from 'react';

import PictureGalleryControls from './PictureGalleryControls';
import PictureGalleryCanvas from './PictureGalleryCanvas';
import PictureGalleryThumbnails from './PictureGalleryThumbnails';

import './PictureGallery.css';

function PictureGallery(props) {
    const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

    const getValidPictureIndex = (pictureIndex) => {
        // IMPLEMENT:: here the solution for the bug Fixing the Picture Gallery Thumbnails
        return pictureIndex;
    }

    const handleOnThumbnailClick = (pictureIndex) => {
        // IMPLEMENT:: here the solution for Making the thumbnails clickable
    };

    const handleOnPreviousPicture = () => {
        setCurrentPictureIndex(getValidPictureIndex(currentPictureIndex - 1));
    };

    const handleOnNextPicture = () => {
        setCurrentPictureIndex(getValidPictureIndex(currentPictureIndex + 1));
    };

    return (
        <div className="picture-gallery">
            <PictureGalleryCanvas picture={props.pictures[currentPictureIndex]}/>
            <PictureGalleryControls onPreviousPicture={handleOnPreviousPicture} onNextPicture={handleOnNextPicture}/>
            <PictureGalleryThumbnails
                currentPictureIndex={currentPictureIndex}
                pictures={props.pictures}
            />
        </div>
    );
}

export default PictureGallery;
