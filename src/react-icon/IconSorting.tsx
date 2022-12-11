
  import * as React from 'react';
  import Icon from '../icon';
  import type { IconProps } from '../icon/interface';

  const IconSortingIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
    return React.createElement(Icon, {
      ...props,
      component: () => (
        <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
          <path d="M273.066667 405.333333h475.733333c10.666667 0 21.333333-4.266667 29.866667-12.8 17.066667-17.066667 17.066667-42.666667 0-59.733333L541.866667 93.866667c-17.066667-17.066667-42.666667-17.066667-59.733334 0L243.2 332.8c-8.533333 8.533333-12.8 19.2-12.8 29.866667 0 23.466667 19.2 42.666667 42.666667 42.666666zM750.933333 618.666667H273.066667c-10.666667 0-21.333333 4.266667-29.866667 12.8-17.066667 17.066667-17.066667 42.666667 0 59.733333l238.933333 238.933333c17.066667 17.066667 42.666667 17.066667 59.733334 0l238.933333-238.933333c8.533333-8.533333 12.8-19.2 12.8-29.866667 0-23.466667-19.2-42.666667-42.666667-42.666666z"></path>
        </svg>
      ),
    });
  };

  export default React.forwardRef(IconSortingIcon);
  