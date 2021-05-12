import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//Lấy tại trang firebase
const config = {
  apiKey: "AIzaSyDxztmFp8n-RFHeDEptXAeDuEMREZJnKhc",
  authDomain: "crwn-db-dc165.firebaseapp.com",
  projectId: "crwn-db-dc165",
  storageBucket: "crwn-db-dc165.appspot.com",
  messagingSenderId: "676925477227",
  appId: "1:676925477227:web:fabdb100944f5bb852fc2e",
  measurementId: "G-08HZH2HLFL",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); //Cho phép truy cập vào Google auth provider class từ thư viện authentication

provider.setCustomParameters({ prompt: "select_account" }); //Luôn luôn trigger Google Popup bất cứ khi nào sử dụng GoogleAuthProvider
export const signInWithGoogle = () => auth.signInWithPopup(provider); //Cho biết rằng muốn popup đăng nhập với Google

export default firebase;
