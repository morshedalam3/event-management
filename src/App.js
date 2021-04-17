import React, { createContext, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Inventory from './components/Inventory/Inventory';
import Banner from './components/Banner/Banner';
import Events from "./components/Events/Events";
import EventDetails from "./components/EventDetails/EventsDetails";
import BookArea from "./components/BookArea/BookArea";
import EventSpeaker from "./components/EventSpeaker/EventSpeaker";
import Footer from "./components/Footer/Footer";
import DashBoard from "./components/DashBoard/DashBoard";
import Admin from "./components/Inventory/Admin";
import ManageService from "./components/ManageService/ManageService";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Login from "./components/Login/Login";
import AddReview from "./components/AddReview/AddReview";
import GetReview from "./components/GetReview/GetReview";
import Header from "./components/Header/Header";
import Shipment from "./components/Shipment/Shipment";
import Contact from './components/Contact/Contact'
import FooterTop from './components/FooterTop/FooterTop'
import OrderList from "./components/OrderList/OrderList";
import UserBook from "./components/UserBook/UserBook";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";

export const UserContext = createContext();
export default function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <div className="main">
          <Switch>

            <Route exact path="/">
              <Header />
              <Banner></Banner>
              <Events />
              <BookArea />
              <EventSpeaker />
              <GetReview />
              <PhotoGallery />
              <Contact />
              <FooterTop />
              <Footer />
            </Route>
            <Route path="/event/:_id">
              <EventDetails />
            </Route>
            <PrivateRoute path="/shipment/:_id">
              <Shipment></Shipment>
            </PrivateRoute>
            <PrivateRoute path="/shipment">
              <Shipment></Shipment>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <DashBoard />
            </PrivateRoute>
            <Route path="/review">
              <AddReview></AddReview>
            </Route>
            <Route path="/orderList">
              <OrderList />
            </Route>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <Route path="/inventory">
              <Inventory />
              <Footer />
            </Route>
            <Route path="/userBookList">
              <UserBook />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/manageService">
              <ManageService />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

