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

export async function updateLoggedInUserFollowing(
  loggedInUserDocId, // currently logged in user document id (sameer profile)
  profileId, // the user that sameer request to follow
  isFollowingProfile // true/false (am i currently follwing this person?)
) {
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
  profileDocId, // currently logged in user document id (sameer profile)
  loggedInUserDocId, // the user that sameer request to follow
  isFollowingProfile // true/false (am i currently follwing this person?)
) {
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