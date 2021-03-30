import React from 'react';
import { Canvas } from 'react-three-fiber';
import Particles from './SpaceParticles';
import { THREE_JS_OPTIONS } from '../../constants';

const Space = () => (
  <Canvas
    className="space-container"
    camera={THREE_JS_OPTIONS.SPACE.CAMERA}
  >
    <Particles />
  </Canvas>
);

export default Space;
