import React from "react";
import TextLink from "../TextLink";

const BoxItem = ({ label, url }) => {
  return (
    <TextLink
      href={url ? url : "#"}
      style={{
        background: "whitesmoke",
        width: 350,
        height: 160,
        padding: 40,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 40,
        fontSize: 24,
        borderRadius: 12,
        border: "1px solid gainsboro",
        lineHeight: 1.5,
      }}
    >
      {label}
    </TextLink>
  );
};

export default BoxItem;
