var config = {
    apiKey: "AIzaSyCIwV0SBYh_MLnbAHoZHCU_Q2ljldT6k54",
    authDomain: "crime-detection-map.firebaseapp.com",
    databaseURL: "https://crime-detection-map.firebaseio.com",
    projectId: "crime-detection-map",
    storageBucket: "crime-detection-map.appspot.com",
    messagingSenderId: "801533488001",
    appId: "1:801533488001:web:300337a631bb24ff55d680",
    measurementId: "G-P5340X758Z"
};
firebase.initializeApp(config);
const firestore = firebase.firestore();

const docRef = firestore.doc("users/sos_data");
const first_name = document.querySelector("#input-1")
const last_name = document.querySelector("#input-2")
const emergency_1 = document.querySelector("#input-3")
const emergency_2 = document.querySelector("#input-4")
const address = document.querySelector("#input-5")
const saveButton = document.querySelector("#send-button")

saveButton.addEventListener("click", function () {
    console.log();
    docRef.set({
        firstName: first_name.value,
        lastName: last_name.value,
        emergency1: emergency_1,
        emergency2: emergency_2,
        userAddress: address.value
    }).then(function () {
        console.log("status saved")
    }).catch(function (error) {
        console.log("Error: ", error);
    })
})


