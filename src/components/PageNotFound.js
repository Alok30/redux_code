import React from 'react';

export default function PageNotFound( props ) {
    return (
        <div className="alert alert-danger">
            <h1>Something went wrong</h1>
            <hr />
            <p>
                The page you are looking for does not exist
            </p>
        </div>
    )
}