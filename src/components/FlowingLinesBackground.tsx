"use client";

import React, { useEffect, useRef } from 'react';

const FlowingLinesBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationFrameId: number;

    // Configuration
    const SENSITIVITY = 100;
    const SIBLINGS_LIMIT = 10;
    const DENSITY = 50;
    const ANCHOR_LENGTH = 20;
    const MOUSE_RADIUS = 200;
    const CIRC = 2 * Math.PI;

    // State
    let nodes: Node[] = [];
    let NODES_QTY = 0;
    let mouse = {
      x: width / 2,
      y: height / 2
    };

    class Node {
      anchorX: number;
      anchorY: number;
      x: number;
      y: number;
      vx: number;
      vy: number;
      energy: number;
      radius: number;
      siblings: Node[];
      brightness: number;

      constructor(x: number, y: number) {
        this.anchorX = x;
        this.anchorY = y;
        this.x = Math.random() * (x - (x - ANCHOR_LENGTH)) + (x - ANCHOR_LENGTH);
        this.y = Math.random() * (y - (y - ANCHOR_LENGTH)) + (y - ANCHOR_LENGTH);
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * 2 - 1;
        this.energy = Math.random() * 100;
        this.radius = Math.random();
        this.siblings = [];
        this.brightness = 0;
      }

      drawNode() {
        // Using Cyan instead of Red to match the Digital Horizons theme
        const color = "rgba(0, 255, 255, " + this.brightness + ")";
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2 * this.radius + 2 * this.siblings.length / SIBLINGS_LIMIT, 0, CIRC);
        ctx.fillStyle = color;
        ctx.fill();
      }

      drawConnections() {
        if (!ctx) return;
        for (let i = 0; i < this.siblings.length; i++) {
          const color = "rgba(0, 255, 255, " + this.brightness + ")";
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.siblings[i].x, this.siblings[i].y);
          ctx.lineWidth = 1 - calcDistance(this, this.siblings[i]) / SENSITIVITY;
          ctx.strokeStyle = color;
          ctx.stroke();
        }
      }

      moveNode() {
        this.energy -= 2;
        if (this.energy < 1) {
          this.energy = Math.random() * 100;
          if (this.x - this.anchorX < -ANCHOR_LENGTH) {
            this.vx = Math.random() * 2;
          } else if (this.x - this.anchorX > ANCHOR_LENGTH) {
            this.vx = Math.random() * -2;
          } else {
            this.vx = Math.random() * 4 - 2;
          }
          if (this.y - this.anchorY < -ANCHOR_LENGTH) {
            this.vy = Math.random() * 2;
          } else if (this.y - this.anchorY > ANCHOR_LENGTH) {
            this.vy = Math.random() * -2;
          } else {
            this.vy = Math.random() * 4 - 2;
          }
        }
        this.x += this.vx * this.energy / 100;
        this.y += this.vy * this.energy / 100;
      }
    }

    function calcDistance(node1: { x: number; y: number }, node2: { x: number; y: number }) {
      return Math.sqrt(Math.pow(node1.x - node2.x, 2) + (Math.pow(node1.y - node2.y, 2)));
    }

    function initNodes() {
      nodes = [];
      NODES_QTY = 0;
      for (let i = DENSITY; i < width; i += DENSITY) {
        for (let j = DENSITY; j < height; j += DENSITY) {
          nodes.push(new Node(i, j));
          NODES_QTY++;
        }
      }
    }

    function findSiblings() {
      let node1, node2, distance;
      for (let i = 0; i < NODES_QTY; i++) {
        node1 = nodes[i];
        node1.siblings = [];
        for (let j = 0; j < NODES_QTY; j++) {
          node2 = nodes[j];
          if (node1 !== node2) {
            distance = calcDistance(node1, node2);
            if (distance < SENSITIVITY) {
              if (node1.siblings.length < SIBLINGS_LIMIT) {
                node1.siblings.push(node2);
              } else {
                let node_sibling_distance = 0;
                let max_distance = 0;
                let s = -1;
                for (let k = 0; k < SIBLINGS_LIMIT; k++) {
                  node_sibling_distance = calcDistance(node1, node1.siblings[k]);
                  if (node_sibling_distance > max_distance) {
                    max_distance = node_sibling_distance;
                    s = k;
                  }
                }
                if (distance < max_distance && s !== -1) {
                  node1.siblings.splice(s, 1);
                  node1.siblings.push(node2);
                }
              }
            }
          }
        }
      }
    }

    function redrawScene() {
      if (!ctx || !canvas) return;
      
      // Clear and fill background
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#25003a'; // Deep purple background
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      findSiblings();
      
      let i, node, distance;
      for (i = 0; i < NODES_QTY; i++) {
        node = nodes[i];
        distance = calcDistance({
          x: mouse.x,
          y: mouse.y
        }, node);
        
        if (distance < MOUSE_RADIUS) {
          node.brightness = 1 - distance / MOUSE_RADIUS;
        } else {
          node.brightness = 0;
        }
      }
      
      for (i = 0; i < NODES_QTY; i++) {
        node = nodes[i];
        if (node.brightness > 0) {
          node.drawNode();
          node.drawConnections();
        }
        node.moveNode();
      }
      
      animationFrameId = requestAnimationFrame(redrawScene);
    }

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initNodes();
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Initial setup
    handleResize();
    redrawScene();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full -z-10 bg-[#25003a]"
    />
  );
};

export default FlowingLinesBackground;