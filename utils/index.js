export const roundFrame = (x, framerate = 0.0176666667) => {
  return Math.ceil(x / framerate) * framerate - framerate * 2
}

export const setCSSVariable = (name, value) => {
  document.documentElement.style.setProperty(`--${name}`, value)
}
