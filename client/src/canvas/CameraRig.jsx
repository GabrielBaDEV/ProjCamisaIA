import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import { useSnapshot } from 'valtio'

import state from '../store'

export const CameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) => {

  // tornar a rotação da camisa e a propria responsiva
    const isBreakpoint = window.innerWidth <= 1260;
    const isMobile = window.innerWidth <= 600;
  
  // ajustar a posição inicial da camiseta
  let targetPosition = [-0.4, 0, 2];

  // se a camisa estiver na home page pelo celular, mudar a posição da camiseta para x, senão mudar posição para y
  if(snap.intro) {
    if(isBreakpoint) targetPosition = [0, 0, 2];

    if(isMobile) targetPosition = [0, 0.2, 2.5];
  } else {
    if(isMobile) targetPosition = [0, 0, 2.5];
    else targetPosition = [0, 0, 2];
  }

  // ajustar a posição da camiseta na camera
  easing.damp3(state.camera.position, targetPosition, 0.25, delta)

  // deixar a camiseta com a rotacão suave
  easing.dampE(
    group.current.rotation,
    [state.pointer.y / 10, -state.pointer.x / 5, 0],
    0.25,
    delta
    )
  })

  return <group ref={group}>{children}</group>
    
}

export default CameraRig