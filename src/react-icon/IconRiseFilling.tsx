import * as React from 'react';
import Icon from '../icon';
import type { IconProps } from '../icon/interface';

const IconRiseFillingIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
  return React.createElement(Icon, {
    ...props,
    component: () => (
      <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
        <path d="M629.333333 853.333333h-234.666666c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h234.666666c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32zM842.666667 360.533333L535.466667 113.066667c-12.8-8.533333-27.733333-8.533333-40.533334 0L183.466667 360.533333c-6.4 6.4-12.8 14.933333-12.8 23.466667 0 2.133333 0 6.4 2.133333 8.533333 2.133333 12.8 14.933333 21.333333 27.733333 21.333334h155.733334v236.8c0 19.2 12.8 29.866667 32 29.866666h249.6c21.333333 0 34.133333-12.8 34.133333-29.866666v-234.666667h151.466667c12.8 0 25.6-8.533333 27.733333-21.333333s0-25.6-8.533333-34.133334zM629.333333 746.666667h-234.666666c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h234.666666c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z"></path>
      </svg>
    ),
  });
};

export default React.forwardRef(IconRiseFillingIcon);
