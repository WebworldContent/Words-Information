import React from "react";
import useSWR from 'swr';
import './Quotes.css';

const fetcher = url => fetch(url).then(res => res.json());

export default function Quotes() {

    const {data, error, isLoading} = useSWR(`https://words-information.vercel.app/api/quotes`, fetcher); 

    if (error) return <div>failed to load</div>

    if (isLoading) return <div>loading...</div>

    return (
        data && (
            <div className="quote-card">
                <div className="card-content">
                    <h2>{data.data}</h2>
                </div>
            </div>
        )
    );
};
