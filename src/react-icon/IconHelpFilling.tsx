
  import * as React from 'react';
  import Icon from '../icon';
  import type { IconProps } from '../icon/interface';

  const IconHelpFillingIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
    return React.createElement(Icon, {
      ...props,
      component: () => (
        <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
          <path d="M512 74.666667c241.066667 0 437.333333 196.266667 437.333333 437.333333S753.066667 949.333333 512 949.333333 74.666667 753.066667 74.666667 512 270.933333 74.666667 512 74.666667zM512 704c-23.466667 0-42.666667 19.2-42.666667 42.666667s19.2 42.666667 42.666667 42.666666 42.666667-19.2 42.666667-42.666666-19.2-42.666667-42.666667-42.666667z m0-458.666667c-76.8 0-138.666667 61.866667-138.666667 138.666667 0 17.066667 14.933333 32 32 32s32-14.933333 32-32c0-40.533333 34.133333-74.666667 74.666667-74.666667s74.666667 34.133333 74.666667 74.666667c0 2.133333 0 6.4-2.133334 10.666667-6.4 14.933333-19.2 32-40.533333 51.2-10.666667 10.666667-21.333333 19.2-34.133333 27.733333-2.133333 2.133333-6.4 4.266667-8.533334 6.4l-6.4 4.266667c-8.533333 6.4-14.933333 17.066667-14.933333 27.733333v108.8c2.133333 17.066667 14.933333 29.866667 32 29.866667h2.133333c17.066667-2.133333 29.866667-14.933333 29.866667-32v-89.6l12.8-10.666667c10.666667-8.533333 19.2-17.066667 29.866667-25.6 27.733333-25.6 46.933333-49.066667 57.6-74.666667 4.266667-10.666667 6.4-23.466667 6.4-34.133333 0-76.8-61.866667-138.666667-138.666667-138.666667z"></path>
        </svg>
      ),
    });
  };

  export default React.forwardRef(IconHelpFillingIcon);
  