
  import * as React from 'react';
  import Icon from '../icon';
  import type { IconProps } from '../icon/interface';

  const IconNotificationFillingIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
    return React.createElement(Icon, {
      ...props,
      component: () => (
        <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
          <path d="M388.266667 874.666667c23.466667 44.8 70.4 74.666667 123.733333 74.666666s100.266667-29.866667 123.733333-74.666666H388.266667zM885.333333 780.8c-2.133333-70.4-29.866667-128-81.066666-172.8l-4.266667-4.266667V448c0-117.333333-70.4-217.6-170.666667-262.4-4.266667-61.866667-55.466667-110.933333-117.333333-110.933333s-113.066667 49.066667-117.333333 110.933333c-100.266667 44.8-170.666667 145.066667-170.666667 262.4v155.733333l-4.266667 4.266667c-53.333333 46.933333-81.066667 108.8-81.066666 181.333333 0 17.066667 14.933333 32 32 32h682.666666c17.066667 0 32-14.933333 32-32v-8.533333z"></path>
        </svg>
      ),
    });
  };

  export default React.forwardRef(IconNotificationFillingIcon);
  