import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

const WorkItem = ({
  id,
  source,
  thumbnail,
  company,
  location,
  title,
  years,
  description,
  exposure,
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
      <h2>{title}</h2>{' '}
      <h4>
        {company}, {location}{' '}
      </h4>
      <h4>({years})</h4>
      <h5>{description}</h5>
      <h5>
        <u>Exposure:</u> {exposure}
      </h5>
    </article>
  )
}

WorkItem.displayName = 'WorkItem'
WorkItem.propTypes = {
  id: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  years: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  toggleLightbox: PropTypes.func.isRequired,
}

export default WorkItem
