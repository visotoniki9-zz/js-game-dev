import { useState, useRef, useEffect } from 'react';
import shadowDogImage from '../../assets/shadow_dog.webp';

function SpriteAnimations() {
  const [playerState, setPlayerState] = useState('idle');
  const canvasRef = useRef(null);

  const playerImage = new Image();
  playerImage.src = shadowDogImage;
  const spriteWidth = 575;
  const spriteHeight = 523;

  const staggerFrames = 5;
  const spriteAnimations = [];
  const animationStates = [
    { name: 'idle', frames: 7 },
    { name: 'jump', frames: 7 },
    { name: 'fall', frames: 7 },
    { name: 'run', frames: 9 },
    { name: 'dizzy', frames: 11 },
    { name: 'sit', frames: 5 },
    { name: 'roll', frames: 7 },
    { name: 'bite', frames: 7 },
    { name: 'ko', frames: 12 },
    { name: 'getHit', frames: 4 },
  ];

  animationStates.forEach((state, index) => {
    const frames = {
      loc: [],
    };
    for (let j = 0; j < state.frames; j++) {
      const positionX = j * spriteWidth;
      const positionY = index * spriteHeight;
      frames.loc.push({ x: positionX, y: positionY });
    }
    spriteAnimations[state.name] = frames;
  });
  useEffect(() => {
    // Canvas Setup
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 600;

    let gameFrame = 0;
    let animationFrameId;

    // Animation
    const render = () => {
      gameFrame++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const position = Math.floor(gameFrame / staggerFrames)
    % spriteAnimations[playerState].loc.length;
      const frameX = spriteWidth * position;
      const frameY = spriteAnimations[playerState].loc[position].y;
      ctx.drawImage(
        playerImage,
        frameX,
        frameY,
        spriteWidth,
        spriteHeight,
        0,
        0,
        canvas.width,
        canvas.height,
      );
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <div className="flex flex-col items-center">
      <div className="my-4">
        {animationStates.map((state) => (
          <button
            key={state.name}
            type="button"
            className="bg-[#282828] hover:bg-black text-white py-2 px-6 m-1 "
            onClick={() => setPlayerState(state.name)}
          >
            {state.name}
          </button>
        ))}
      </div>
      <canvas
        className="border-8 w-full max-w-[600px]"
        ref={canvasRef}
      />
    </div>
  );
}
export default SpriteAnimations;
