import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
      <div>
        <h1 className="title">Contact Us</h1>
        <p>
            If you have any questions regarding resources, connections, or more,
            send us an email.
          </p>
          <p>
            <b>We would love to hear from you and connect</b>
          </p>
          <p>
            After filling out all fields, press &quot;Submit&quot; at the bottom
            of the form.
          </p>
          <br />
          <ContactForm />

      </div>
  );
}
