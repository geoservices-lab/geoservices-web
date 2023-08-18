import React, { useState } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

const renderBody = (content: string) => (
  <div
    style={{
      minHeight: 40,
    }}
    dangerouslySetInnerHTML={{
      __html: content ? content.replace(/\n/g, "<br>") : "",
    }}
  />
);

const Accordion = ({ id, title, content }) => {
  const [isOpen, toggleAccordion] = useState(false);

  return (
    <div
      style={{
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "gainsboro",
        padding: 12,
        width: "100%",
        marginBottom: 20,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
        onClick={() => toggleAccordion(!isOpen)}
      >
        <div>
          <span
            style={{
              fontWeight: "bold",
              color: "#505AE5",
              marginRight: 10,
            }}
          >
            {id}.
          </span>
          <span
            style={{
              fontWeight: "bold",
            }}
          >
            {title}
          </span>
        </div>
        <span>{isOpen ? <BsChevronUp /> : <BsChevronDown />}</span>
      </div>
      {isOpen && renderBody(content)}
    </div>
  );
};

export default Accordion;
