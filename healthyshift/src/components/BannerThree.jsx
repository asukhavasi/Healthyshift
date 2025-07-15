import React from 'react'

const BannerThree = () => {
  return (
    <>
    <div className="banner3">
        <div className="Healthfood">
            <h2>Healthy Food Recipies</h2>
            <h3>Breakfast/Lunch/Dinner</h3>
        </div>
        <div className="Calendar">
            <h2>Book 20min consultation</h2>
        </div>
        <div className="contactform">
            <h2>Contact Form:</h2>
            <label for="firstName">FirstName: </label>
            <input type="text" className='firstName' placeholder='enter your First Name'/> 
            
            
            <label for="lastName">LastName: </label>
            <input type="text" className='lasttName' placeholder='enter your Last Name'/>
            <br />
            <label for="emailId">Email: </label>
            <input type="email" id='emailId' placeholder='Email Address...' />

            
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor provident consequatur quam? Modi doloribus odit similique repellendus corrupti obcaecati fuga adipisci officiis, dolorum expedita, sunt nulla magni earum! Itaque, iure?</p>
            <button type='submit'>Submit</button>
        </div>
    </div>
    </>
  )
}

export default BannerThree