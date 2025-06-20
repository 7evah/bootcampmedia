import React from 'react';

const Contact = () => (
  <section className="bg-light py-5">
    <div className="container">
      <h3 className="text-center fw-bold mb-4">Contact us</h3>
      <p>Contact us and we will get back to you within 24 hours.</p>
      <p><i className="fas fa-map-marker-alt"></i> Company Name</p>
      <p><i className="fas fa-phone"></i> +256 778 800 900</p>
      <p><i className="fas fa-envelope"></i> company.gmail.com</p>

      <form>
        <div className="mb-3">
          <label>Contact</label>
          <input type="email" className="form-control" placeholder="email address" />
        </div>
        <div className="mb-3">
          <textarea className="form-control" rows="4" placeholder="comment"></textarea>
        </div>
        <button className="btn btn-danger w-100">Send</button>
      </form>
    </div>
  </section>
);

export default Contact;
