import { FieldValue, firebase } from '../lib/firebase';

export async function doesUsernameExist(username) {
  const result = await firebase.firestore().collection('users').where('username', '==', username).get();
  return result.docs.length > 0;
}


export async function getUserByUserId(userId){
  const result = await firebase.firestore().collection("users").where("userId","==",userId).get();
  const user =  result.docs.map((item)=>({
    ...item.data(),
    docId: item.id
  }))
  return user;
}

export async function getSuggestedProfiles(userId,following){
  const result = await firebase.firestore().collection("users").limit(10).get();
  const user =  result.docs.map((item)=>({
    ...item.data(),
    docId: item.id
  })).filter((profile) => profile.userId !== userId && !following.includes(profile.userId)  
);
  return user;
}
////typed
// export async function updateLoggedInUserFollowing(
//   loggedInUserDocId,
//   profileId, 
//   isFollowingProfile 
// ) {
//   console.log("Updating following for doc:", loggedInUserDocId, "with profileId:", profileId);
//   return firebase
//     .firestore()
//     .collection("users")
//     .doc(loggedInUserDocId)
//     .update({
//       following: isFollowingProfile
//         ? FieldValue.arrayRemove(profileId)
//         : FieldValue.arrayUnion(profileId),
//     });
// }

//gpt working
export async function updateLoggedInUserFollowing(loggedInUserDocId, profileId, isFollowingProfile) {
  if (!loggedInUserDocId) {
    console.error("No document ID for logged-in user. Cannot update following list.");
    return;
  }
  return firebase
    .firestore()
    .collection("users")
    .doc(loggedInUserDocId)
    .update({
      following: isFollowingProfile
        ? FieldValue.arrayRemove(profileId)
        : FieldValue.arrayUnion(profileId),
    });
}


export async function updateFollowedUserFollowers(
  profileDocId, 
  loggedInUserDocId, 
  isFollowingProfile
) {
  console.log("Updating followers for doc:", profileDocId, "with userId:", loggedInUserDocId);
  return firebase
    .firestore()
    .collection("users")
    .doc(profileDocId)
    .update({
      followers: isFollowingProfile
        ? FieldValue.arrayRemove(loggedInUserDocId)
        : FieldValue.arrayUnion(loggedInUserDocId),
    });

}