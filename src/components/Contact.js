import React, { useEffect } from "react";

function Contact() {
  useEffect(() => {
    console.log("hii");
  }, []);

  console.log("hello");

  return <h1>Contact Us</h1>;
}

export default Contact;
