import React,{useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import Skeleton from 'react-loading-skeleton';
import {getSuggestedProfiles} from "../../services/firebase";

const Suggestions = ({userId, following}) => {
  const [profiles,setProfiles] = useState(null)
  
  useEffect(()=>{
    async function suggestedProfiles(){
      const response = await getSuggestedProfiles(userId,following);
      setProfiles(response);
    }
    if(userId){
      suggestedProfiles();
    }
    console.log('userId',userId);
    console.log("profiles",profiles);
    },[userId]);
  
  return !profiles ? (
    <Skeleton count={1} height={150}/>
    ) : profiles.length>0 ? (
<div className="rounded flex flex-col">
  <div className="text-sm flex items-center justify-between align-items">
    <p className="font-bold text-gray-base">Suggestions for you</p>
  </div>
</div>
    ) : null;
};

export default Suggestions
Suggestions.propTypes={
  userId:PropTypes.string,
  following:PropTypes.array,

};