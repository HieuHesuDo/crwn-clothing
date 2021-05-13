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

export const creatUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; //Nếu userAuth không tồn tại thì thoát khỏi chức năng

  //Nếu như userAuth có tồn tại thì truy vấn vào fitrstore để lấy document để xem user đó có tồn tại trong database hay không
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  
  if(!snapShot.exists){ //Kiểm tra nếu không tồn tại Snapshot 
    const {displayName, email} = userAuth;
    const creatAt = new Date();

    try { //Tạo user mới dựa trên data từ userAuth snapshot
      await userRef.set({
        displayName, email, creatAt, ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message) //Nếu có lỗi xảy ra thì thông báo 
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); //Cho phép truy cập vào Google auth provider class từ thư viện authentication

provider.setCustomParameters({ prompt: "select_account" }); //Luôn luôn trigger Google Popup bất cứ khi nào sử dụng GoogleAuthProvider
export const signInWithGoogle = () => auth.signInWithPopup(provider); //Cho biết rằng muốn popup đăng nhập với Google

export default firebase;
