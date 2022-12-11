import React from 'react';
import { CompoundedComponent, IconProps } from './interface';
import createFromIconfont from './IconFont';
import { classnames as cs } from '@mx-design/utils';

const INNER_SVG_PROPS = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  viewBox: '0 0 32 32',
  display: 'inline-block',
};

const Icon = React.forwardRef<HTMLElement, IconProps>((props, ref) => {
  const { className, type, style, prefixCls, theme, size, children, component: SvgComponent, viewBox, ...rest } = props;
  const cls = cs(`${prefixCls}--basic-icon`, className, {
    [`${prefixCls}--${type}`]: !!type,
    [`${prefixCls}--${theme}`]: !!theme,
    [`${prefixCls}--${size}`]: !!size,
  });

  const newProps = {
    className: cls,
    style,
    type,
    theme,
    size,
    ...rest,
  };

  // svg component > children by iconfont > type
  if (SvgComponent) {
    INNER_SVG_PROPS.viewBox = viewBox!;
    return (
      <i {...newProps} ref={ref}>
        <SvgComponent {...INNER_SVG_PROPS}>{children}</SvgComponent>
      </i>
    );
  }
  return null;
}) as CompoundedComponent;

Icon.createFromIconfont = createFromIconfont;

Icon.displayName = 'Icon';
Icon.defaultProps = {
  prefixCls: 'mx',
  theme: 'default',
  size: 'md',
  viewBox: INNER_SVG_PROPS.viewBox,
};

export default Icon;
