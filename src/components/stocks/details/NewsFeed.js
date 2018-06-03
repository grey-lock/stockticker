import React from 'react'
import moment from 'moment'

const NewsFeed = ({ article }) => {
  const { url, headline, source, datetime, source } = article
  let timeFromNow = moment(datetime).fromNow()

  return (
    <article className='news-item'>
      <a className='headline' href={url}>{headline} <span className='date'>{timeFromNow}</span></a>
      <h3 className='source'>Source: {source}</h3>
      <p className='summary'>{summary}</p>
    </article>

  )
}

export default NewsFeed