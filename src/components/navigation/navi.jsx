
import {Canvas} from '@react-three/fiber'
import React, { Suspense } from "react";
import clsx from "clsx";
import { Environment } from '@react-three/drei';
import { BtnList } from '@/app/data';
import { flattenJSON } from 'three/src/animation/AnimationUtils';
import { button } from '@/app/layout';

const Navigation = () => {
    return (
        <div className = 'flex items-vertical justify-between relative'>
            {
                BtnList.map((btn, index) => {
                    return <button key = {index} style={{display: "block"}}
                    > 
                    
                    {btn.label}
                    </button>
                })
            }
        </div>
    )
}

export default Navigation