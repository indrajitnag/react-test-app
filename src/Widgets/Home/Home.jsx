import React from 'react';

import axios from 'axios';
import { useEffect, useState } from 'react/cjs/react.development';

const Home = () => {
    const [apiRecord, setAPIRecord] = useState(null);

    const callAPI = () => {
        axios.get('https://jsonplaceholder.typicode.com/photos').then((res) => {
            setAPIRecord(res);
            console.log('apiRecord', res[0]);
        }).catch((err) => {
            console.log(err);
        })
    }
    useEffect(() => {
        callAPI();
    }, [])
    return (
        <div>

        </div>
    );
};

export default Home;