import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, creatUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.action";

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //Open Subscription hỗ trợ kết nối giữa Firebase và ứng dụng
      if (userAuth) {
        //Kiểm tra account người dùng đăng nhập có tồn tại trên server chưa
        const userRef = await creatUserProfileDocument(userAuth); //Lây document về người dùng từ userAuth gán cho userRef, nếu document chưa tồn tại trên server sẽ tạo object và document mới

        userRef.onSnapshot(snapShot => {
          //Theo dõi userRef xem có cập nhật data không, đồng thời lấy state đầu tiên của data đó
          setCurrentUser({
            //Mỗi khi snapShot update thì gán giá trị userReducer với object mới
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      
      setCurrentUser(userAuth); //user logout thì currentUser sẽ là null
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth(); //Close Subscription khi unmount để không bị tràn dữ liệu
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
