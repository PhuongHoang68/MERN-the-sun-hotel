import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import Header from './components/Header';
import Footer from './components/Footer';
import Dining from './pages/Dining';
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import Room from "./pages/Room";
import Error from "./pages/Error";

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home/>}
            />
          <Route
            path="/rooms"
            element={<Room/>}
            />
          <Route
            path="/dining"
            element={<Dining/>}
            />
          <Route
            path="/reservations"
            element={<Reservation/>}
            />
          <Route 
            path="*" 
            element={<Error/>} 
              />
        </Routes>
      </Router>
    </ApolloProvider>
    
  );
}

export default App;
