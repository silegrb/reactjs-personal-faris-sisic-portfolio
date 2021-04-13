import * as THREE from 'three';
import React, { useRef, useMemo } from 'react';
import { useFrame } from 'react-three-fiber';
import { THREE_JS_OPTIONS } from '../../constants';

const SpaceParticles = () => {
  const mesh = useRef();
  const light = useRef();

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => [...Array(THREE_JS_OPTIONS.SPACE.PARTICLES_AMOUNT)].map(() => ({
    t: Math.random() * 100,
    factor: 10 + Math.random() * 100,
    speed: 0.01 + Math.random() / 600,
    xFactor: -50 + Math.random() * 100,
    yFactor: -50 + Math.random() * 100,
    zFactor: -50 + Math.random() * 100,
    mx: 0,
    my: 0,
  })), []);

  useFrame(({ mouse, viewport }) => {
    particles.forEach((particle, i) => {
      const {
        t, factor, speed, xFactor, yFactor, zFactor,
      } = particle;
      // eslint-disable-next-line no-param-reassign
      particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.max(1.5, Math.cos(t) * 5);
      // eslint-disable-next-line no-param-reassign
      particle.mx += (mouse.x * viewport.width - particle.mx) * 0.02;
      // eslint-disable-next-line no-param-reassign
      particle.my += (mouse.y * viewport.height - particle.my) * 0.02;
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10,
      );
      dummy.scale.set(s, s, s);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });
  return (
    <>
      <pointLight ref={light} {...THREE_JS_OPTIONS.SPACE.PARTICLES_POINT_LIGHT_PROPS} />
      <instancedMesh ref={mesh} args={[null, null, 50]}>
        <dodecahedronBufferGeometry args={[0.2, 0]} />
        <meshPhongMaterial color="black" />
      </instancedMesh>
    </>
  );
};

export default SpaceParticles;
