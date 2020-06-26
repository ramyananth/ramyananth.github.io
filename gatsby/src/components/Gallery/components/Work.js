import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import Carousel, { Modal, ModalGateway } from 'react-images'
import WorkItem from './WorkItem'
import { DEFAULT_IMAGES } from '../constants/workImages'

const Work = ({ images = DEFAULT_IMAGES }) => {
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
              <WorkItem
                id={obj.id}
                source={obj.source}
                thumbnail={obj.thumbnail}
                company={obj.company}
                location={obj.location}
                title={obj.title}
                years={obj.years}
                description={obj.description}
                exposure={obj.exposure}
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

Work.displayName = 'Work'
Work.propTypes = {
  images: PropTypes.array,
}

export default Work
