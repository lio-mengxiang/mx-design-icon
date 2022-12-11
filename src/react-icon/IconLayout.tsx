
  import * as React from 'react';
  import Icon from '../icon';
  import type { IconProps } from '../icon/interface';

  const IconLayoutIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
    return React.createElement(Icon, {
      ...props,
      component: () => (
        <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
          <path d="M853.333333 96H170.666667C130.133333 96 96 130.133333 96 170.666667v682.666666c0 40.533333 34.133333 74.666667 74.666667 74.666667h682.666666c40.533333 0 74.666667-34.133333 74.666667-74.666667V170.666667c0-40.533333-34.133333-74.666667-74.666667-74.666667z m-682.666666 64h682.666666c6.4 0 10.666667 4.266667 10.666667 10.666667v213.333333h-704V170.666667c0-6.4 4.266667-10.666667 10.666667-10.666667zM160 853.333333V448H341.333333v416H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667z m693.333333 10.666667H405.333333V448h458.666667v405.333333c0 6.4-4.266667 10.666667-10.666667 10.666667z"></path>
        </svg>
      ),
    });
  };

  export default React.forwardRef(IconLayoutIcon);
  