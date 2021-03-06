import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

const CloudItem = ({
  id,
  source,
  thumbnail,
  caption,
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
    <article key={id} className="2u 12u$(xsmall) work-item">
      <img src={thumbnail} alt="None" />
      <h4>{caption}</h4>
    </article>
  )
}

CloudItem.displayName = 'CloudItem'
CloudItem.propTypes = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  toggleLightbox: PropTypes.func.isRequired,
}

export default CloudItem
