import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './App.css';
import { useSelector } from 'react-redux';

function App() {
    const theme = useSelector(selectTheme);

    return(
        <div className={theme ? styles.darkTheme : styles.lightTheme}>
            <Router>

            </Router>
        </div>
    )
}

export default App