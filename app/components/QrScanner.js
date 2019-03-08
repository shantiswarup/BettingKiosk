import React, { Component } from 'react';
import QrReader from 'react-qr-reader';
import styles from './Home.css';
class QrScanner extends Component {
  state = {
    result: 'No result'
  };

  handleScan = data => {
    if (data) {
      this.setState({
        result: data
      });
    }
  };

  handleError = err => {
    console.error(err);
  };

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default QrScanner;
