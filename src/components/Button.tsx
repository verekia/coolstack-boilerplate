import { ReactNode } from 'react'

import clsx from 'clsx'

const Button = ({
  children,
  as: Element = 'button',
  className,
  ...rest
}: {
  children: ReactNode
  className?: string
  [x: string]: any
}) => (
  <Element
    className={clsx(
      'w-full',
      'sm:w-min',
      'inline-block',
      'bg-primary',
      'hover:bg-primary-light',
      'active:bg-primary-dark',
      'text-center',
      'px-2',
      'py-1',
      'rounded',
      'text-white',
      'transition',
      className
    )}
    {...rest}
  >
    {children}
  </Element>
)

export default Button
