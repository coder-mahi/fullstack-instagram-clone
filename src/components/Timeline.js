import React from 'react'
import Skeleton from 'react-loading-skeleton';
import usePhotos from '../hooks/use-photos';

const Timeline = () => {
  const { photos } = usePhotos();
  console.log('photos',photos);
  return (
    <div className='container col-span-2'>i am Timeline</div>
  )
}

export default Timeline;