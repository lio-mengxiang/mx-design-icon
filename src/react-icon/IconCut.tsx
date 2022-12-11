
  import * as React from 'react';
  import Icon from '../icon';
  import type { IconProps } from '../icon/interface';

  const IconCutIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
    return React.createElement(Icon, {
      ...props,
      component: () => (
        <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
          <path d="M917.333333 202.666667h-96V106.666667c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v96H277.333333c-40.533333 0-74.666667 34.133333-74.666666 74.666666v480H106.666667c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h96V917.333333c0 17.066667 14.933333 32 32 32s32-14.933333 32-32v-96H746.666667c40.533333 0 74.666667-34.133333 74.666666-74.666666V266.666667H917.333333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32zM757.333333 746.666667c0 6.4-4.266667 10.666667-10.666666 10.666666H266.666667V277.333333c0-6.4 4.266667-10.666667 10.666666-10.666666h480V746.666667z"></path>
        </svg>
      ),
    });
  };

  export default React.forwardRef(IconCutIcon);
  