import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => { //Open Subscription hỗ trợ kết nối giữa Firebase và ứng dụng
      this.setState({ currentUser: user }); //Mỗi khi có sự thay đổi về user (đăng nhập mới, log out), firebase sẽ cập nhật và trả về user
      console.log(user);
    });
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth(); //Close Subscription khi unmount để không bị tràn dữ liệu
  }

  render() {
    return (
      <BrowserRouter>
        <Header currentUser={this.state.currentUser}/>
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
