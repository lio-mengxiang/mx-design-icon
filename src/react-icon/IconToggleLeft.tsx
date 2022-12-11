
  import * as React from 'react';
  import Icon from '../icon';
  import type { IconProps } from '../icon/interface';

  const IconToggleLeftIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
    return React.createElement(Icon, {
      ...props,
      component: () => (
        <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
          <path d="M874.666667 800H149.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h725.333334c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32zM149.333333 224h725.333334c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32H149.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32zM341.333333 480c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h512c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32H341.333333z"></path>
        </svg>
      ),
    });
  };

  export default React.forwardRef(IconToggleLeftIcon);
  