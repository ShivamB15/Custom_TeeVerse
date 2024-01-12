import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'

import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state);

  return (
    <div className='absolute left-full ml-3'>
      <SketchPicker 
        color={snap.color}
        disableAlpha
        presetColors={[
          '#ccc',
          '#EFBD4E',
          '#80C670',
          '#726DE8',
          '#353934',
          '#2CCCE4',
          '#E6E6FA',
          '#E0B0FF',
          '#C292A1',
          '#8CE68C',
          '#ff8a65',
          '#C19277',
          '#7098DA',
        ]}
        onChange={(color) => state.color = color.hex}
      />
    </div>
  )
}

export default ColorPicker