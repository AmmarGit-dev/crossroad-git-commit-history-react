import React from 'react';
import logo from './logo.svg';
import { getCommits } from './services/getCommits';
import { useEffect, useState } from 'react';
import './App.css';

interface commitsInterface {
    sha: string;
    authorName: string | undefined;
    message: string;
    date: string;
}


function App() {
    const [commitsData, setCommitsData] = useState([]);

    useEffect(() => {
        getCommits().then((data) => {
            // push  data to setCommitsData
            // setCommitsData([{'1': data}]);
        });
    }, [])

    return (
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.tsx</code> and save to reload.
            </p>
            </header>
        </div>
    );
}

export default App;
