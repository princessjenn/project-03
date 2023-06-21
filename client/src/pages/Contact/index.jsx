import React, { useState } from "react";

export default function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Process the form data
    // For example, you can send the data to an API or perform other operations

    // Reset the form fields
    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setMessage("");
  };

  return (
    <div className="hero min-h-screen bg-base-200 rounded-3xl">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl text-error font-bold">
            The Fade Brigade shop <br></br>wants to hear from you!
          </h1>
          <br></br>
          <h1 className="text-2xl font-bold text-primary">
            42 Wallaby Way, Suite 100
            <br />
            Dallas, TX 12345
          </h1>
          <br></br>
          <h1 className="text-2xl font-bold text-primary">
            (555) 123-CUTZ (2889)
          </h1>
          <br></br>
          <h1 className="text-2xl font-bold text-primary">
            grooming@TheFadeBrigade.com
          </h1>
          <br></br>
          <p className="py-6 text-success font-bold">Hours of Operation:</p>
          <p className="py-0 text-success">
            Monday | 9AM - 9PM<br></br>
            Tuesday | 1PM - 9PM<br></br>
            Wednesday | 9AM - 9PM<br></br>
            Thursday | 9AM - 9PM<br></br>
            Friday | 9AM - 9PM<br></br>
            Saturday | 9AM - 6PM<br></br>
            Sunday | CLOSED<br></br>
          </p>
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-1xl mb-4">
              Please submit this form below to leave us a message!
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="text"
                  placeholder=""
                  className="input input-bordered"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  placeholder=""
                  className="textarea textarea-bordered"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
