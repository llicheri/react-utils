# react-utils

> my own react utils library

[![NPM](https://img.shields.io/npm/v/react-utils.svg)](https://www.npmjs.com/package/react-utils) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-utils-llicheri
```

## Usage

```jsx
import React, { Component } from "react";

import { Aux, Firebase, FirebaseContext } from "react-utils";

class Example extends Component {
  render() {
    return <Aux>...Everithing</Aux>;
  }
}

export default withFirebase(Example);

// into the index.js
config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
app = (
  <FirebaseContext.Provider value={new Firebase(config)}>
    <App />
  </FirebaseContext.Provider>
);

//
```

## License

MIT © [Lorenzo Licheri](https://github.com/llicheri)
