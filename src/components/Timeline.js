import React from 'react'
import Skeleton from 'react-loading-skeleton';
import usePhotos from '../hooks/use-photos';

const Timeline = () => {
  const { photos } = usePhotos();

  return (
  <div className='container col-span-2'>
      {!photos ? (
        <Skeleton count={4} width={640} height={500} className='mb-5'/>
      ): photos?.length>0 ?(
        photos.map((content)=> <p key={content.docId}>{content.imageSrc}</p>)
      ): (
        <p className='text-center text-2xl'>
          Follow people to see the photos
        </p>
      )}
    </div>
      );
};

export default Timeline;