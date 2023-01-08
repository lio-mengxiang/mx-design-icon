import * as React from 'react';
import Icon from '../icon';
import type { IconProps } from '../icon/interface';

const IconTopFillingIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
  return React.createElement(Icon, {
    ...props,
    component: () => (
      <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
        <path d="M535.466667 241.066667c-12.8-8.533333-27.733333-8.533333-40.533334 0L183.466667 488.533333c-6.4 6.4-12.8 14.933333-12.8 23.466667 0 2.133333 0 6.4 2.133333 8.533333 2.133333 12.8 14.933333 21.333333 27.733333 21.333334h155.733334v322.133333c0 19.2 12.8 29.866667 32 29.866667h249.6c21.333333 0 34.133333-12.8 34.133333-29.866667v-320h151.466667c12.8 0 25.6-8.533333 27.733333-21.333333s0-25.6-8.533333-34.133334L535.466667 241.066667zM864 96h-704C142.933333 96 128 110.933333 128 128s14.933333 32 32 32h704c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z"></path>
      </svg>
    ),
  });
};

export default React.forwardRef(IconTopFillingIcon);
