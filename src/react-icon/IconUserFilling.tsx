import * as React from 'react';
import Icon from '../icon';
import type { IconProps } from '../icon/interface';

const IconUserFillingIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
  return React.createElement(Icon, {
    ...props,
    component: () => (
      <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
        <path d="M512 74.666667C270.933333 74.666667 74.666667 270.933333 74.666667 512S270.933333 949.333333 512 949.333333 949.333333 753.066667 949.333333 512 753.066667 74.666667 512 74.666667z m0 160c70.4 0 128 57.6 128 128s-57.6 128-128 128-128-57.6-128-128 57.6-128 128-128z m236.8 507.733333c-23.466667 32-117.333333 100.266667-236.8 100.266667s-213.333333-68.266667-236.8-100.266667c-8.533333-10.666667-10.666667-21.333333-8.533333-32 29.866667-110.933333 130.133333-187.733333 245.333333-187.733333s215.466667 76.8 245.333333 187.733333c2.133333 10.666667 0 21.333333-8.533333 32z"></path>
      </svg>
    ),
  });
};

export default React.forwardRef(IconUserFillingIcon);
