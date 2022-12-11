
  import * as React from 'react';
  import Icon from '../icon';
  import type { IconProps } from '../icon/interface';

  const IconDataViewIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
    return React.createElement(Icon, {
      ...props,
      component: () => (
        <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
          <path d="M874.666667 864H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667V149.333333c0-17.066667-14.933333-32-32-32S96 132.266667 96 149.333333v704c0 40.533333 34.133333 74.666667 74.666667 74.666667h704c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z"></path>
        </svg>
      ),
    });
  };

  export default React.forwardRef(IconDataViewIcon);
  