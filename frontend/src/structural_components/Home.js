import React from "react";
import Button from "react-bootstrap/Button";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <h1>Hello, World!</h1>
      <Button variant="primary">Click Me!</Button>
    </div>
  );
};

export default Home;
