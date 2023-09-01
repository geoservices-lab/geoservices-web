import React from "react";

const InfoCardListItem = ({ children }) => {
    return (
        <div style={{
            color: 'grey',
            marginBottom: 7,
        }}>
            {children}
        </div>
    );
};

export default InfoCardListItem;
