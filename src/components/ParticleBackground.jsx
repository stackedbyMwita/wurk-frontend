import { useEffect, useRef } from 'react';

export default function ParticleBackground () {
  const canvasRef = useRef(null);
  const mouse = useRef({x:null, y:null, radius:250, isHovering: false});
  const particlesArray = useRef([]);

  //Particle class
  class Particle  {
    constructor(canvas) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 5 + 1;
      this.speedX = Math.random() * 3 - 2;
      this.speedY = Math.random() * 3 - 2;
      this.color = `hsl(${Math.random()}* 360, 50%, 50%)`;
    }

    update(canvas) {
      this.x += this.speedX;
      this.y += this.speedY;

      //bounce off walls
      if(this.x<0 || this.x>canvas.width) this.speedX *= -1;
      if(this.y<0 || this.y>canvas.height) this.speedY *= -1;

      //Mouse inrerraction
      if (mouse.current.isHovering) {
        const dx = this.x - mouse.current.x;
        const dy = this.y - mouse.current.y;
        const distance = Math.sqrt(dx*dx + dy*dy);
        if (distance < mouse.current.radius) {
          this.x += dx*0.02;
          this.y += dy*0.02;
        }
      }
    }

    draw(ctx) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  //Connect Particles with lines
  const connectParticles = (ctx) => {
    for (let i=0; i<particlesArray.current.length; i++) {
      for (let j=i+1; j<particlesArray.current.length; j++) {
        const dx = particlesArray.current[i].x - particlesArray.current[j].x;
        const dy = particlesArray.current[i].y - particlesArray.current[j].y;
        const distance = Math.sqrt(dx*dx + dy*dy);
        if (distance<100) {
          ctx.strokeStyle = `rgba(0, 255, 136, ${1-distance/100})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particlesArray.current[i].x, particlesArray.current[i].y);
          ctx.lineTo(particlesArray.current[j].x, particlesArray.current[j].y);
          ctx.stroke();
        }
      }
    }
  };

  //Draw spotlight effect
  const drawSpotlight = (ctx) => {
    if (mouse.current.isHovering && mouse.current.x !== null && mouse.current.y !== null) {
      const gradient = ctx.createRadialGradient(
        mouse.current.x,
        mouse.current.y,
        0,
        mouse.current.x,
        mouse.current.y,
        mouse.current.radius
      );
      gradient.addColorStop(0, 'rgba(0, 255, 136, 0.2)');
      gradient.addColorStop(1, 'rgba(0, 255, 136, 0)');

      ctx.fillStyle= gradient;
      ctx.beginPath();
      ctx.arc(mouse.current.x, mouse.current.y, mouse.current.radius, 0, Math.PI*2);
      ctx.fill();
    }
  };

  //Animate loop
  const animate = (ctx, canvas) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.current.forEach((particle) => {
      particle.update(canvas);
      particle.draw(ctx);
    });
    connectParticles(ctx);
    drawSpotlight(ctx);
    requestAnimationFrame(()=> animate(ctx, canvas));
  };

  //Initialize canvas and particles
  useEffect (() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //Initialize particles
    particlesArray.current = [];
    for (let i=0; i<100; i++) {
      particlesArray.current.push(new Particle(canvas))
    }

    //start animation
    animate(ctx, canvas);

    //Mouse Movement handler
    const handleMouseMove= (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      mouse.current.isHovering = true;
    };

    const handleMouseLeave = () => {
      mouse.current.isHovering = false;
    }

    //Resize Handler
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);
    

    //Cleanup
    return() => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    }

  }, []);

  return(
    <canvas
    ref={canvasRef}
    className="fixed top-0 left-0 width-100%"
    />
    
  );
};