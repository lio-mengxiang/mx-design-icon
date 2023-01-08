import * as React from 'react';
import Icon from '../icon';
import type { IconProps } from '../icon/interface';

const IconMobilePhoneIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
  return React.createElement(Icon, {
    ...props,
    component: () => (
      <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
        <path d="M746.666667 949.333333H277.333333c-40.533333 0-74.666667-34.133333-74.666666-74.666666V149.333333c0-40.533333 34.133333-74.666667 74.666666-74.666666h469.333334c40.533333 0 74.666667 34.133333 74.666666 74.666666v725.333334c0 40.533333-34.133333 74.666667-74.666666 74.666666z m-469.333334-810.666666c-6.4 0-10.666667 4.266667-10.666666 10.666666v725.333334c0 6.4 4.266667 10.666667 10.666666 10.666666h469.333334c6.4 0 10.666667-4.266667 10.666666-10.666666V149.333333c0-6.4-4.266667-10.666667-10.666666-10.666666H277.333333z"></path>
      </svg>
    ),
  });
};

export default React.forwardRef(IconMobilePhoneIcon);
