
  import * as React from 'react';
  import Icon from '../icon';
  import type { IconProps } from '../icon/interface';

  const IconColumnVerticalIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
    return React.createElement(Icon, {
      ...props,
      component: () => (
        <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
          <path d="M874.666667 117.333333H149.333333C108.8 117.333333 74.666667 151.466667 74.666667 192v640c0 40.533333 34.133333 74.666667 74.666666 74.666667h725.333334c40.533333 0 74.666667-34.133333 74.666666-74.666667V192c0-40.533333-34.133333-74.666667-74.666666-74.666667z m-725.333334 64h725.333334c6.4 0 10.666667 4.266667 10.666666 10.666667v288h-746.666666V192c0-6.4 4.266667-10.666667 10.666666-10.666667z m725.333334 661.333334H149.333333c-6.4 0-10.666667-4.266667-10.666666-10.666667V544h746.666666V832c0 6.4-4.266667 10.666667-10.666666 10.666667z"></path>
        </svg>
      ),
    });
  };

  export default React.forwardRef(IconColumnVerticalIcon);
  