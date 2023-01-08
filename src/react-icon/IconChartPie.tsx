import * as React from 'react';
import Icon from '../icon';
import type { IconProps } from '../icon/interface';

const IconChartPieIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
  return React.createElement(Icon, {
    ...props,
    component: () => (
      <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
        <path d="M887.466667 642.133333c-17.066667-6.4-34.133333 0-42.666667 17.066667-64 151.466667-221.866667 243.2-386.133333 221.866667-164.266667-21.333333-294.4-149.333333-315.733334-313.6C119.466667 405.333333 209.066667 245.333333 358.4 179.2c17.066667-6.4 23.466667-25.6 17.066667-42.666667-6.4-17.066667-25.6-23.466667-42.666667-17.066666C155.733333 198.4 51.2 386.133333 78.933333 578.133333c27.733333 192 179.2 343.466667 371.2 369.066667 19.2 2.133333 36.266667 4.266667 55.466667 4.266667 170.666667 0 330.666667-102.4 398.933333-264.533334 6.4-17.066667-2.133333-36.266667-17.066666-44.8z"></path>
      </svg>
    ),
  });
};

export default React.forwardRef(IconChartPieIcon);
