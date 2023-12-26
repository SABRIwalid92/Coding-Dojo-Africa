import React from "react";

const Tab = ({ i, setContents, contents, setTabsStyles, tabsStyles }) => {
  const style = {
    color: tabsStyles[i - 1].color,
    background: tabsStyles[i - 1].bgColor,
    display: "inline-block",
    fontSize: "20px",
    border: "1px solid black",
    width: "fit-content",
    minWidth: "150px",
    margin: "auto",
    fontFamily: "roboto ",
    fontWeight: "bold",
    padding: "10px",
  };

  const clickHandler = () => {
    setContents(
      contents.map((el, index) => {
        if (index === 0) {
          return i;
        } else return el;
      })
    );

    const temp = [...tabsStyles];
    temp[i - 1] = { color: "white", bgColor: "black" };
    setTabsStyles(temp);
    console.log(tabsStyles);
  };
  return (
    <div
      style={style}
      key={i}
      onClick={() => {
        clickHandler();
      }}
    >
      Tab{i}
    </div>
  );
};

export default Tab;
