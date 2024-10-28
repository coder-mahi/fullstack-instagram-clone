// src/seed.js

export function seedDatabase(firebase) {
  const users = [
    {
      userId: "sXmseMe7o1f4mLyc6mVCqxLD9QJ2",  // Your Firebase Auth user ID
      username: "mahesh",
      fullName: "Mahesh Shinde",
      emailAddress: "mshinde1297@gmail.com",
      following: ["2"],
      followers: ["2", "3", "4"],
      dateCreated: Date.now(),
    },
    {
      userId: "2",
      username: "tony",
      fullName: "Tony Stark",
      emailAddress: "ironman@avengers.com",
      following: [],
      followers: ["sXmseMe7o1f4mLyc6mVCqxLD9QJ2"],
      dateCreated: Date.now(),
    },
    {
      userId: "3",
      username: "steve",
      fullName: "Steve Rogers",
      emailAddress: "captainamerica@avengers.com",
      following: [],
      followers: ["9k5RYD63e3StdrykA092FlmUqsi1"],
      dateCreated: Date.now(),
    },
    {
      userId: "4",
      username: "wanda",
      fullName: "Wanda Maximoff",
      emailAddress: "scarletwitch@avengers.com",
      following: [],
      followers: ["9k5RYD63e3StdrykA092FlmUqsi1"],
      dateCreated: Date.now(),
    },
  ];

  // Adding users to Firestore
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection("users").add(users[k]);
  }

  // Adding photos to Firestore
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection("photos")
      .add({
        photoId: i,
        userId: "2",  // Assume Tony Stark uploads these photos
        imageSrc: `/images/users/mahesh/${i}.jpg`,
        caption: "Saint George and the Dragon",
        likes: [],
        comments: [
          {
            displayName: "steve",
            comment: "Love this place, looks like my animal farm!",
          },
          {
            displayName: "mahesh",
            comment: "Would you mind if I used this picture?",
          },
        ],
        userLatitude: "40.7128°",
        userLongitude: "74.0060°",
        dateCreated: Date.now(),
      });
  }
}
