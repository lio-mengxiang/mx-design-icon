
  import * as React from 'react';
  import Icon from '../icon';
  import type { IconProps } from '../icon/interface';

  const IconDiscountIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
    return React.createElement(Icon, {
      ...props,
      component: () => (
        <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
          <path d="M874.666667 96H593.066667c-19.2 0-38.4 8.533333-53.333334 21.333333l-405.333333 405.333334c-29.866667 29.866667-29.866667 76.8 0 104.533333l260.266667 260.266667c14.933333 14.933333 32 21.333333 53.333333 21.333333s38.4-8.533333 53.333333-21.333333l405.333334-405.333334c14.933333-14.933333 21.333333-32 21.333333-53.333333V149.333333c0-29.866667-23.466667-53.333333-53.333333-53.333333z m-10.666667 334.933333c0 2.133333-2.133333 6.4-2.133333 8.533334l-405.333334 405.333333c-2.133333 2.133333-6.4 2.133333-8.533333 2.133333s-4.266667 0-8.533333-2.133333L181.333333 584.533333c-4.266667-4.266667-4.266667-10.666667 0-14.933333l405.333334-405.333333c2.133333-2.133333 4.266667-2.133333 8.533333-2.133334h270.933333v268.8z"></path>
        </svg>
      ),
    });
  };

  export default React.forwardRef(IconDiscountIcon);
  