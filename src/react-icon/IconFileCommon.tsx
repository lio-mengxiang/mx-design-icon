
  import * as React from 'react';
  import Icon from '../icon';
  import type { IconProps } from '../icon/interface';

  const IconFileCommonIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
    return React.createElement(Icon, {
      ...props,
      component: () => (
        <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
          <path d="M832 74.666667H192c-17.066667 0-32 14.933333-32 32v765.866666c0 12.8 4.266667 23.466667 12.8 34.133334 8.533333 10.666667 21.333333 17.066667 36.266667 19.2h6.4c12.8 0 23.466667-4.266667 34.133333-12.8l264.533333-213.333334 264.533334 213.333334c8.533333 8.533333 21.333333 12.8 34.133333 12.8 29.866667 0 53.333333-23.466667 53.333333-53.333334V106.666667c-2.133333-17.066667-17.066667-32-34.133333-32z m-32 776.533333L531.2 633.6c-10.666667-8.533333-27.733333-8.533333-40.533333 0L224 851.2V138.666667h576v712.533333z"></path>
        </svg>
      ),
    });
  };

  export default React.forwardRef(IconFileCommonIcon);
  