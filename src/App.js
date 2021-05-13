import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, creatUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => { //Open Subscription hỗ trợ kết nối giữa Firebase và ứng dụng
      if (userAuth) { //Kiểm tra account người dùng đăng nhập có tồn tại trên server chưa
        const userRef = await creatUserProfileDocument(userAuth); //Lây document về người dùng từ userAuth gán cho userRef, nếu document chưa tồn tại trên server sẽ tạo object và document mới

        userRef.onSnapshot((snapShot) => { //Theo dõi userRef xem có cập nhật data không, đồng thời lấy state đầu tiên của data đó
          this.setState( //truyền data của user đc lấy từ snapShot vào state
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            },
            () => {
              console.log(this.state);
            }
          );
        });
      } else {
        this.setState({ currentUser: userAuth }); //user logout thì currentUser sẽ là null
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth(); //Close Subscription khi unmount để không bị tràn dữ liệu
  }

  render() {
    return (
      <BrowserRouter>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
