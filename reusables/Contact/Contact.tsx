import React from "react";
import styles from "./Contact.style";

const Contact = () => {
  return (
    <div style={styles.contact}>
      <div style={styles.contactTitle}>Contact Info</div>
      <div style={styles.contactItem}>
        <span style={styles.contactLabel}>Email</span>
        <span style={styles.contactValue}>geolab@geoservices.co.id</span>
      </div>
      <div style={styles.contactItem}>
        <span style={styles.contactLabel}>Alamat</span>
        <span style={styles.contactValue}>
          Jl. Mesjid 17, Petukangan Utara, Kebayoran Lama, Jakarta Selatan 12260
        </span>
      </div>
      <div style={styles.contactItem}>
        <span style={styles.contactLabel}>Call Center</span>
        <div style={styles.contactValue}>
          Sani Gunawan (sani.gunawan@geoservices.co.id)
          <br />
          <br />
          Soenardi(soenardi@geoservices.co.id)
          <br />
          <br />
          (021) 736 5365, (021) 736 5366, (021) 735 5980
        </div>
      </div>
    </div>
  );
};

export default Contact;
