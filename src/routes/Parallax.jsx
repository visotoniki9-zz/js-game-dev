import { useRef, useEffect } from 'react';

function Parallax() {
  const canvasRef = useRef(null);
  useEffect(() => {
    // Canvas Setup
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 700;

    let gameFrame = 0;
    let animationFrameId;

    // Animation
    const render = () => {
      gameFrame += 1;
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  });
  return (
    <canvas
      className="border-8 my-4 absolute left-1/2 -translate-x-1/2"
      ref={canvasRef}
    />
  );
}

export default Parallax;
