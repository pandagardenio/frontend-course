import './PictureGalleryCanvas.css';

function PictureGalleryCanvas(props) {
    return (
        <div className="picture-gallery__canvas">
            <img className="picture-gallery__canvas-image" src={props.picture}/>
        </div>
    );
}

export default PictureGalleryCanvas;
