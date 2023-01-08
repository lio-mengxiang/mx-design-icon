import * as React from 'react';
import Icon from '../icon';
import type { IconProps } from '../icon/interface';

const IconLoadingIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
  return React.createElement(Icon, {
    ...props,
    component: () => (
      <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
        <path d="M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"></path>
      </svg>
    ),
  });
};

export default React.forwardRef(IconLoadingIcon);
