// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';

const img = require('../KioskId.svg');

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <div>
          <img src={img} alt="kiosk_id" />
        </div>
        <div>
          <Link to={routes.QRSCANNER}>Start</Link>
        </div>
      </div>
    );
  }
}
