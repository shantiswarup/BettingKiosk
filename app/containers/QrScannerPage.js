// @flow
import React, { Component } from 'react';
import QrScanner from '../components/QrScanner';

type Props = {};

export default class QrScannerPage extends Component<Props> {
  props: Props;

  render() {
    return <QrScanner />;
  }
}
