import './Contactus.css';

function Details() {
  return (
    <form action="https://formsubmit.co/71fae55d86b08ed185878a169eabd5d1" method="POST">
      <div className="details">
        <h1>Contact Me</h1>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="Name" className="input name" placeholder="Name" required />
        
        <label htmlFor="message">Message for me:</label>
        <textarea id="message" className="input message" name="message" placeholder="Message" required></textarea>
        
        <button type="submit" className="button">Submit</button>
      </div>
    </form>
  );
}

function Contact() {
  return (
    <div className="contact-container">
      <Details />
    </div>
  );
}

export default Contact;
