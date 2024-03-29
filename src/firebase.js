import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
	authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
	projectId: "disneyplus-clone-a33d5",
	storageBucket: "disneyplus-clone-a33d5.appspot.com",
	messagingSenderId: "37918794208",
	appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
	measurementId: "G-DRVLJKWRWG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); //Actual Database
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider(); //Google Authentication
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

//Project Console: https://console.firebase.google.com/project/disney-plus-clone-4fa0c/overview
//Hosting URL: https://disney-plus-clone-4fa0c.web.app
