import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import CarsList from './components/CarsList';
import {requiresAuth} from './components/HOC/auth.hoc';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route path='/cars' component={requiresAuth(CarsList)} />
  </Layout>
);
