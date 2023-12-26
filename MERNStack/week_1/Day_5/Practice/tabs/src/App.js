import "./App.css";
import Tab from "./components/Tabs";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [contents, setContents] = useState([
    1,
    "Towards the final quarter of 2023, rumours about the next flagship Samsung Galaxy series started ramping up, and there's a lot to expect. It's rumoured the S24 series - including the S24 Ultra - will be launched in February 2024. Rumours have suggested that the Ultra might include a titanium frame - like the iPhone 15 Pro - and feature a 1-inch primary camera sensor and 50-megapixel telephoto camera. We're also expecting Snapdragon 8 Gen 3 processors across the board.",
    "The first two generations of Surface Duo were interesting concepts - to say the least - and reviews were mixed around how well executed they were as usable device, but they certainly served as reminders that there's more than one way to do a folding smartphone.",
    "Interestingly the Xiaomi 14 series has already been launched in China. So technically, they're here now, but will take a bit of time to reach other markets. Historically, the Xiaomi models have made their way to the markets outside of China within a couple of months. With the Xiaomi 13 series we saw the Xiaomi 13 and Xiaomi 13 Pro launch in Western markets in the early part of the year. The range was expanded further with the Xiaomi 13 Ultra a little later in the year and the 13T and 13T Pro in the fall of 2023.",
    "It's claimed the OnePlus 12 will have a display capable of reaching 2600nits peak brightness, and have a new BOE X1 OLED panel. That should mean excellent colour accuracy and - with a resolution of 3168 x 1440 - it'll be really crisp and detailed too.",
  ]);
  const [tabsStyles, setTabsStyles] = useState([
    { color: "black", bgColor: "white" },
    { color: "black", bgColor: "white" },
    { color: "black", bgColor: "white" },
    { color: "black", bgColor: "white" },
  ]);

  return (
    <>
      {contents
        .filter((e, i) => {
          return i > 0;
        })
        .map((el, idx) => {
          // if (idx + 1 === contents[0]) {
          //   setColor("white");
          //   setBgColor("black");
          // }
          return (
            <Tab
              i={idx + 1}
              setContents={setContents}
              contents={contents}
              setTabsStyles={setTabsStyles}
              tabsStyles={tabsStyles}
            />
          );
        })}
      <Display contents={contents} />
    </>
  );
}

export default App;
