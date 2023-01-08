import * as React from 'react';
import Icon from '../icon';
import type { IconProps } from '../icon/interface';

const IconClockFillingIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
  return React.createElement(Icon, {
    ...props,
    component: () => (
      <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
        <path d="M512 74.666667c241.066667 0 437.333333 196.266667 437.333333 437.333333S753.066667 949.333333 512 949.333333 74.666667 753.066667 74.666667 512 270.933333 74.666667 512 74.666667z m0 170.666666c-17.066667 0-32 14.933333-32 32V518.4c2.133333 10.666667 8.533333 21.333333 19.2 25.6l170.666667 81.066667 2.133333 2.133333c14.933333 6.4 32-2.133333 40.533333-17.066667l2.133334-2.133333c6.4-14.933333-2.133333-32-17.066667-40.533333l-151.466667-70.4V275.2c-4.266667-17.066667-17.066667-29.866667-34.133333-29.866667z"></path>
      </svg>
    ),
  });
};

export default React.forwardRef(IconClockFillingIcon);
