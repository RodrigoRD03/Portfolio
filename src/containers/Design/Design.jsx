import React, { useState } from "react";
import { data } from "../../constants";
import { RxCross1 } from "react-icons/rx";
import { BsArrow90DegLeft } from 'react-icons/bs'
import { motion, AnimatePresence } from "framer-motion";
import "./Design.css";

const Design = () => {
  const [selectedId, setSelectedId] = useState(null);
  return (
    <>
      <div className="app__design">
        <h1>Design</h1>
        <span
          onClick={() => {
            const sectionProgramming = document.querySelector(
              ".app__proyects-option_designing-open"
            );
            sectionProgramming.classList.remove("open");
          }}
        >
          <RxCross1 />
        </span>
      </div>
      <div className="app__design-list">
        {data.listDesigns.map((item) => (
          <motion.div
            key={item.id}
            layoutId={item.id}
            onClick={() => setSelectedId(item.id)}
            style={{ cursor: "pointer" }}
          >
            <motion.img
              className={
                "app__design-image_" + item.name + " app__design-image"
              }
              src={item.image}
            />
          </motion.div>
        ))}

        {selectedId && (
          <motion.div
            key={selectedId}
            layoutId={selectedId}
            className="app__design-image_open"
            onClick={() => setSelectedId(null)}
          >
            {data.listDesigns.map((item) =>
              item.id === selectedId ? (
                <motion.div
                  key={item.id}
                  className="app__design-image_open-container"
                >
                  <motion.img src={item.image} />
                  <motion.button
                    className="app__design-image_open-button"
                    onClick={() => setSelectedId(null)}
                  >
                    <BsArrow90DegLeft />
                  </motion.button>
                </motion.div>
              ) : null
            )}
          </motion.div>
        )}
      </div>
    </>
  );
};

export default Design;
