import React from "react";

const Contact = () => {
  return (
    <div>
      <main id="contact">
        <h1 className="lg-heading">
          Contact <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">This is how you can reach me...</h2>
        <div className="boxes">
          <div>
            <span className="text-secondary">Email: </span> luiscerv1229@gmail.com
          </div>
          <div>
            <span className="text-secondary">Phone: </span> 510-334-6207
          </div>
          <div>
            <span className="text-secondary">Address: </span> 7372 Timm rd,
            Vacaville Ca 95688
          </div>
        </div>
      </main>

      <footer id="main-footer">Copyright &copy; 2020</footer>
    </div>
  );
};

export default Contact;
