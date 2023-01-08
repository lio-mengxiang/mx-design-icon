import * as React from 'react';
import Icon from '../icon';
import type { IconProps } from '../icon/interface';

const IconWorkFillingIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
  return React.createElement(Icon, {
    ...props,
    component: () => (
      <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
        <path d="M885.333333 256H725.333333V198.4C723.2 157.866667 689.066667 128 648.533333 128h-298.666666c-40.533333 2.133333-72.533333 34.133333-72.533334 74.666667V256H138.666667C98.133333 256 64 290.133333 64 330.666667V448h896v-117.333333c0-40.533333-34.133333-74.666667-74.666667-74.666667zM341.333333 202.666667c2.133333-6.4 6.4-10.666667 12.8-10.666667h296.533334c6.4 0 10.666667 6.4 10.666666 10.666667V256H341.333333V202.666667zM672 576c0 40.533333-34.133333 74.666667-74.666667 74.666667h-170.666666c-40.533333 0-74.666667-34.133333-74.666667-74.666667v-64H64v309.333333C64 861.866667 98.133333 896 138.666667 896h746.666666c40.533333 0 74.666667-34.133333 74.666667-74.666667V512H672v64z"></path>
      </svg>
    ),
  });
};

export default React.forwardRef(IconWorkFillingIcon);
