
  import * as React from 'react';
  import Icon from '../icon';
  import type { IconProps } from '../icon/interface';

  const IconRunUpIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
    return React.createElement(Icon, {
      ...props,
      component: () => (
        <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
          <path d="M409.6 294.661224l71.053061-71.053061v248.685715c0 16.718367 14.628571 31.346939 31.346939 31.346938s31.346939-14.628571 31.346939-31.346938v-250.775511l71.053061 71.053062c6.269388 6.269388 14.628571 8.359184 22.987755 8.359183s16.718367-2.089796 22.987755-8.359183c12.538776-12.538776 12.538776-31.346939 0-43.885715l-125.387755-125.387755c-12.538776-12.538776-31.346939-12.538776-43.885714 0l-125.387755 125.387755c-12.538776 12.538776-12.538776 31.346939 0 43.885715 10.44898 12.538776 31.346939 12.538776 43.885714 2.089795z"></path>
        </svg>
      ),
    });
  };

  export default React.forwardRef(IconRunUpIcon);
  