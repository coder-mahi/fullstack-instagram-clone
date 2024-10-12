// NOTE: replace 'CrPBfLzlASf8isba1yKpDmT7Hxs1' with your Firebase auth user id (can be taken from Firebase)
export function seedDatabase(firebase) {
  const users = [
    {
      userId: "Safn0N8FpNRvUWiSsraRr1ZCcRs2",
      username: "mahesh",
      fullName: "Mahesh Shinde",
      emailAddress: "maheshshinde9100@gmail.com",
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
      followers: ["Safn0N8FpNRvUWiSsraRr1ZCcRs2"],
      dateCreated: Date.now(),
    },
    {
      userId: "3",
      username: "steve",
      fullName: "Steve Rogers",
      emailAddress: "captainamerica@avengers.com",
      following: [],
      followers: ["Safn0N8FpNRvUWiSsraRr1ZCcRs2"],
      dateCreated: Date.now(),
    },
    {
      userId: "4",
      username: "wanda",
      fullName: "Wanda Maximoff",
      emailAddress: "scarletwitch@avengers.com",
      following: [],
      followers: ["Safn0N8FpNRvUWiSsraRr1ZCcRs2"],
      dateCreated: Date.now(),
    },
  ];

  // eslint-disable-next-line prefer-const
  for (let k = 0; k < users.length; k++) {
    firebase.firestore().collection("users").add(users[k]);
  }

  // eslint-disable-next-line prefer-const
  for (let i = 1; i <= 5; ++i) {
    firebase
      .firestore()
      .collection("photos")
      .add({
        photoId: i,
        userId: "2",
        imageSrc: `/images/users/mahesh/${i}.jpg`,
        caption: "Saint George and the Dragon",
        likes: [],
        comments: [
          {
            displayName: "steve",
            comment: "Love this place, looks like my animal farm!",
          },
          {
            displayName: "tony",
            comment: "Would you mind if I used this picture?",
          },
        ],
        userLatitude: "40.7128°",
        userLongitude: "74.0060°",
        dateCreated: Date.now(),
      });
  }
}
