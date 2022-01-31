import { useRef, useEffect, useState } from 'react';
import { render } from 'react-dom';

import enemy1Img from '../../assets/enemy1.png';
import enemy2Img from '../../assets/enemy2.png';
import enemy3Img from '../../assets/enemy3.png';
import enemy4Img from '../../assets/enemy4.png';

function NpcMovements() {
  const canvasRef = useRef(null);

  let gameFrame = 0;
  let animationFrameId;
  const [enemiesNum, SetEnemiesNum] = useState(50);
  const enemiesArrayRef = useRef([]);

  class Enemy {
    constructor(ctx, canvas, enemyType) {
      this.image = new Image();
      this.image.src;
      this.canvas = canvas;
      this.ctx = ctx;
      this.spriteWidth;
      this.spriteHeight;
      this.speed = Math.floor(Math.random() * 3 + 1);
      this.enemyType = enemyType ?? Math.floor(Math.random() * 4);
      this.loadEnemyType();
      this.x = Math.random() * (canvas.width + 500);
      this.y = Math.random() * (canvas.height);
      this.width = this.spriteWidth / 2;
      this.height = this.spriteHeight / 2;
      this.totalFrames = 4;
      this.frame = Math.floor(Math.random() * 4);
      this.flapSpeed = Math.floor(Math.random() * 3 + 1);
      this.delta = Math.floor(Math.random() * 10);
    }

    loadEnemyType() {
      if (this.enemyType === 0) {
        this.image.src = enemy1Img;
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.totalFrames = 4;
      } else if (this.enemyType === 1) {
        this.image.src = enemy2Img;
        this.spriteWidth = 266;
        this.spriteHeight = 188;
        this.totalFrames = 4;
      } else if (this.enemyType === 2) {
        this.image.src = enemy3Img;
        this.spriteWidth = 218;
        this.spriteHeight = 177;
        this.totalFrames = 4;
      } else if (this.enemyType === 3) {
        this.image.src = enemy4Img;
        this.spriteWidth = 213;
        this.spriteHeight = 212;
        this.totalFrames = 7;
      }
    }

    update() {
      if (this.enemyType === 0) {
        this.x += Math.random() * 4 - 2;
        this.y += Math.random() * 4 - 2;
      } else if (this.enemyType === 1) {
        if (this.x < -this.spriteWidth) { this.x = 1000; }
        this.x -= this.speed;
        this.y += Math.sin((gameFrame / 30) + this.delta);
      }
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

    while (enemiesArrayRef.current.length < enemiesNum) {
      enemiesArrayRef.current.push(new Enemy(ctx, canvas, 2));
    }
    while (enemiesArrayRef.current.length > enemiesNum) {
      enemiesArrayRef.current.pop();
    }
    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      enemiesArrayRef.current.forEach((enemy) => {
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
      <p>
        Number of enemies:
        {' '}
        {enemiesNum}
      </p>
      <input
        type="range"
        min={1}
        max={100}
        defaultValue={50}
        onChange={(e) => SetEnemiesNum(e.target.value)}
      />
      <canvas
        className="border-8 w-full w-max-[900px]"
        ref={canvasRef}
      />
    </div>
  );
}

export default NpcMovements;
