import * as React from 'react';
import Icon from '../icon';
import type { IconProps } from '../icon/interface';

const IconMicIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
  return React.createElement(Icon, {
    ...props,
    component: () => (
      <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
        <path d="M516.266667 657.066667c78.933333 0 142.933333-64 142.933333-142.933334V217.6a142.933333 142.933333 0 0 0-285.866667 0v296.533333c0 78.933333 64 142.933333 142.933334 142.933334z m-78.933334-439.466667c0-42.666667 36.266667-78.933333 78.933334-78.933333s78.933333 36.266667 78.933333 78.933333v296.533333c0 42.666667-36.266667 78.933333-78.933333 78.933334s-78.933333-36.266667-78.933334-78.933334V217.6z"></path>
      </svg>
    ),
  });
};

export default React.forwardRef(IconMicIcon);
