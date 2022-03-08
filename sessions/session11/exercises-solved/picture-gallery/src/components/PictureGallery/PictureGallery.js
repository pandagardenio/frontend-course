import { useState } from 'react';

import PictureGalleryControls from './PictureGalleryControls';
import PictureGalleryCanvas from './PictureGalleryCanvas';
import PictureGalleryThumbnails from './PictureGalleryThumbnails';

import './PictureGallery.css';

function PictureGallery(props) {
    const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

    const getValidPictureIndex = (pictureIndex) => {
        if (pictureIndex < 0) {
            return props.pictures.length - 1;
        }

        if (pictureIndex > props.pictures.length -1) {
            return 0;
        }

        return pictureIndex;
    }

    const handleOnThumbnailClick = (pictureIndex) => {
        setCurrentPictureIndex(pictureIndex);
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
                onThumbnailClick={handleOnThumbnailClick}
            />
        </div>
    );
}

export default PictureGallery;
