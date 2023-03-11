import { useRef, useState, useEffect } from 'react';

export default function Trace({ color }) {
  const lineRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsAnimating(true);
        }
      });
    });
  
    if (lineRef.current) {
      observer.observe(lineRef.current);
    }
  
    return () => {
      if (lineRef.current) {
        observer.unobserve(lineRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="line-container">
        <div ref={lineRef} className={`line ${isAnimating ? 'line-animation' : ''} ${color == "orange" ? 'orange-background' : 'white-background'}`}></div>
      </div>
    </>
  );
}
