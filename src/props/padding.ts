import { createStyle, DirectionalStyle } from './directional-styles';

interface Props {
  p: string;
  px: string;
  py: string;
  pt: string;
  pb: string;
  pr: string;
  pl: string;
}

type PaddingPropsStyleResponse = { padding: string };

const commonPropOptions = {
  type: [String, Number],
  required: false,
  default: '',
};

export const paddingPropsDefinition = {
  p: commonPropOptions,
  px: commonPropOptions,
  py: commonPropOptions,
  pt: commonPropOptions,
  pb: commonPropOptions,
  pr: commonPropOptions,
  pl: commonPropOptions,
};

export const paddingPropsStyle = ({
  p,
  px,
  py,
  pt,
  pb,
  pr,
  pl,
}: Props): PaddingPropsStyleResponse => {
  const styles: DirectionalStyle = {
    single: p,
    axis: {
      y: py,
      x: px,
    },
    directions: {
      top: pt,
      bottom: pb,
      right: pr,
      left: pl,
    },
  };

  return { padding: createStyle(styles) };
};
