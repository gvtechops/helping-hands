import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <div >
      <Helmet>
        <title>Helping Hands</title>
        <meta
          name="description"
          content="Get in contact with Helping Hands. We would love to hear from you!"
        />
        <meta
          name="keywords"
          content="contact, email, Helping Hands"
        />
      </Helmet>
      <h1 className="title">Contact Us</h1>
      <div className="contact-desc">
      <p>
        If you have any questions regarding resources, connections, or more,
        send us an email.
      </p>
      <p>
        <b>We would love to hear from you and connect</b>
      </p>
      <p>
        After filling out all fields, press &quot;Submit&quot; at the bottom of
        the form.
      </p>
      </div>
      <br />
      <ContactForm />
    </div>
  );
}
