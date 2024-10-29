import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import {updateLoggedInUserFollowing,updateFollowedUserFollowers} from '../../services/firebase';

const SuggestedProfile = ({spDocId,username,profileId,userId,loggedInDocId}) => {
 const [followed,setFollowed] = useState(false);

async function handleFollowUser() {
  setFollowed(true);
  await updateLoggedInUserFollowing(loggedInDocId,profileId);
  await updateFollowedUserFollowers(spDocId,userId);
}
  return !followed ?(
    <div className='flex flex-row items-center justify-between'>
      <div className='flex items-center justify-between'>
        <img className='rounded-full w-8 flex mr-3' src={`./images/avatars/${username}.jpg`}
        alt={username} />
         <Link to={`/p/${username}`}>
        <p className='font-bold text-sm'>{username}</p>
        </Link>
        </div> 
        <button className='text-sm font-bold text-blue-medium' type='button' onClick={()=> handleFollowUser}>Follow</button>

    </div>
     ): null;  
};

export default SuggestedProfile;
SuggestedProfile.propTypes = {
  spDocId: PropTypes.string,
  username: PropTypes.string,
  profileId: PropTypes.string,
  userId: PropTypes.string,
  loggedInDocId:PropTypes.string,
}