import { useRef, useEffect } from 'react';

function NpcMovements() {
  const canvasRef = useRef(null);

  let gameFrame = 0;
  let animationFrameId;
  const enemiesArray = [];

  class Enemy {
    constructor(ctx, canvas) {
      this.image = new Image();
      this.image.src;
      this.canvas = canvas;
      this.ctx = ctx;
      this.spriteWidth;
      this.spriteHeight;
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.randomEnemy();
      this.width = this.spriteWidth / 2;
      this.height = this.spriteHeight / 2;
      this.totalFrames = 4;
      this.frame = Math.floor(Math.random() * 4);
      this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    }

    randomEnemy() {
      const r = Math.floor(Math.random() * 3);
      if (r === 0) {
        this.image.src = '../../assets/enemy1.png';
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.totalFrames = 4;
      } else if (r === 1) {
        this.image.src = '../../assets/enemy2.png';
        this.spriteWidth = 266;
        this.spriteHeight = 188;
        this.totalFrames = 4;
      } else if (r === 2) {
        this.image.src = '../../assets/enemy3.png';
        this.spriteWidth = 218;
        this.spriteHeight = 177;
        this.totalFrames = 4;
      } else if (r === 3) {
        this.image.src = '../../assets/enemy4.png';
        this.spriteWidth = 213;
        this.spriteHeight = 212;
        this.totalFrames = 7;
      }
    }

    update() {
      this.x += Math.random() * 4 - 2;
      this.y += Math.random() * 4 - 2;
      if (gameFrame % this.flapSpeed === 0) {
        this.frame > this.totalFrames ? this.frame = 0 : this.frame++;
      }
    }

    draw() {
      this.ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 900;
    canvas.height = 1200;

    for (let i = 0; i <= 100; i++) {
      enemiesArray.push(new Enemy(ctx, canvas));
    }
    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      enemiesArray.forEach((enemy) => {
        enemy.update();
        enemy.draw();
      });
      gameFrame++;
      animationFrameId = window.requestAnimationFrame(animate);
    };
    animate();
  });
  return (
    <div className="mt-8">
      <canvas
        className="border-8 w-full w-max-[900px]"
        ref={canvasRef}
      />
    </div>
  );
}

export default NpcMovements;
