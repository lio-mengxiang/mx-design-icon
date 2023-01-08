import * as React from 'react';
import Icon from '../icon';
import type { IconProps } from '../icon/interface';

const IconLayoutFillingIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
  return React.createElement(Icon, {
    ...props,
    component: () => (
      <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
        <path d="M928 853.333333c0 40.533333-34.133333 74.666667-74.666667 74.666667H405.333333v-490.666667h522.666667V853.333333zM341.333333 437.333333v490.666667H170.666667c-40.533333 0-74.666667-34.133333-74.666667-74.666667V437.333333H341.333333zM96 170.666667c0-40.533333 34.133333-74.666667 74.666667-74.666667h682.666666c40.533333 0 74.666667 34.133333 74.666667 74.666667v202.666666h-832V170.666667z"></path>
      </svg>
    ),
  });
};

export default React.forwardRef(IconLayoutFillingIcon);
