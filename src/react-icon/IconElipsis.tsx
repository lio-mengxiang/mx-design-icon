
  import * as React from 'react';
  import Icon from '../icon';
  import type { IconProps } from '../icon/interface';

  const IconElipsisIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
    return React.createElement(Icon, {
      ...props,
      component: () => (
        <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
          <path d="M192 512m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"></path>
        </svg>
      ),
    });
  };

  export default React.forwardRef(IconElipsisIcon);
  