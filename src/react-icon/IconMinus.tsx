
  import * as React from 'react';
  import Icon from '../icon';
  import type { IconProps } from '../icon/interface';

  const IconMinusIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
    return React.createElement(Icon, {
      ...props,
      component: () => (
        <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
          <path d="M853.333333 544H170.666667c-17.066667 0-32-14.933333-32-32s14.933333-32 32-32h682.666666c17.066667 0 32 14.933333 32 32s-14.933333 32-32 32z"></path>
        </svg>
      ),
    });
  };

  export default React.forwardRef(IconMinusIcon);
  