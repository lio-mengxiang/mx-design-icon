import * as React from 'react';
import Icon from '../icon';
import type { IconProps } from '../icon/interface';

const IconDirectionDownIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
  return React.createElement(Icon, {
    ...props,
    component: () => (
      <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
        <path d="M898.133333 512c-12.8-12.8-32-12.8-44.8-2.133333L544 800V149.333333c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v650.666667L170.666667 509.866667c-12.8-12.8-34.133333-10.666667-44.8 2.133333-12.8 12.8-10.666667 34.133333 2.133333 44.8l362.666667 341.333333c2.133333 2.133333 6.4 4.266667 8.533333 6.4 4.266667 2.133333 6.4 2.133333 10.666667 2.133334s8.533333 0 10.666666-2.133334c4.266667-2.133333 6.4-4.266667 8.533334-6.4l362.666666-341.333333c17.066667-12.8 19.2-32 6.4-44.8z"></path>
      </svg>
    ),
  });
};

export default React.forwardRef(IconDirectionDownIcon);
