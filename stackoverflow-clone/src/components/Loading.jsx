import React from 'react';

function Loading(props) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <img src="http://localhost:3000/images/loading.svg" />
        </div>
    );
}

export default Loading;