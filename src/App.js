import React from 'react'
import './App.css'
import { Provider } from 'react-redux'
import Header from './components/Header'
import ImageGrid from './components/ImageGrid'
import configureStore from './store'
const store = configureStore()

const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <ImageGrid />
        </Provider>
    );
}

export default App;
