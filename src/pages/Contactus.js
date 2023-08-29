
import './Contactus.css'
function Details()
{
  return(
    <form action="https://formsubmit.co/71fae55d86b08ed185878a169eabd5d1 " method="POST" > 
  <div className="Details">
  <h1>Contact Me</h1>
    <h3>Name:</h3>
    <input type="text" name="Name" className="name" placeholder="Name"/>
    <h3>Message for me:</h3>
    <textarea className="message" name="message" placeholder="message"></textarea>
    <br/>
    <div>
    <button type ="submit" className="button">Submit</button>
    
    </div>
  </div>
  </form>
  )
}

function Contact()
{
  return(
    <div>
        <br/>
      <Details/>
    </div>
  )
}

export default Contact