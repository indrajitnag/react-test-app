import React from 'react';

import ItemsCard from '../ItemsCard/ItemsCard';
import axios from 'axios';
import { useEffect, useState } from 'react/cjs/react.development';
import './Home.css';

const Home = () => {
    const [apiRecord, setAPIRecord] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [tableView, setTableView] = useState(true);

    const callAPI = () => {
        setLoading(true);
        axios.get('https://fakestoreapi.com/products').then((res) => {
            setAPIRecord(res.data);
            setLoading(false);
        }).catch((err) => {
            setLoading(false);
            setErrorMsg(err.message ? err.message : 'Oops!! Something went wrong, please try again');
        })
    }
    useEffect(() => {
        callAPI();
    }, [])
    return (
        <div className='homeWrapper'>
            {
                isLoading ?
                    <h2>Loading.....</h2>
                    :
                    apiRecord ?
                        tableView ?
                            <table id='recordTable'>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Category</th>
                                        <th>Description</th>
                                        <th>Rating</th>
                                        <th>price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        apiRecord.length > 0 ?
                                            apiRecord.map((data, index) => (
                                                <tr key={index}>
                                                    <td>{data.id}</td>
                                                    <td>
                                                        <img className='thumbnail' src={data.image} alt='img'></img>
                                                    </td>
                                                    <td>{data.title}</td>
                                                    <td>{data.category}</td>
                                                    <td>{data.description}</td>
                                                    <td>{data.rating.rate}</td>
                                                    <td>{data.price}</td>
                                                </tr>
                                            ))
                                            : null
                                    }
                                </tbody>
                            </table>
                            :
                            <ItemsCard apiRecord={apiRecord}/>
                        :
                        errorMsg ?
                            <h2>{errorMsg}</h2>
                            : null
            }
        </div>
    );
};

export default Home;