import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import AdminPanel from "./components/AdminPanel";
import Detail from "./components/Details";
import ShoppingCart from "./components/ShoppingCart";
import Review from "./components/Review";
import EditProfile from "./components/Profile/editContainer";
import "@fontsource/montserrat";
import { Checkout } from "./components/Checkout";
import { FeedBack } from "./components/FeedBack";
import { Favoritos } from "./components/Favoritos";
import Offers from "./components/Off/Offers";
import ResetPassword from "./components/Auth/ResetPassword";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" exact element={<Landing />} /> */}
        <Route path="/" exact element={<Home />} />
        <Route path="/cart" exact element={<ShoppingCart />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/login/reset" exact element={<ResetPassword />} />
        <Route path="/admin" exact element={<AdminPanel />} />
        <Route path="/profile" exact element={<Profile />} />
        <Route path="/profile/edit" exact element={<EditProfile />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/bebida/:id" exact element={<Detail />} />
        <Route path="/offers" exact element={<Offers />} />
        <Route path="/checkout" exact element={<Checkout />} />
        <Route path="/feedback" exact element={<FeedBack />} />
        <Route path="/review/:id" exact element={<Review />} />
        <Route path="/review" exact element={<Review />} />
        <Route path="/favoritos/:id_user" exact element={<Favoritos />} />
      </Routes>
    </div>
  );
}

// base 64 como codificar y decodificar
export default App;
