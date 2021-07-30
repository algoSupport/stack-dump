import React from 'react';

function FieldError(props) {
    return (
        <div className='field-error'>
            {props.children}
        </div>
    );
}

export default FieldError;