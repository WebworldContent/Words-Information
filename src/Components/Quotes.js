import React from "react";
import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());

export default function Quotes() {

    const {data, error, isLoading} = useSWR('http://localhost:3005/api/quotes', fetcher); 

    if (error) return <div>failed to load</div>

    if (isLoading) return <div>loading...</div>

    return (
        data && <h2>{data.data}</h2>
    );
};
