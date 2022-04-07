import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ListItem from './List/ListItem'
import List from './List/List'
import Header from './components/Header';
import Footer from './components/Footer';


ReactDOM.render(
  <div className="app">
    <Header/>
    <div className="app-body">
        
    </div>
    <div className="app-footer">
      <List></List>
    </div>
    <Footer></Footer>

  </div>,
  document.getElementById('root')
);

