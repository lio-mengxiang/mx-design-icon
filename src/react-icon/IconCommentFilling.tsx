
  import * as React from 'react';
  import Icon from '../icon';
  import type { IconProps } from '../icon/interface';

  const IconCommentFillingIcon = (props: IconProps, svgRef?: React.Ref<SVGSVGElement>) => {
    return React.createElement(Icon, {
      ...props,
      component: () => (
        <svg width="1em" height="1em" viewBox="0 0 1000 1000" fill="currentColor" focusable={false} aria-hidden="true" ref={svgRef}>
          <path d="M853.333333 138.666667H170.666667c-40.533333 0-74.666667 34.133333-74.666667 74.666666v516.266667c2.133333 38.4 34.133333 70.4 74.666667 70.4h151.466666v119.466667c2.133333 27.733333 36.266667 38.4 55.466667 19.2l136.533333-138.666667H853.333333c40.533333 0 74.666667-34.133333 74.666667-74.666667V213.333333c0-40.533333-34.133333-74.666667-74.666667-74.666666zM514.133333 554.666667H298.666667c-17.066667 0-32-14.933333-32-32s12.8-29.866667 29.866666-32H512c17.066667 0 32 14.933333 32 32s-12.8 29.866667-29.866667 32z m160-149.333334H298.666667c-17.066667 0-32-14.933333-32-32s12.8-29.866667 29.866666-32h375.466667c17.066667 0 32 14.933333 32 32s-12.8 29.866667-29.866667 32z"></path>
        </svg>
      ),
    });
  };

  export default React.forwardRef(IconCommentFillingIcon);
  