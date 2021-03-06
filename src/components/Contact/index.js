import React, { useState } from 'react';



function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

 
  const { name, email, message } = formState;

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formState);
  };

  function handleChange(e){
    setFormState({...formState, [e.target.name]: e.target.value})
    }
 
  

  return (
    <section>
      <h1 id='contact' data-testid="h1tag">Contact me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} />
        </div>
        <button className="submit" data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
