import { useState, useRef, useEffect } from 'react';
import layer1Img from '../../assets/layer-1.webp';
import layer2Img from '../../assets/layer-2.webp';
import layer3Img from '../../assets/layer-3.webp';
import layer4Img from '../../assets/layer-4.webp';
import layer5Img from '../../assets/layer-5.webp';

function Parallax() {
  const canvasRef = useRef(null);

  let [gameSpeed, setGameSpeed] = useState(3);
  let gameFrame = 0;

  const backgroundLayer1 = new Image();
  backgroundLayer1.src = layer1Img;
  const backgroundLayer2 = new Image();
  backgroundLayer2.src = layer2Img;
  const backgroundLayer3 = new Image();
  backgroundLayer3.src = layer3Img;
  const backgroundLayer4 = new Image();
  backgroundLayer4.src = layer4Img;
  const backgroundLayer5 = new Image();
  backgroundLayer5.src = layer5Img;

  class Layer {
    constructor(ctx, image, speedModifier) {
      this.ctx = ctx;
      this.x = 0;
      this.y = 0;
      this.width = 2400;
      this.height = 700;
      this.image = image;
      this.speedModifier = speedModifier;
      this.speed = gameSpeed * this.speedModifier;
    }

    update() {
      this.speed = gameSpeed * this.speedModifier;
      this.x = (gameFrame * this.speed) % this.width;
    }

    draw() {
      this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      this.ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
    }
  }

  useEffect(() => {
    // Canvas Setup
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 900;
    canvas.height = 600;

    let animationFrameId;

    const layer1 = new Layer(ctx, backgroundLayer1, 0.2);
    const layer2 = new Layer(ctx, backgroundLayer2, 0.4);
    const layer3 = new Layer(ctx, backgroundLayer3, 0.6);
    const layer4 = new Layer(ctx, backgroundLayer4, 0.8);
    const layer5 = new Layer(ctx, backgroundLayer5, 1.0);

    const gameObject = [
      layer1, layer2, layer3, layer4, layer5,
    ];

    // Animation
    const animate = () => {
      gameFrame -= 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      gameObject.forEach((o) => {
        o.update();
        o.draw();
      });
      animationFrameId = window.requestAnimationFrame(animate);
    };
    animate();
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  });
  return (
    <div className="flex flex-col items-center">
      <div className="mt-4">
        <p>
          Gamespeed:
          {' '}
          {gameSpeed}
        </p>
        <input
          type="range"
          min={0}
          max={20}
          defaultValue={3}
          onChange={(e) => setGameSpeed(e.target.value)}
        />
      </div>
      <canvas
        className="border-8 my-4 w-full max-w-[900px]"
        ref={canvasRef}
      />
    </div>
  );
}

export default Parallax;
