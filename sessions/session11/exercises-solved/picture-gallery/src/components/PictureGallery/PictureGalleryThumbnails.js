import './PictureGalleryThumbnails.css';

function PictureGalleryThumbnails(props){
    const handleThumbnailClick = (pictureIndex) => {
        props.onThumbnailClick(pictureIndex);
    };

    const getThumbnailsTransform = () => {
        const thumbnailWidth = 250;
        const thumbnailTranslate = -(thumbnailWidth * props.currentPictureIndex);
        return 'translateX(' + thumbnailTranslate + 'px)';
    }

    return (
        <div className="picture-gallery__thumbnails">
            <ul className="picture-gallery__thumbnails-items" style={{ transform: getThumbnailsTransform() }}>
                {props.pictures.map((picture, index) => {
                    let thumbnailItemClass = 'picture-gallery__thumbnails-item';
                    if (props.currentPictureIndex === index) {
                        thumbnailItemClass += ' picture-gallery__thumbnails-item--current';
                    }
                    return (
                        <li className={thumbnailItemClass} onClick={() => handleThumbnailClick(index)}>
                            <img className="picture-gallery__thumbnail" src={picture}/>
                            <div className="picture-gallery__thumbnail-overlay"/>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default PictureGalleryThumbnails;
