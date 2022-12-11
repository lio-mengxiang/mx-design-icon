
  import * as React from 'react';
  import Icon from '../icon';
  import type { IconProps } from '../icon/interface';

  const IconFilterFillingIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
    return React.createElement(Icon, {
      ...props,
      component: () => (
        <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
          <path d="M825.6 117.333333H198.4C157.866667 117.333333 123.733333 151.466667 123.733333 192v4.266667c0 14.933333 6.4 32 17.066667 42.666666l256 302.933334v251.733333c0 12.8 6.4 23.466667 17.066667 27.733333l162.133333 81.066667 2.133333 2.133333c21.333333 8.533333 42.666667-6.4 42.666667-29.866666V541.866667l256-302.933334c27.733333-32 23.466667-78.933333-8.533333-104.533333-8.533333-10.666667-25.6-17.066667-42.666667-17.066667z"></path>
        </svg>
      ),
    });
  };

  export default React.forwardRef(IconFilterFillingIcon);
  