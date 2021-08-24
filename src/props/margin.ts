import { createStyle, DirectionalStyle } from './directional-styles';

interface Props {
  m: string;
  mx: string;
  my: string;
  mt: string;
  mb: string;
  mr: string;
  ml: string;
}

type MarginPropsStyleResponse = { margin: string };

const commonPropOptions = {
  type: [String, Number],
  required: false,
  default: '',
};

export const marginPropsDefinition = {
  m: commonPropOptions,
  mx: commonPropOptions,
  my: commonPropOptions,
  mt: commonPropOptions,
  mb: commonPropOptions,
  mr: commonPropOptions,
  ml: commonPropOptions,
};

export const marginPropsStyle = ({
  m,
  mx,
  my,
  mt,
  mb,
  mr,
  ml,
}: Props): MarginPropsStyleResponse => {
  const styles: DirectionalStyle = {
    single: m,
    axis: {
      y: my,
      x: mx,
    },
    directions: {
      top: mt,
      bottom: mb,
      right: mr,
      left: ml,
    },
  };

  return { margin: createStyle(styles) };
};
