import React from "react";
import PropTypes from 'prop-types';
import ImageGalleryItem from "components/ImageGalleryItem";
// import { BallTriangle } from "react-loader-spinner";
import "./ImageGallery.css";

const ImageGallery = ({images, onClick }) =>(            
                <ul className="ImageGallery">                
                    {images.map(image => (
                        <ImageGalleryItem key={image.id} item={image} onClick={onClick} />
                    ))}                   
                </ul>)
        

export default ImageGallery;

ImageGallery.propTypes = {
    // status: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,

}

