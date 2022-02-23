export const roundFrame = (x, framerate = 0.0176666667) => {
  return Math.ceil(x / framerate) * framerate;
};
