// import React from 'react'
import Silk from '../components/ReactBits/Silk';
import {GridScan} from '../components/ReactBits/GridScan';
import LiquidEther from '../components/ReactBits/LiquidEther';

const Error = () => {
  return (
   

<div style={{ width: '100%', height: '100vh', position: 'relative', backgroundColor: '#1e1e1e' }}>
  <GridScan
    sensitivity={0.55}
    lineThickness={1}
    linesColor="#392e4e"
    gridScale={0.1}
    scanColor="#FF9FFC"
    scanOpacity={0.4}
    enablePost
    bloomIntensity={0.6}
    chromaticAberration={0.002}
    noiseIntensity={0.01}
  />

  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#FF9FFC', fontSize: '2rem', fontWeight: 'bold' }}>
    404 - Page Not Found
  </div>
</div>
  );
};


export default Error