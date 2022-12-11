
  import * as React from 'react';
  import Icon from '../icon';
  import type { IconProps } from '../icon/interface';

  const IconPromptFillingIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
    return React.createElement(Icon, {
      ...props,
      component: () => (
        <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
          <path d="M512 74.666667c241.066667 0 437.333333 196.266667 437.333333 437.333333S753.066667 949.333333 512 949.333333 74.666667 753.066667 74.666667 512 270.933333 74.666667 512 74.666667z m0 341.333333c-17.066667 0-32 14.933333-32 32v300.8c2.133333 17.066667 14.933333 29.866667 32 29.866667s32-14.933333 32-32V445.866667c-2.133333-17.066667-14.933333-29.866667-32-29.866667z m0-160c-23.466667 0-42.666667 19.2-42.666667 42.666667s19.2 42.666667 42.666667 42.666666 42.666667-19.2 42.666667-42.666666-19.2-42.666667-42.666667-42.666667z"></path>
        </svg>
      ),
    });
  };

  export default React.forwardRef(IconPromptFillingIcon);
  