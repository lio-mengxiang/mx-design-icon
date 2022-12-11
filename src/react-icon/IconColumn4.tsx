
  import * as React from 'react';
  import Icon from '../icon';
  import type { IconProps } from '../icon/interface';

  const IconColumn4Icon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
    return React.createElement(Icon, {
      ...props,
      component: () => (
        <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
          <path d="M874.666667 117.333333H149.333333C108.8 117.333333 74.666667 151.466667 74.666667 192v640c0 40.533333 34.133333 74.666667 74.666666 74.666667h725.333334c40.533333 0 74.666667-34.133333 74.666666-74.666667V192c0-40.533333-34.133333-74.666667-74.666666-74.666667z m-330.666667 64h128v661.333334h-128v-661.333334z m-64 661.333334h-128v-661.333334h128v661.333334z m-341.333333-10.666667V192c0-6.4 4.266667-10.666667 10.666666-10.666667h138.666667v661.333334H149.333333c-6.4 0-10.666667-4.266667-10.666666-10.666667z m746.666666 0c0 6.4-4.266667 10.666667-10.666666 10.666667h-138.666667v-661.333334H874.666667c6.4 0 10.666667 4.266667 10.666666 10.666667v640z"></path>
        </svg>
      ),
    });
  };

  export default React.forwardRef(IconColumn4Icon);
  