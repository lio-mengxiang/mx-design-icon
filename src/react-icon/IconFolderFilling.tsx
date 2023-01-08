import * as React from 'react';
import Icon from '../icon';
import type { IconProps } from '../icon/interface';

const IconFolderFillingIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
  return React.createElement(Icon, {
    ...props,
    component: () => (
      <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
        <path d="M403.2 160c25.6 0 51.2 12.8 64 36.266667l38.4 66.133333c2.133333 4.266667 6.4 4.266667 8.533333 4.266667H853.333333c40.533333 0 74.666667 34.133333 74.666667 74.666666v448c0 40.533333-34.133333 74.666667-74.666667 74.666667H170.666667c-40.533333 0-74.666667-34.133333-74.666667-74.666667V234.666667c0-40.533333 34.133333-74.666667 74.666667-74.666667h232.533333z m87.466667 256H253.866667c-17.066667 2.133333-29.866667 14.933333-29.866667 32s14.933333 32 32 32h236.8c17.066667-2.133333 29.866667-14.933333 29.866667-32s-14.933333-32-32-32z"></path>
      </svg>
    ),
  });
};

export default React.forwardRef(IconFolderFillingIcon);
