import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import PopComponent from "./PopComponent";
import image1 from "../assets/meenoi3.jpg";
import image2 from "../assets/meenoi4.jpg";
import image3 from "../assets/meenoi5.jpg";

const CursorDiv = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  border-radius: 50%;
  background-color: grey;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

const Cursor = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  const images = [image1, image2, image3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const cursorRef = useRef(null);

  const positiveNegative = ["-", "+"];

  //the array of divs
  const divArray = [];

  //   Push random number of elements into the divArray
  const divs = Math.floor(Math.random() * 20);
  let i;
  for (i = 0; i < divs; i++) {
    divArray.push(i);
  }

  useEffect(() => {
    const set = (e) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    window.addEventListener("mousemove", set);
    return () => window.removeEventListener("mousemove", set);
  }, []);

  //animation
  const animation = () => {
    const tl = gsap.timeline();
    tl.to(cursorRef.current, {
      x: position.x - cursorRef.current.getBoundingClientRect().width / 2,
      y: position.y - cursorRef.current.getBoundingClientRect().height / 2,
    });
  };

  useEffect(() => {
    animation();
  }, [position]);

  //animation

  const animateAllDivs = (e) => {
    console.log(e.target.tagName);
    if (e.target.tagName === "IMG") {
      for (i in cursorRef.current.childNodes) {
        animation2(i);
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    window.addEventListener("click", animateAllDivs);
    return () => {
      window.removeEventListener("click", animateAllDivs);
    };
  }, []);

  const animation2 = (target) => {
    const index = Math.floor(Math.random() * 2);
    const tl = gsap.timeline();
    tl.to(cursorRef.current.childNodes[target], {
      x: `${positiveNegative[index] + Math.floor(Math.random() * 400)}`,
      y: `${positiveNegative[index] + Math.floor(Math.random() * 400)}`,
      scale: 0,
      stagger: 0.2,
      autoAlpha: 1,
      stagger: 0.2,
      duration: 0.5,
    })
      .to(cursorRef.current.childNodes[target], {
        opacity: 0,
        delay: 0.1,
        duration: 1,
      })
      .to(cursorRef.current.childNodes[target], {
        x: 0,
        y: 0,
        duration: 0,
        onComplete: () => {
          if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
          } else {
            setCurrentImageIndex(0);
          }
        },
      });
  };

  return (
    <>
      <CursorDiv
        ref={cursorRef}
        onClick={(e) => {
          if (e.target.tagName === "H1") {
            animateAllDivs();
          } else {
            return;
          }
        }}
      >
        {divArray.map(() => {
          return (
            <>
              {" "}
              <PopComponent
                image={images[currentImageIndex]}
              ></PopComponent>{" "}
            </>
          );
        })}
      </CursorDiv>{" "}
    </>
  );
};

export default Cursor;
