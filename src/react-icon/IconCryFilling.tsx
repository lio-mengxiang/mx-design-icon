
  import * as React from 'react';
  import Icon from '../icon';
  import type { IconProps } from '../icon/interface';

  const IconCryFillingIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
    return React.createElement(Icon, {
      ...props,
      component: () => (
        <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
          <path d="M512 74.666667c241.066667 0 437.333333 196.266667 437.333333 437.333333S753.066667 949.333333 512 949.333333 74.666667 753.066667 74.666667 512 270.933333 74.666667 512 74.666667zM512 597.333333c-81.066667 0-151.466667 36.266667-211.2 106.666667-10.666667 12.8-8.533333 34.133333 4.266667 44.8s34.133333 8.533333 44.8-4.266667c46.933333-57.6 100.266667-85.333333 162.133333-85.333333s115.2 27.733333 162.133333 85.333333c10.666667 12.8 32 14.933333 44.8 4.266667 12.8-10.666667 14.933333-32 4.266667-44.8-59.733333-70.4-130.133333-106.666667-211.2-106.666667z m-149.333333-234.666666c-23.466667 0-42.666667 19.2-42.666667 42.666666v66.133334c2.133333 21.333333 19.2 40.533333 42.666667 40.533333s42.666667-19.2 42.666666-42.666667v-66.133333c-2.133333-23.466667-19.2-40.533333-42.666666-40.533333z m298.666666 0c-23.466667 0-42.666667 19.2-42.666666 42.666666v66.133334c2.133333 21.333333 19.2 40.533333 42.666666 40.533333s42.666667-19.2 42.666667-42.666667v-66.133333c-2.133333-23.466667-19.2-40.533333-42.666667-40.533333z"></path>
        </svg>
      ),
    });
  };

  export default React.forwardRef(IconCryFillingIcon);
  