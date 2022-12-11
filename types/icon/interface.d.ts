import React, { HTMLAttributes } from 'react';
import createFromIconfont from './IconFont';
export default interface BasePropsType {
    type?: string;
    theme?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    component?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    viewBox?: string;
    prefixCls?: string;
}
export type IconProps = BasePropsType & HTMLAttributes<HTMLSpanElement>;
/**
 * interface ForwardRefExoticComponent<P> {
 *   (props: P): ReactElement | null;
 *   readonly $$typeof: symbol;
 *   displayName?: string;
 *   defaultProps?: Partial<P>;
 *   propTypes?: WeakValidationMap<P>;
 * }
 * interface RefAttributes<T> extends Attributes {
 *  ref?: Ref<T>;
 * }
 */
export interface CompoundedComponent extends React.ForwardRefExoticComponent<IconProps & React.RefAttributes<HTMLElement>> {
    createFromIconfont: typeof createFromIconfont;
}
