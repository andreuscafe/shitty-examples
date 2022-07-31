import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import styles from './Idea.module.scss'

const colors = [
  '#f44336',
  '#e91e63',
  '#9c27b0',
  '#673ab7',
  '#3f51b5',
  '#2196f3',
  '#03a9f4',
  '#00bcd4',
  '#009688',
  '#4caf50',
  '#8bc34a',
  '#cddc39',
  '#ffeb3b',
  '#ffc107',
  '#ff9800',
  '#ff5722',
  '#795548',
  '#9e9e9e',
  '#607d8b',
]

const generateRandomTransformation = () => {
  return {
    x: Math.floor(Math.random() * 1000) - 500,
    y: Math.floor(Math.random() * 300) - 300,
    z: Math.floor(Math.random() * 600) - 500,
    rotateZ: Math.floor(Math.random() * 120) - 60,
    rotateX: Math.floor(Math.random() * 120) - 60,
    rotateY: Math.floor(Math.random() * 120) - 60,
    color: colors[Math.floor(Math.random() * colors.length)],
  }
}

let animationConfig = {
  type: 'spring',
  stiffness: 100,
  mass: 50,
  damping: 5,
}

export const Idea = ({ children }) => {
  const [transformation, setTransformation] = useState(
    generateRandomTransformation()
  )
  const intervalRef = useRef()

  useEffect(() => {
    clearInterval(intervalRef.current)
    setTransformation(generateRandomTransformation())

    intervalRef.current = setInterval(() => {
      setTransformation(generateRandomTransformation())
    }, 2000)

    setTimeout(() => {
      animationConfig.stiffness = 10
    }, 30000)

    setTimeout(() => {
      animationConfig.stiffness = 110
    }, 91000)

    setTimeout(() => {
      animationConfig.stiffness = 1
      animationConfig.mass = 10000
      animationConfig.damping = 10000
    }, 154000)

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <motion.div
      className={styles.idea}
      // style={{ '--foreground': transformation.color }}
      initial={{
        opacity: 0,
        scale: 0,
        x: transformation.x,
        y: transformation.y,
        z: transformation.z,
        rotateZ: transformation.rotateZ,
        rotateX: transformation.rotateX,
        rotateY: transformation.rotateY,
        transition: animationConfig,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: transformation.x,
        y: transformation.y,
        z: transformation.z,
        rotateZ: transformation.rotateZ,
        rotateX: transformation.rotateX,
        rotateY: transformation.rotateY,
        transition: animationConfig,
      }}
    >
      {children}
    </motion.div>
  )
}
