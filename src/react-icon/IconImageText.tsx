import * as React from 'react';
import Icon from '../icon';
import type { IconProps } from '../icon/interface';

const IconImageTextIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
  return React.createElement(Icon, {
    ...props,
    component: () => (
      <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
        <path d="M819.2 96H204.8c-59.733333 0-108.8 49.066667-108.8 108.8v616.533333c0 59.733333 49.066667 108.8 108.8 108.8h616.533333c59.733333 0 108.8-49.066667 108.8-108.8V204.8c-2.133333-59.733333-51.2-108.8-110.933333-108.8z m44.8 723.2c0 23.466667-19.2 44.8-44.8 44.8H204.8c-23.466667 0-44.8-19.2-44.8-44.8V204.8c0-23.466667 19.2-44.8 44.8-44.8h616.533333c23.466667 0 44.8 19.2 44.8 44.8v614.4z"></path>
      </svg>
    ),
  });
};

export default React.forwardRef(IconImageTextIcon);
