import { Card, styled, Text } from "@nextui-org/react";
import React from "react";
import Box from "reusables/Box";

const CardText = styled(Text, {
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "32px",
  lineHeight: "39px",
});

const cards = [
  {
    id: "0",
    text: "Wellsite Core handling & Preservation",
  },
  {
    id: "1",
    text: "Laboratory Preservation",
  },
  {
    id: "2",
    text: "Gamma Logging & CT Scanning",
  },
  {
    id: "3",
    text: "Conventional & Digital Photography",
  },
  {
    id: "4",
    text: "Routine Core Analysis",
  },
  {
    id: "5",
    text: "Special Core Analysis",
  },
  {
    id: "6",
    text: "Reservoir Unitization",
  },
  {
    id: "7",
    text: "Formation Damage Evaluation",
  },
  {
    id: "8",
    text: "Rock Mechanics",
  },
];

const CoreAnalysis = () => {
  return (
    <Box
      css={{
        display: "grid",
        gridAutoRows: "1fr",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "30px 60px",
        mt: "$15",
        mb: "$40",
        justifyItems: "center",
      }}
    >
      {/* ROW 1 */}
      {cards?.map((card) => (
        <Card
          key={card.id}
          css={{
            minHeight: "150px",
            minWidth: "350px",
            backgroundColor: "#F8F8F8",
            boxShadow: "10px 10px #E0E0E0",
            padding: "$10",
          }}
        >
          <CardText css={{ color: "#4F4F4F" }}>{card.text}</CardText>
        </Card>
      ))}
    </Box>
  );
};

export default CoreAnalysis;
