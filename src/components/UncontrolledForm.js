import React, { useRef } from 'react';

const UncontrolledForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Reset form values
    nameRef.current.value = '';
    emailRef.current.value = '';
    messageRef.current.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1>Uncontrolled Components Example</h1>
        
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" ref={emailRef} />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" ref={messageRef}></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UncontrolledForm;
