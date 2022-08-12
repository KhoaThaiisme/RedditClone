import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './App.css';
import { Header } from '../features/header/header';
import { Main } from '../features/main/main';
import { useSelector } from 'react-redux';
import { selectTheme } from '../features/header/toggleTheme/toggleSlice'


function App() {
    const theme = useSelector(selectTheme);

    return(
        <div className={theme ? styles.darkTheme : styles.lightTheme}>
            <Router>
                <Header/>
                <Main/>
            </Router>
        </div>
    )
}

export default App