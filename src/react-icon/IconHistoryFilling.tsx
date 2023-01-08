import * as React from 'react';
import Icon from '../icon';
import type { IconProps } from '../icon/interface';

const IconHistoryFillingIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
  return React.createElement(Icon, {
    ...props,
    component: () => (
      <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
        <path d="M768 74.666667c40.533333 0 72.533333 32 74.666667 70.4v294.4c-40.533333-21.333333-89.6-34.133333-138.666667-34.133334-164.266667 0-298.666667 134.4-298.666667 298.666667 0 102.4 51.2 192 128 245.333333H192c-40.533333 0-72.533333-32-74.666667-70.4V149.333333c0-40.533333 32-72.533333 70.4-74.666666H768z m-405.333333 362.666666h-108.8c-17.066667 2.133333-29.866667 14.933333-29.866667 32s12.8 29.866667 29.866667 32H364.8c17.066667-2.133333 29.866667-14.933333 29.866667-32s-14.933333-32-32-32z m320-170.666666H253.866667c-17.066667 2.133333-29.866667 14.933333-29.866667 32s12.8 29.866667 29.866667 32H684.8c17.066667-2.133333 29.866667-14.933333 29.866667-32s-14.933333-32-32-32z"></path>
      </svg>
    ),
  });
};

export default React.forwardRef(IconHistoryFillingIcon);
