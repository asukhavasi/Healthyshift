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
            {/* <hr /> */}
            <div className="form">
              <form >
                {/* <label className='name form' for="firstName">FirstName: </label> */}
                <input type="text" className='frm' placeholder='First Name....'/> 
                <br />
                
                {/* <label className='name form' for="lastName">LastName: </label> */}
                <input type="text" className='frm' placeholder='Last Name....'/>
                <br />
                {/* <label for="emailId">Email: </label> */}
                <input type="email" className='frm' placeholder='Email Address....' />
                <br />
                {/* <label for="description">Description:</label> <br /> */}
                <textarea className='frm' cols='50' placeholder='Description....'></textarea> 
                <br />
                <div className="submit-wrap">
                  <button  type='submit' className='sub-btn'>Submit</button>
                </div>

              </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default BannerThree