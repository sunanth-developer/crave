import { brand } from '../data/site'

export function Logo({ variant = 'light', className = '', title = 'CRAVE' }) {
  const src =
    variant === 'dark'
      ? brand.logoDark || brand.logoWordmark
      : brand.logoLight || brand.logoStarter || brand.logoLockup

  return (
    <img
      src={src}
      alt={title}
      width={240}
      height={72}
      className={`object-contain object-left ${className}`}
      decoding="async"
    />
  )
}
