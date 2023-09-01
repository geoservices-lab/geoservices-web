import React from "react";
import TextLink from "../TextLink";

const BoxItem = ({ label, url, start, end }) => {
    return (
        <TextLink href={url ? url : "#"} style={{
            border: "1px solid gainsboro",
            marginRight: 40,
            display: 'block',
            width: 350,
            height: 200,
            position: 'relative',
        }}>
            <div style={{
                padding: 20,
                fontSize: 20,
                borderRadius: 12,
                lineHeight: 1.5,
            }}>
                {label}
            </div>
            <div style={{
                padding: 20,
                paddingTop: 0,
                paddingBottom: 40,
            }}>
                {start} {end}
            </div>
            <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                padding: 20,
                color: '#E68E67'
            }}>
                Register
            </div>
        </TextLink>
    );
};

export default BoxItem;
