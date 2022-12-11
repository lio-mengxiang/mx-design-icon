
  import * as React from 'react';
  import Icon from '../icon';
  import type { IconProps } from '../icon/interface';

  const IconHistoryIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
    return React.createElement(Icon, {
      ...props,
      component: () => (
        <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
          <path d="M411.733333 885.333333H192c-6.4 0-10.666667-4.266667-10.666667-10.666666V149.333333c0-6.4 4.266667-10.666667 10.666667-10.666666h576c6.4 0 10.666667 4.266667 10.666667 10.666666v219.733334c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V149.333333c0-40.533333-34.133333-74.666667-74.666667-74.666666H192C151.466667 74.666667 117.333333 108.8 117.333333 149.333333v725.333334c0 40.533333 34.133333 74.666667 74.666667 74.666666h219.733333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z"></path>
        </svg>
      ),
    });
  };

  export default React.forwardRef(IconHistoryIcon);
  