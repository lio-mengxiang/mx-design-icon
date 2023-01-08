import * as React from 'react';
import Icon from '../icon';
import type { IconProps } from '../icon/interface';

const IconPrintIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
  return React.createElement(Icon, {
    ...props,
    component: () => (
      <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
        <path d="M819.2 364.8h-44.8V128c0-17.066667-14.933333-32-32-32H281.6c-17.066667 0-32 14.933333-32 32v236.8H204.8c-59.733333 0-108.8 49.066667-108.8 108.8v192c0 59.733333 49.066667 108.8 108.8 108.8h44.8V896c0 17.066667 14.933333 32 32 32h460.8c17.066667 0 32-14.933333 32-32v-121.6h44.8c59.733333 0 108.8-49.066667 108.8-108.8v-192c0-59.733333-49.066667-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160z m396.8 704H313.6V620.8h396.8v243.2z m153.6-198.4c0 25.6-19.2 44.8-44.8 44.8h-44.8v-121.6c0-17.066667-14.933333-32-32-32H281.6c-17.066667 0-32 14.933333-32 32v121.6H204.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"></path>
      </svg>
    ),
  });
};

export default React.forwardRef(IconPrintIcon);
