import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './ErrorBoundary';
import PostList from './ex2/PostList';
import Example1 from './ex3/components/Example1';
import Example2 from './ex3/components/Example2';
import Example3 from './ex3/components/Example3';

const HomeScreen = () => <h1>Welcome to Home</h1>;
const ProfileScreen = () => <h1>User Profile</h1>;
const ShopScreen = () => {
  throw new Error("Shop crashed!");
};

function App() {
  const webhookUrl = "https://webhook.site/4c85f5d3-58e1-4841-9f52-5844dff2bada"; 

  const postData = async () => {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          key1: "7eva",
          email: "7eva@gmail.com",
          name: "mizo",
          lastname: "el",
          age: 24,
        }),
      });

      const result = await response.text(); 
      console.log("Response from Webhook:", result);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark px-3">
          <NavLink className="navbar-brand" to="/">ReactApp</NavLink>
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/profile">Profile</NavLink>
            <NavLink className="nav-link" to="/shop">Shop</NavLink>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route
              path="/"
              element={
                <ErrorBoundary>
                  <HomeScreen />
                </ErrorBoundary>
              }
            />
            <Route
              path="/profile"
              element={
                <ErrorBoundary>
                  <ProfileScreen />
                </ErrorBoundary>
              }
            />
            <Route
              path="/shop"
              element={
                <ErrorBoundary>
                  <ShopScreen />
                </ErrorBoundary>
              }
            />
          </Routes>
        </div>
          <div>
      <PostList />
    </div>
     <div className="App" style={{ padding: '20px' }}>
      <h1>Display Complex JSON Data</h1>
      <Example1 />
      <Example2 />
      <Example3 />
    </div>
     <div style={{ padding: "30px" }}>
      <h1>React POST to Webhook</h1>
      <button onClick={postData}>Send Data</button>
    </div>
      </div>
    </BrowserRouter>

    
  );
}

export default App;
