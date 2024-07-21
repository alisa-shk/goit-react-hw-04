const ImageCard = ({ image, onImageClick }) => {
    return (
        <div>
            <img
                src={image.urls.small}
                alt={image.description}
                onClick={() => onImageClick(image)}
            />
        </div>
    )
};

export default ImageCard;