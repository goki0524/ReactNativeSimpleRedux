import React, { Component }  from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { store } from './redux'
import Home from './home'

export default class App extends Component {
  render(){
    return (
      <Provider store={store}>
       <Home />
      </Provider>
    )
  }
}


// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

