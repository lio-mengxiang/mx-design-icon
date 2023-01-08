import * as React from 'react';
import Icon from '../icon';
import type { IconProps } from '../icon/interface';

const IconPictureIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
  return React.createElement(Icon, {
    ...props,
    component: () => (
      <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
        <path d="M819.2 96H204.8c-59.733333 0-108.8 49.066667-108.8 108.8v616.533333c0 59.733333 49.066667 108.8 108.8 108.8h616.533333c59.733333 0 108.8-49.066667 108.8-108.8V204.8c-2.133333-59.733333-51.2-108.8-110.933333-108.8zM160 819.2V204.8c0-23.466667 19.2-44.8 44.8-44.8h616.533333c23.466667 0 44.8 19.2 44.8 44.8v388.266667l-125.866666-125.866667c-27.733333-27.733333-76.8-27.733333-104.533334 0l-390.4 384c-4.266667 4.266667-6.4 8.533333-6.4 12.8H204.8c-25.6 0-44.8-19.2-44.8-44.8z m659.2 44.8H324.266667l354.133333-354.133333c2.133333-2.133333 6.4-2.133333 8.533333-2.133334s4.266667 0 8.533334 2.133334l160 160c4.266667 4.266667 8.533333 6.4 12.8 6.4v142.933333c-4.266667 25.6-23.466667 44.8-49.066667 44.8z"></path>
      </svg>
    ),
  });
};

export default React.forwardRef(IconPictureIcon);
