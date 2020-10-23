import React, { useState } from 'react';



const Contact = () => {
  const [currData,setData] = useState({
    fullName : '',
    email : '',
    phone : '',
    message : ''
  });

  const InputEvent = (e) => {
       const {name,value} = e.target;

       setData((preVal) => {
         return {
           ...preVal,
           [name] : value,
         };
       });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for Contacting !!");
  }
  return (
    <div>
      <div className="my-5">
        <h1 className='text-center'>
          Contact Us
           </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="exampleFormControlInput1">FullName</label>
                <input type="text" className="form-control mt-1" id="exampleFormControlInput1"
                name = 'fullName'
                value = {currData.fullName}
                onChange = {InputEvent}
                placeholder="Enter your name" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="exampleFormControlInput1">Phone number</label>
                <input type="number" className="form-control mt-1" id="exampleFormControlInput1"
                 name = 'phone'
                 value = {currData.phone}
                 onChange = {InputEvent}
                placeholder="number" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="exampleFormControlInput1">Email address</label>
                <input type="email" className="form-control mt-1" id="exampleFormControlInput1"
                 name = 'email'
                 value = {currData.email}
                 onChange = {InputEvent}
                placeholder="name@example.com" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control mt-1" id="exampleFormControlTextarea1"
                 name = 'message'
                 value = {currData.message}
                 onChange = {InputEvent}
                rows="3"></textarea>
              </div>
              <div className="col-12">
                <button class="btn btn-outline-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Contact;