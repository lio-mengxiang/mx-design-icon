
  import * as React from 'react';
  import Icon from '../icon';
  import type { IconProps } from '../icon/interface';

  const IconFavoriteIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
    return React.createElement(Icon, {
      ...props,
      component: () => (
        <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
          <path d="M934.4 356.266667c-8.533333-10.666667-21.333333-19.2-34.133333-21.333334l-234.666667-34.133333-104.533333-213.333333c-6.4-8.533333-14.933333-17.066667-25.6-23.466667-12.8-6.4-27.733333-6.4-40.533334-2.133333-12.8 4.266667-23.466667 14.933333-29.866666 27.733333l-104.533334 213.333333-234.666666 34.133334c-10.666667 2.133333-21.333333 6.4-29.866667 14.933333-21.333333 21.333333-19.2 55.466667 0 74.666667l170.666667 166.4-40.533334 234.666666c-2.133333 10.666667 0 23.466667 6.4 34.133334 12.8 25.6 46.933333 36.266667 72.533334 21.333333l211.2-110.933333 211.2 110.933333c8.533333 4.266667 17.066667 6.4 25.6 6.4h8.533333c14.933333-2.133333 25.6-10.666667 34.133333-21.333333 8.533333-10.666667 10.666667-25.6 8.533334-40.533334l-40.533334-234.666666 170.666667-166.4c8.533333-8.533333 14.933333-19.2 14.933333-29.866667-2.133333-14.933333-6.4-27.733333-14.933333-40.533333z m-224 194.133333c-12.8 12.8-19.2 29.866667-14.933333 46.933333l38.4 217.6L512 699.733333l-221.866667 115.2L328.533333 597.333333c2.133333-17.066667-2.133333-34.133333-14.933333-46.933333l-157.866667-153.6 219.733334-32c17.066667-2.133333 32-12.8 40.533333-29.866667L512 136.533333l98.133333 198.4c8.533333 14.933333 23.466667 27.733333 40.533334 29.866667l219.733333 32-160 153.6z"></path>
        </svg>
      ),
    });
  };

  export default React.forwardRef(IconFavoriteIcon);
  