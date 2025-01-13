
import {Canvas} from '@react-three/fiber'
import React, { Suspense } from "react";
import clsx from "clsx";
import { Environment } from '@react-three/drei';

const GameModel = ({children, className}) => {
    return(
        <Canvas> 
            className = {("game")}
            <Suspense fallback = {null}>
                {children}
            </Suspense>
            <Environment preset ='dawn' />
        </Canvas>
    )
}

export default GameModel
