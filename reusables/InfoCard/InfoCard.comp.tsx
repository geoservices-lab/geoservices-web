import React from "react";
import Box from "../Box";

const InfoCard = ({ title, children }) => {
    return (
        <Box
            css={{
                marginTop: 40,
                marginBottom: 40,
                borderTop: "4px solid #E68E67",
                boxShadow: "0px 4px 4px 0px #0000001A",
                p: "44px 193px 44px 52px",
            }}
        >
            <Box>
                <h3 style={{
                    color: "#E68E67",
                    marginTop: 0,
                    paddingTop: 0,
                }}>
                    {title}
                </h3>
                <div>
                    {children}
                </div>
            </Box>
        </Box>
    );
};

export default InfoCard;
