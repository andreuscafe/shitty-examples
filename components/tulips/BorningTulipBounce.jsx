import React from 'react'
import { motion } from 'framer-motion'

export default function BorningTulip() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 337 673" fill="none">
      <g id="tail_group">
        <motion.path
          id="tail"
          d="M130.78 188.4C130.78 195.57 135.41 201.76 142.07 204.59C144.16 218.37 146.4 250.37 146.4 324.24C146.4 373.13 139.81 487.2 127.14 535.16C108.94 604.08 120.98 630.13 122.63 635.54C122.75 635.94 122.82 636.15 122.82 636.15L142.28 641C142.28 641 119.76 595.76 141.38 537.66C159.3 489.5 162.13 371.46 162.13 318.17V202.43C166.59 199.22 169.48 194.26 169.58 188.69V188.12C169.41 178.41 160.78 170.58 150.18 170.58C139.48 170.58 130.78 178.57 130.78 188.4Z"
          fill="#73B356"
          style={{
            originX: 0.5,
            originY: 1,
          }}
          initial={{
            scale: 0,
            rotate: 0,
            x: -10,
          }}
          animate={{
            scale: 1,
            rotate: 0,
            x: 0,
          }}
          transition={{
            duration: 2.2,
            delay: 0.6,
            ease: [0.5, 1.36, 0.64, 1],
          }}
        />
        <motion.path
          id="leaf_back"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M-3 423.28C-3 423.28 131.05 680.24 131.06 648.38V648.17C131 490.34 -3 423.28 -3 423.28Z"
          fill="#73B255"
          style={{
            originX: 1,
            originY: 1,
          }}
          initial={{
            scale: 0.1,
            y: 10,
            rotate: 20,
          }}
          animate={{
            scale: 1,
            y: 0,
            rotate: 0,
          }}
          transition={{
            duration: 2,
            ease: [0.5, 1.36, 0.64, 1],
          }}
        />
      </g>
      <motion.g
        id="flower_group"
        initial={{
          scale: 0,
          y: '80%',
          x: -10,
        }}
        animate={{
          scale: 1,
          y: 0,
          x: 0,
        }}
        transition={{
          ease: [0.5, 1.36, 0.64, 1],
          duration: 2.2,
          delay: 0.6,
        }}
      >
        <motion.path
          id="petal_center_top"
          d="M148.23 0C119.39 0 75.47 64.46 75.47 117.94C75.47 171.42 108.07 193.79 148.23 193.79C188.39 193.79 220.99 171.43 220.99 117.94C220.99 64.46 177.08 0 148.23 0Z"
          fill="#233EC3"
          style={{
            originX: 0.5,
            originY: 0.7,
          }}
          initial={{
            scaleX: 0.4,
            scaleY: 0.8,
          }}
          animate={{
            scaleX: 1,
            scaleY: 1,
          }}
          transition={{
            duration: 1.4,
            delay: 1.3,
            ease: [0.54, 1.54, 0.67, 0.92],
          }}
        />
        <motion.path
          id="petal_center_bottom"
          d="M77.99 140.24C77.02 135.54 76.51 130.67 76.51 125.69C76.51 86.1 108.65 53.96 148.24 53.96C187.83 53.96 219.97 86.1 219.97 125.69C219.97 128.6 219.8 131.46 219.46 134.28C217.98 143.54 215.42 151.64 211.96 158.65C208.16 165.97 203.14 172.56 197.16 178.13C184.23 189.48 167.03 194.68 148.16 194.68C130.41 194.68 114.14 190.08 101.5 180.08C92.31 172.17 85.14 161.98 80.88 150.39C79.76 147.19 78.79 143.81 77.99 140.24Z"
          fill="#3D7AF5"
          style={{
            originX: 0.5,
            originY: 1,
          }}
          initial={{
            scale: 0.3,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 1.4,
            delay: 1.3,
            ease: [0.54, 1.54, 0.67, 0.92],
          }}
        />
        <motion.path
          id="petal_center_middle"
          d="M148.23 25.01C130.14 25.01 102.6 58.05 102.6 85.45C102.6 112.86 123.05 124.32 148.23 124.32C173.42 124.32 193.86 112.86 193.86 85.45C193.86 67.5 182.04 47.12 168.79 35.21C161.83 28.94 154.47 25.01 148.23 25.01Z"
          fill="#76BDFF"
          style={{
            originX: 0.5,
            originY: 1,
          }}
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 1.4,
            delay: 1.3,
            ease: [0.54, 1.54, 0.67, 0.92],
          }}
        />
        <motion.path
          id="petal_front_right"
          d="M156.09 90.98C140.6 135.02 149.69 162.73 168.87 174.18C188.05 185.63 210.1 176.51 225.6 132.47C232.94 111.6 236.29 85.89 236.31 63.74V63.29C236.29 38.9 232.22 18.91 225.01 14.61C223.8 13.89 222.39 13.54 220.81 13.54C204.46 13.53 170.23 50.81 156.09 90.98Z"
          fill="#3D7AF5"
          style={{
            originX: 0.5,
            originY: 1,
          }}
          initial={{
            scale: 1,
            x: -25,
            y: 10,
            rotate: -17,
          }}
          animate={{
            scale: 1,
            x: 0,
            y: 0,
            rotate: 0,
          }}
          transition={{
            duration: 1.4,
            delay: 1.3,
            ease: [0.54, 1.54, 0.67, 0.92],
          }}
        />
        <motion.path
          id="petal_front_left"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M71.43 14.63C85.2 6.4 124.87 46.94 140.38 90.97C155.89 135 146.8 162.71 127.63 174.17C108.45 185.63 86.4 176.52 70.89 132.49C55.37 88.46 57.65 22.86 71.43 14.63Z"
          fill="#3D7AF5"
          style={{
            originX: 0.5,
            originY: 1,
          }}
          initial={{
            scale: 1,
            x: 25,
            y: 10,
            rotate: 17,
          }}
          animate={{
            scale: 1,
            x: 0,
            y: 0,
            rotate: 0,
          }}
          transition={{
            duration: 1.4,
            delay: 1.3,
            ease: [0.54, 1.54, 0.67, 0.92],
          }}
        />
      </motion.g>
      <motion.path
        id="leaf_front"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M333.05 309.19C333.05 339.02 142.34 583.27 142.34 651.33C142.34 696.01 115.83 664.54 115.83 609.86C115.83 465.88 247.01 309.19 333.05 309.19Z"
        fill="#94CA4F"
        style={{
          originX: 0.1,
          originY: 1,
        }}
        initial={{
          scale: 0.1,
          rotate: -20,
        }}
        animate={{
          scale: 1,
          rotate: 0,
        }}
        transition={{
          duration: 2.4,
          ease: [0.5, 1.36, 0.64, 1],
        }}
      />
    </svg>
  )
}
