import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/Private/PrivateRoute';
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
              <PrivateRoute path="/places">
                <Places />
              </PrivateRoute>
              <PrivateRoute path="/users">
                <Users />
              </PrivateRoute>
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
