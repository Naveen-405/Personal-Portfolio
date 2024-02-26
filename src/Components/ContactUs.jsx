import React from 'react'

const ContactUs = () => {
    return (
        <div className='mt-5 ' id='Contactme'>
            <div className="row d-flex align-items-center justify-content-center ">
                <h1 className='fs-2 fw-bold text-center'>Contact Me</h1>
                <div className="col-md-6 mt-5 border border-3 p-5 ">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label fw-bold">Name</label>
                              <input type="text" className="form-control" id="name" />
                        </div> 
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-bold">Email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="contactNo" className="form-label fw-bold">Contact No</label>
                            <input type="tel" className="form-control" id="contactNo" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="sub" className="form-label fw-bold">Sub</label>
                            <input type="text" className="form-control" id="sub" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="purpose" className="form-label fw-bold">Purpose</label>
                            <input type="text" className="form-control" id="purpose" />
                        </div>
                        <div className='sub d-flex justify-content-center'>
                        <button type="submit" className="btn btn-light border border-dark">Submit</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs