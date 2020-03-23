import React, { useState } from 'react'
import styles from './style.module.css'

const onColorChange = (e, setColor) => {
  const value = e.target.value
  setColor(value)
}

const onResetColor = (...colorOptions) => {
  colorOptions.forEach(({callback, color}) => {
    callback(color)
  })
}

const Gradient = ({children}) => {
  const [first_color, setFirstColor] = useState('#FF30C3')
  const [second_color, setSecondColor] = useState('#CC50C5')

  return (
    <div 
      className={styles.container} 
      style={{
        background: `linear-gradient(75deg, ${first_color}, ${second_color})`
      }}
    >
      <div>
        <label>你想要......</label>
        {children}
      </div>
      <div className={styles.inputGroup}>
        <label>请选择第一个背景色：</label>
        <input 
          type='color' 
          value={first_color} 
          className={styles.input}
          onChange={(e) => onColorChange(e, setFirstColor)}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>请选择第二个背景色：</label>
        <input 
          type='color' 
          value={second_color} 
          className={styles.input}
          onChange={(e) => onColorChange(e, setSecondColor)}
        />
      </div>
      <button
        className={styles.reset}
        onClick={() => onResetColor({
          callback: setFirstColor,
          color: '#FF30C3'
        }, {
          callback: setSecondColor,
          color: '#CC50C5'
        })}
      >重置为默认颜色</button>
    </div>
  )
}

export default Gradient 
