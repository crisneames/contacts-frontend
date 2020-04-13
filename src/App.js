import React from 'react';
import Contacts from './components/Contacts'
import Header from './components/Header';
import Footer from './components/Footer'
import './App.css';


class App extends React.Component {
      constructor(props) {
        super(props)
        this.state = {
          searchText: ''
        }
          }

  render() {
    return (
    <>
    <Header onSearch={text => this.setState({searchText: text })} />
    <Contacts searchText={this.state.searchText}/>
    {/* <Footer /> */ }
    </>
)
  }
}

export default App;
