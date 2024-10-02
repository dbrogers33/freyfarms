// src/components/MasonryGallery.js
import React, { useState } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Masonry from 'react-masonry-css';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const MasonryGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <StaticQuery
      query={graphql`
        query {
          allFile(filter: { relativeDirectory: { eq: "heirloom_gallery" } }) {
            nodes {
              id
              name
              childImageSharp {
                gatsbyImageData(width: 600, quality: 90)
              }
            }
          }
        }
      `}
      render={data => {
        const images = data.allFile.nodes;

        const openLightbox = (index) => {
          setCurrentImage(index);
          setIsOpen(true);
        };

        const closeLightbox = () => {
          setIsOpen(false);
        };

        const nextImage = () => {
          setCurrentImage((prev) => (prev + 1) % images.length);
        };

        const prevImage = () => {
          setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
        };

        return (
          <div>
            <Masonry
              breakpointCols={{ default: 3, 1100: 2, 700: 1 }}
              className="masonry-grid"
              columnClassName="masonry-grid_column"
            >
              {images.map((image, index) => {
                const img = getImage(image);
                return (
                  <div key={image.id} onClick={() => openLightbox(index)}>
                    <GatsbyImage image={img} alt={image.name} />
                  </div>
                );
              })}
            </Masonry>

            {isOpen && (
              <Lightbox
                mainSrc={getImage(images[currentImage]).images.fallback.src}
                nextSrc={getImage(images[(currentImage + 1) % images.length]).images.fallback.src}
                prevSrc={getImage(images[(currentImage - 1 + images.length) % images.length]).images.fallback.src}
                onCloseRequest={closeLightbox}
                onMovePrevRequest={prevImage}
                onMoveNextRequest={nextImage}
              />
            )}
          </div>
        );
      }}
    />
  );
};

export default MasonryGallery;
