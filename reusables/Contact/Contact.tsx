import React from "react";
import styles from "./Contact.style";
import InfoCard from "../InfoCard/InfoCard.comp";

const Contact = ({ email, address, contactPerson }: any) => {
  return (
      <InfoCard title={'CONTACT INFO'}>
    <div style={styles.contact}>
      <div style={styles.contactItem}>
        <span style={styles.contactLabel}>E-mail</span>
        <span style={styles.contactValue}>{email}</span>
      </div>
      <div style={styles.contactItem}>
        <span style={styles.contactLabel}>Address</span>
        <span style={styles.contactValue}>
         {address}
        </span>
      </div>
      <div style={styles.contactItem}>
        <span style={styles.contactLabel}>Call Center</span>
        <div style={styles.contactValue}>
          {contactPerson && contactPerson.map((item: any, index: number) => {
            return (
                <div key={index} style={{
                  marginBottom: 12
                }}>
                  {item}
                </div>
            )
          })}
        </div>
      </div>
    </div>
      </InfoCard>
  );
};

export default Contact;
