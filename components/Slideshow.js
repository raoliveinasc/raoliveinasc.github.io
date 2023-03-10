import { useState, useRef, useEffect } from "react";

const delay = 8000;
const colors = ["pagina-padrao", "curiosidade", "promocao"]

export default function Slideshow({}) {
        const [index, setIndex] = useState(0);
        const timeoutRef = useRef(null);
      
        function resetTimeout() {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        }
      
        useEffect(() => {
          resetTimeout();
          timeoutRef.current = setTimeout(
            () =>
              setIndex((prevIndex) =>
                prevIndex === colors.length - 1 ? 0 : prevIndex + 1
              ),
            delay
          );
      
          return () => {
            resetTimeout();
          };
        }, [index]);
      
        return (
          <div className="slideshow">
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                <div className="slide" key={index}>
                    
                </div>
            </div>
      
            <div className="slideshowDots">
              {colors.map((_, idx) => (
                <div
                  key={idx}
                  className={`slideshowDot${index === idx ? " active" : ""}`}
                  onClick={() => {
                    setIndex(idx);
                  }}
                ></div>
              ))}
            </div>
          </div>
        )
}