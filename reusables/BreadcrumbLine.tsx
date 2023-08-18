import { styled } from "@nextui-org/react";
import React from "react";
import { FiChevronRight } from "react-icons/fi";
import Box from "reusables/Box";
import TextLink from "reusables/TextLink";
import { BreadcrumbProps } from "./types";

export interface BreadCrumbLineProps {
  items: BreadcrumbProps;
}

const BreadCrumbLine = ({ items, ...rest }: BreadCrumbLineProps) => {
  return (
    <Box {...rest}>
      <Box
        css={{
          display: "flex",
          alignItems: "center",
        }}
      >
        {items?.map((item, index) => (
          <React.Fragment key={item.url}>
            <Box
              css={{
                m: "$2",
                display: "flex",
                alignItems: "center",
              }}
            >
              <TextLink
                css={{
                  color: item?.textColor ? item?.textColor : "default",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "19px",
                  textTransform: "capitalize",
                }}
                href={item.url}
              >
                {item.title}
              </TextLink>
            </Box>

            {index < items.length - 1 && (
              <Box
                css={{
                  m: "$2",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  top: "$1",
                }}
              >
                <FiChevronRight />
              </Box>
            )}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default styled(BreadCrumbLine, {});
