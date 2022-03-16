import React from 'react'
import { motion } from 'framer-motion'

export default function BorningTulip() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 502 1006" fill="none">
      <g id="tail_group">
        <motion.path
          id="tail"
          d="M199.874 282.388C199.874 293.098 206.79 302.344 216.738 306.571C219.859 327.154 223.205 374.951 223.205 485.289C223.205 558.315 213.362 728.699 194.437 800.335C167.252 903.28 185.236 942.19 187.701 950.271C187.88 950.868 187.984 951.182 187.984 951.182L223.519 964.894C223.519 964.894 183.414 890.852 215.707 804.07C242.474 732.134 246.701 555.821 246.701 476.223V303.344C253.363 298.55 257.679 291.141 257.829 282.821V281.97C257.575 267.466 244.684 255.771 228.851 255.771C212.869 255.771 199.874 267.705 199.874 282.388Z"
          fill="url(#paint_tail)"
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
            duration: 2.5,
            delay: 0.5,
          }}
        />
        <motion.path
          id="leaf_back"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.0499878 633.223C0.0499878 633.223 200.277 1017.04 200.292 969.45V969.136C200.203 733.389 0.0499878 633.223 0.0499878 633.223Z"
          fill="url(#paint1_linear_271_1372)"
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
          ease: 'easeInOut',
          duration: 2.5,
          delay: 0.5,
        }}
      >
        <motion.path
          id="petal_center_top"
          d="M221.458 0.979523C178.38 0.979523 112.778 97.2619 112.778 177.144C112.778 257.026 161.472 290.439 221.458 290.439C281.444 290.439 330.138 257.041 330.138 177.144C330.138 97.2619 264.55 0.979523 221.458 0.979523Z"
          fill="#233EC3"
          style={{
            originX: 0.5,
            originY: 0.7,
          }}
          initial={{
            scale: 0.3,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 1.4,
            delay: 2.2,
          }}
        />
        <motion.path
          id="petal_center_bottom"
          d="M116.542 210.453C115.093 203.432 114.331 196.158 114.331 188.72C114.331 129.585 162.338 81.5783 221.473 81.5783C280.607 81.5783 328.614 129.585 328.614 188.72C328.614 193.066 328.36 197.338 327.852 201.55C325.642 215.382 321.818 227.481 316.65 237.951C310.974 248.885 303.475 258.728 294.543 267.048C275.23 284.001 249.539 291.768 221.353 291.768C194.84 291.768 170.538 284.898 151.658 269.961C137.931 258.146 127.222 242.925 120.859 225.614C119.186 220.834 117.737 215.785 116.542 210.453Z"
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
            delay: 2.2,
          }}
        />
        <motion.path
          id="petal_center_middle"
          d="M221.458 38.3364C194.437 38.3364 153.301 87.6874 153.301 128.614C153.301 169.556 183.847 186.673 221.458 186.673C259.083 186.673 289.614 169.556 289.614 128.614C289.614 101.803 271.959 71.3616 252.168 53.5719C241.772 44.2065 230.778 38.3364 221.458 38.3364Z"
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
            duration: 2.4,
            delay: 1.2,
          }}
        />
        <motion.path
          id="petal_front_right"
          d="M233.198 136.874C210.061 202.656 223.638 244.046 252.287 261.148C280.936 278.251 313.871 264.628 337.023 198.847C347.987 167.674 352.991 129.271 353.021 96.1865V95.5143C352.991 59.0835 346.912 29.2249 336.142 22.8021C334.335 21.7267 332.229 21.2039 329.869 21.2039C305.447 21.189 254.319 76.8732 233.198 136.874Z"
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
            delay: 2.2,
          }}
        />
        <motion.path
          id="petal_front_left"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M106.743 22.832C127.311 10.5391 186.565 71.0927 209.732 136.859C232.899 202.626 219.322 244.016 190.688 261.133C162.039 278.251 129.104 264.643 105.937 198.877C82.7549 133.11 86.1604 35.125 106.743 22.832Z"
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
            delay: 2.2,
          }}
        />
      </motion.g>
      <motion.path
        id="leaf_front"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M502 462.809C502 507.366 217.141 872.196 217.141 973.856C217.141 1040.59 177.544 993.587 177.544 911.913C177.544 696.854 373.484 462.809 502 462.809Z"
        fill="url(#paint_leaf_front)"
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
        }}
      />
      <defs>
        <linearGradient
          id="paint_tail"
          x1="218.71"
          y1="255.771"
          x2="218.71"
          y2="964.894"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0988606" stopColor="#00A69F" />
          <stop offset="0.316802" stopColor="#98E3A0" />
          <stop offset="1" stopColor="#98E3A0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_271_1372"
          x1="100.171"
          y1="633.223"
          x2="100.171"
          y2="973.535"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.316415" stopColor="#79DA83" />
          <stop offset="1" stopColor="#00A69F" />
        </linearGradient>
        <linearGradient
          id="paint_leaf_front"
          x1="339.772"
          y1="462.809"
          x2="339.772"
          y2="1005.61"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BEE398" />
          <stop offset="0.144497" stopColor="#81DDA0" />
          <stop offset="0.373055" stopColor="#66D59F" />
          <stop offset="0.612327" stopColor="#06AE9D" />
        </linearGradient>
      </defs>
    </svg>
  )
}
