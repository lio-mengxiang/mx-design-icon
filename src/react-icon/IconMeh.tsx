
  import * as React from 'react';
  import Icon from '../icon';
  import type { IconProps } from '../icon/interface';

  const IconMehIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
    return React.createElement(Icon, {
      ...props,
      component: () => (
        <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
          <path d="M512 949.333333C270.933333 949.333333 74.666667 753.066667 74.666667 512S270.933333 74.666667 512 74.666667 949.333333 270.933333 949.333333 512 753.066667 949.333333 512 949.333333z m0-810.666666C307.2 138.666667 138.666667 307.2 138.666667 512S307.2 885.333333 512 885.333333 885.333333 716.8 885.333333 512 716.8 138.666667 512 138.666667z"></path>
        </svg>
      ),
    });
  };

  export default React.forwardRef(IconMehIcon);
  