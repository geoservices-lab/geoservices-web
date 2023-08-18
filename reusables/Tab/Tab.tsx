import React, { useState } from "react";
import styles from "./Tab.style";
import Accordion from "../../reusables/Accordion/Accordion";

const Tab = ({ tabItems }) => {
  const [activeTab, setActiveTab] = useState(0);

  const renderStringContent = (content, index) =>
    content &&
    activeTab === index &&
    !Array.isArray(content.data) && (
      <div
        dangerouslySetInnerHTML={{
          __html: content.data.replace(/\n/g, "<br>"),
        }}
      />
    );

  const renderArrayContent = (content, index) =>
    content &&
    activeTab === index &&
    content.data.map((item, index) => {
      return (
        <Accordion
          key={index}
          id={item.id}
          title={item.title}
          content={item.content}
        />
      );
    });

  return (
    <div>
      <div style={styles.tab}>
        {tabItems.map((item, index) => (
          <div>
            <div
              onClick={() => setActiveTab(index)}
              style={
                activeTab === index ? styles.tabItemActive : styles.tabItem
              }
              key={index}
            >
              {item.title}
            </div>
          </div>
        ))}
      </div>
      <div>
        <div style={styles.tabContent}>
          {tabItems.map((item, index) => (
            <div style={styles.tabContentParagraph}>
              {activeTab === index && item.content.render && item.content.render}
              {Array.isArray(item.content.data) &&
                renderArrayContent(item.content, index)}
              {typeof item.content.data === "string" &&
                renderStringContent(item.content, index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tab;
