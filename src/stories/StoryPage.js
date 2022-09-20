import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from 'layouts/WrappedComponent';

import 'static/styles/index.css';
import './style.scss';

const StoryPage = ({ Component, hideHeader, operator }) => (
      <Router>
        <Layout hideHeader={hideHeader} Component={Component} operator={operator} />
      </Router>
);
 
export default StoryPage;
