
  import * as React from 'react';
  import Icon from '../icon';
  import type { IconProps } from '../icon/interface';

  const IconPictureFillingIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
    return React.createElement(Icon, {
      ...props,
      component: () => (
        <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
          <path d="M853.333333 96c40.533333 0 74.666667 34.133333 74.666667 74.666667v682.666666c0 40.533333-34.133333 74.666667-74.666667 74.666667H170.666667c-40.533333 0-74.666667-34.133333-74.666667-74.666667V170.666667c0-40.533333 34.133333-74.666667 74.666667-74.666667h682.666666zM746.666667 469.333333c-10.666667-12.8-32-14.933333-44.8-2.133333L320 808.533333l-2.133333 2.133334c-19.2 19.2-4.266667 53.333333 23.466666 53.333333h492.8c17.066667-2.133333 29.866667-14.933333 29.866667-32v-196.266667c0-6.4-2.133333-10.666667-6.4-14.933333l-108.8-149.333333-2.133333-2.133334z m-394.666667-202.666666c-46.933333 0-85.333333 38.4-85.333333 85.333333s38.4 85.333333 85.333333 85.333333 85.333333-38.4 85.333333-85.333333-38.4-85.333333-85.333333-85.333333z"></path>
        </svg>
      ),
    });
  };

  export default React.forwardRef(IconPictureFillingIcon);
  