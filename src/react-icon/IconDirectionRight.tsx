import * as React from 'react';
import Icon from '../icon';
import type { IconProps } from '../icon/interface';

const IconDirectionRightIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
  return React.createElement(Icon, {
    ...props,
    component: () => (
      <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
        <path d="M904.533333 522.666667c2.133333-4.266667 2.133333-6.4 2.133334-10.666667s0-8.533333-2.133334-10.666667c-2.133333-4.266667-4.266667-6.4-6.4-8.533333l-341.333333-362.666667c-12.8-12.8-32-12.8-44.8-2.133333-12.8 12.8-12.8 32-2.133333 44.8l290.133333 309.333333H149.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h650.666667L509.866667 853.333333c-12.8 12.8-10.666667 34.133333 2.133333 44.8 6.4 6.4 14.933333 8.533333 21.333333 8.533334 8.533333 0 17.066667-4.266667 23.466667-10.666667l341.333333-362.666667c2.133333-2.133333 4.266667-6.4 6.4-10.666666z"></path>
      </svg>
    ),
  });
};

export default React.forwardRef(IconDirectionRightIcon);
