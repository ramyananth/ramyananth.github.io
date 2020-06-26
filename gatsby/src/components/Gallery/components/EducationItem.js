import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

const EducationItem = ({
  id,
  source,
  thumbnail,
  degree,
  caption,
  location,
  graduated,
  description,
  position,
  toggleLightbox,
}) => {
  const onClick = useCallback(
    (e) => {
      e.preventDefault()
      toggleLightbox(position)
    },
    [position, toggleLightbox]
  )

  return (
    <article key={id} className="6u 12u$(xsmall) work-item">
      <a className="image fit thumb" href={source} onClick={onClick}>
        <img src={thumbnail} alt="None" />
      </a>
      <h2>{degree}</h2>{' '}
      <h4>
        {caption}, {location}
      </h4>{' '}
      <h5>{description}</h5>
    </article>
  )
}

EducationItem.displayName = 'EducationItem'
EducationItem.propTypes = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  graduated: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  toggleLightbox: PropTypes.func.isRequired,
}

export default EducationItem
