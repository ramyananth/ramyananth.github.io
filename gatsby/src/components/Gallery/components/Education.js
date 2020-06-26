import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Carousel, { Modal, ModalGateway } from 'react-images'
import EducationItem from './EducationItem'
import { DEFAULT_IMAGES } from '../constants/educationImages'

const Education = ({ images = DEFAULT_IMAGES }) => {
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const toggleLightbox = useCallback(
    (selectedIndex) => {
      setLightboxIsOpen(!lightboxIsOpen)
      setSelectedIndex(selectedIndex)
    },
    [lightboxIsOpen]
  )

  return (
    <div>
      {images && (
        <div className="row">
          {images.map((obj, i) => {
            return (
              <EducationItem
                id={obj.id}
                source={obj.source}
                thumbnail={obj.thumbnail}
                degree={obj.degree}
                caption={obj.caption}
                location={obj.location}
                graduated={obj.graduated}
                description={obj.description}
                position={obj.position}
                toggleLightbox={obj.toggleLightbox}
                position={i}
                toggleLightbox={toggleLightbox}
              />
            )
          })}
        </div>
      )}
      <ModalGateway>
        {lightboxIsOpen && (
          <Modal onClose={toggleLightbox}>
            <Carousel currentIndex={selectedIndex} views={images} />
          </Modal>
        )}
      </ModalGateway>
    </div>
  )
}

Education.displayName = 'Education'
Education.propTypes = {
  images: PropTypes.array,
}

export default Education
