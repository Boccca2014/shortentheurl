import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
    <div>
      <h1 className="text-3xl font-bold underline">Project Home</h1>
      {/* Link to List.js */}
      <Link to={'./list'}>
        <button variant="raised">
            My List
        </button>
      </Link>
    </div>
    );
  }
}
export default Home;