import * as React from 'react';
import Icon from '../icon';
import type { IconProps } from '../icon/interface';

const IconSelectIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
  return React.createElement(Icon, {
    ...props,
    component: () => (
      <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
        <path d="M409.6 757.333333c-8.533333 0-17.066667-2.133333-23.466667-8.533333l-238.933333-234.666667c-12.8-12.8-12.8-32 0-44.8 12.8-12.8 32-12.8 44.8 0l215.466667 213.333334 422.4-428.8c12.8-12.8 32-12.8 44.8 0 12.8 12.8 12.8 32 0 44.8L430.933333 746.666667c-4.266667 8.533333-12.8 10.666667-21.333333 10.666666z"></path>
      </svg>
    ),
  });
};

export default React.forwardRef(IconSelectIcon);
