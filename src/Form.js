import React, { useState } from 'react'




const Form = (props) => {
    const [member, setMember] = useState

    const handleChange = event => {
        setMember(event.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(member);
    };

    return (
        <form onSubmit={event => handleSubmit(event)}>
            <label>
                Team Member:
          <input type="text" onChange={event => handleChange(event)} />
            </label>
            <button>Submit!</button>
        </form>
    )
}