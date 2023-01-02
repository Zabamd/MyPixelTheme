import "../style/counter.css";
import { useState } from "@wordpress/element";

wp.blocks.registerBlockType("mypixeltheme/counter", {
  title: "Counter",
  category: "my-pixel-theme",
  edit: editBlock,
  save: saveBlock,
});

const CounterComponent = () => {
  const [counter, setcounter] = useState(0);
  return (
    <div
      className="counterWrapper"
      style={{ width: "500px", height: "500px", backgroundColor: "cyan" }}
    >
      <p>Counter</p>
      <button
        style={{ width: "150px", height: "150px" }}
        onClick={() => {
          setcounter(counter + 1);
        }}
      >
        {counter}
      </button>
    </div>
  );
};

function editBlock() {
  return (
    <div>
      <CounterComponent />
    </div>
  );
}

function saveBlock() {
  return (
    <div>
     {/*  <CounterComponent /> */}
    </div>
  );
}
