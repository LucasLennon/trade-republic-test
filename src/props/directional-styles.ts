export interface Directions {
  top: string;
  right: string;
  bottom: string;
  left: string;
}

export interface Axis {
  x: string;
  y: string;
}

export interface DirectionalStyle {
  single: string;
  axis: Axis;
  directions: Directions;
}

export const createStyle = (values: DirectionalStyle): string => {
  const { single, axis, directions } = values;
  if (single) {
    return `${single}`;
  }

  if (Object.values(axis).filter((item) => item).length > 0) {
    return `${axis.y || 0} ${axis.x || 0}`;
  }

  if (Object.values(directions).filter((item) => item).length > 0) {
    return `${directions.top || 0} ${directions.right || 0} ${directions.bottom || 0} ${
      directions.left || 0
    }`;
  }

  return '';
};
