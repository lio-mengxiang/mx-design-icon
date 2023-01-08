import * as React from 'react';
import Icon from '../icon';
import type { IconProps } from '../icon/interface';

const IconSelectBoldIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
  return React.createElement(Icon, {
    ...props,
    component: () => (
      <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
        <path d="M883.2 247.466667c-17.066667-17.066667-44.8-17.066667-59.733333 0L409.6 665.6l-209.066667-204.8c-17.066667-17.066667-44.8-17.066667-59.733333 0-17.066667 17.066667-17.066667 44.8 0 59.733333l238.933333 234.666667c8.533333 8.533333 19.2 12.8 29.866667 12.8 10.666667 0 21.333333-4.266667 29.866667-12.8l443.733333-448c17.066667-17.066667 17.066667-42.666667 0-59.733333z"></path>
      </svg>
    ),
  });
};

export default React.forwardRef(IconSelectBoldIcon);
