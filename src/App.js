import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AllBookings from './pages/Booking/AllBookings/AllBookings/AllBookings';
import MyBooking from './pages/Booking/MyBooking/MyBooking';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/Private/PrivateRoute';
import NotFound from './pages/NotFound/NotFound';
import AddPlace from './pages/Places/AddPlace/AddPlace';
import PlaceOrder from './pages/Places/PlaceOrder/PlaceOrder';
import Places from './pages/Places/Places/Places';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import Users from './pages/Users/Users/Users';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <main style={{ minHeight: "1200px" }}>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/places">
                <Places />
              </Route>
              <PrivateRoute path="/users">
                <Users />
              </PrivateRoute>
              <PrivateRoute path="/booking">
                <MyBooking />
              </PrivateRoute>
              <PrivateRoute path="/placeOrder/:bookingId">
                <PlaceOrder />
              </PrivateRoute>
              <PrivateRoute path="/allBooking">
                <AllBookings></AllBookings>
              </PrivateRoute>
              <Route path="/addPlace">
                <AddPlace />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </main>
          <footer>
            <Footer />
          </footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
