
  import * as React from 'react';
  import Icon from '../icon';
  import type { IconProps } from '../icon/interface';

  const IconArrowLeftFillingIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
    return React.createElement(Icon, {
      ...props,
      component: () => (
        <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
          <path d="M268.8 480L633.6 149.333333c17.066667-14.933333 44.8-14.933333 59.733333 2.133334 6.4 8.533333 10.666667 19.2 10.666667 29.866666v661.333334c0 23.466667-19.2 42.666667-42.666667 42.666666-10.666667 0-21.333333-4.266667-27.733333-10.666666l-362.666667-330.666667c-17.066667-14.933333-19.2-42.666667-2.133333-59.733333-2.133333-2.133333 0-2.133333 0-4.266667z"></path>
        </svg>
      ),
    });
  };

  export default React.forwardRef(IconArrowLeftFillingIcon);
  