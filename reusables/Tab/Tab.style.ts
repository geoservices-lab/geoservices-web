const styles = {
  tab: {
    display: "flex",
    borderBottomStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "rgb(230, 142, 103)",
    width: "100%",
    marginTop: 40,
  },
  tabItem: {
    padding: "12px 40px",
    cursor: "pointer",
    color: "rgb(230, 142, 103)",
  },
  tabItemActive: {
    padding: "12px 40px",
    background: "rgb(230, 142, 103)",
    color: "white",
  },
  tabContent: {
    padding: "40px",
    lineHeight: 1.5,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
    borderRadius: "6px",
    marginBottom: 40,
  },
  tabContentParagraph: {
    lineHeight: 2,
    color: "#828282",
  },
};

export default styles;
