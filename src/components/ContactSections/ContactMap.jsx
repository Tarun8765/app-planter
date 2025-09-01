function ContactMap() {
  return (
    <section className="map_section border-0 m-2">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d535.3977244082184!2d77.39122427862985!3d28.575025509204107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef68c2f1ecdb%3A0x224105fe11cb26c9!2sCs1%20Tower!5e0!3m2!1sen!2sin!4v1756638375617!5m2!1sen!2sin"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen="full"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

export default ContactMap;
