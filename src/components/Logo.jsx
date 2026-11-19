import { brand } from '../data/site'

export function Logo({ variant = 'light', className = '', title = 'CRAVE' }) {
  const src =
    variant === 'dark'
      ? brand.logoDark || brand.logoWordmark
      : brand.logoLight || brand.logoLockup

  return (
    <img
      src={src}
      alt={title}
      width={280}
      height={158}
      className={className}
      decoding="async"
    />
  )
}
