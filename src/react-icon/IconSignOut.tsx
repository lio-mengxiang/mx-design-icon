
  import * as React from 'react';
  import Icon from '../icon';
  import type { IconProps } from '../icon/interface';

  const IconSignOutIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
    return React.createElement(Icon, {
      ...props,
      component: () => (
        <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
          <path d="M919.466667 488.533333l-149.333334-149.333333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l93.866667 93.866667H522.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h296.533333L725.333333 635.733333c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466667 8.533334s17.066667-2.133333 23.466667-8.533334l149.333333-149.333333c8.533333-8.533333 8.533333-29.866667-2.133333-42.666667z"></path>
        </svg>
      ),
    });
  };

  export default React.forwardRef(IconSignOutIcon);
  