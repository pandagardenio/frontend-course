import './PictureGalleryControls.css';

function PictureGalleryControls(props) {
    const handleOnPreviousPictureClick = () => {
        props.onPreviousPicture();
    }

    const handleOnNextPictureClick = () => {
        props.onNextPicture();
    };

    const isPreviousPictureDisabled = () => {
        // IMPLEMENT:: here the solution for the bug Fixing the Picture Gallery Thumbnails
        return false;
    };

    const isNextPictureDisabled = () => {
        // IMPLEMENT:: here the solution for the bug Fixing the Picture Gallery Thumbnails
        return false;
    };

    return (
        <div className="picture-gallery__controls">
            {/* IMPLEMENT:: here the solution for Improving the buttons  */}
            <button disabled={isPreviousPictureDisabled()} onClick={handleOnPreviousPictureClick}>Previous Picture</button>
            <button disabled={isNextPictureDisabled()} onClick={handleOnNextPictureClick}>Next Picture</button>
        </div>
    );
}

export default PictureGalleryControls;
