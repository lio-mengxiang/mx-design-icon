
  import * as React from 'react';
  import Icon from '../icon';
  import type { IconProps } from '../icon/interface';

  const IconCheckItemFillingIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
    return React.createElement(Icon, {
      ...props,
      component: () => (
        <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
          <path d="M853.333333 96c40.533333 0 74.666667 34.133333 74.666667 74.666667v682.666666c0 40.533333-34.133333 74.666667-74.666667 74.666667H170.666667c-40.533333 0-74.666667-34.133333-74.666667-74.666667V170.666667c0-40.533333 34.133333-74.666667 74.666667-74.666667h682.666666zM748.8 384c-12.8-12.8-32-12.8-44.8 0L460.8 616.533333 343.466667 490.666667l-2.133334-2.133334c-12.8-10.666667-29.866667-10.666667-42.666666 0-12.8 12.8-12.8 32-2.133334 44.8l140.8 149.333334 2.133334 2.133333c12.8 10.666667 32 10.666667 42.666666-2.133333L746.666667 426.666667l2.133333-2.133334c10.666667-10.666667 10.666667-29.866667 0-40.533333z"></path>
        </svg>
      ),
    });
  };

  export default React.forwardRef(IconCheckItemFillingIcon);
  