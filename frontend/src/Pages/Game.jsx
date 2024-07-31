/* eslint-disable no-unused-vars */
import {useEffect, useRef, useState} from 'react';
import {BallManager} from '../game/Classes/ballManager';
import axios from "axios";
// import { Button } from "../components/ui";
// import { baseURL } from "../utils";

export function Game () {
  const [ballManager, setBallManager] = useState ();
  const canvasRef = useRef ();

  useEffect(
    () => {
      if (canvasRef.current) {
        const ballManager = new BallManager (canvasRef.current,()=>{});
        setBallManager (ballManager);
      }
    },
    [canvasRef]
  );

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-black">
      <canvas ref={canvasRef} width="800" height="800" className="bg-black" />
      <button className=' p-2 border rounded-md bg-black text-white'
        onClick={async() => {
          if (ballManager) {
            const startX=await axios.get('/game')
            console.log("startX is:",startX)
            ballManager.addBall(startX.data.point);
          }
        }}
      >
        Add ball
      </button>
    </div>
  );
}
