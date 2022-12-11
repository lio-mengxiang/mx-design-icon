
  import * as React from 'react';
  import Icon from '../icon';
  import type { IconProps } from '../icon/interface';

  const IconNewsFillingIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
    return React.createElement(Icon, {
      ...props,
      component: () => (
        <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
          <path d="M512 516.266667l388.266667-245.333334 49.066666-32c-6.4-34.133333-36.266667-59.733333-72.533333-59.733333H149.333333c-36.266667 0-66.133333 25.6-72.533333 57.6l46.933333 32L512 516.266667z"></path>
        </svg>
      ),
    });
  };

  export default React.forwardRef(IconNewsFillingIcon);
  