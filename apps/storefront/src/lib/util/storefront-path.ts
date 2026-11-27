export const DEFAULT_COUNTRY_CODE = "kr"

export functiogetStorefrontPath(path: string, countryCode?: string | null) {
  const country = countryCode?.toLowerCase() || DEFAULT_COUNTRY_CODE
  const pathname = path.startsWith("/") ? path : `/${path}`

  return country === DEFAULT_COUNTRY_CODE
    ? pathname
    : `/${country}${pathname === "/" ? "" : pathname}`
}

export function stripCountryPrefix(pathname: string, countryCode: string) {
  const prefix = `/${countryCode}`

  if (pathname === prefix) {
    return "/"
  }

  return pathname.startsWith(`${prefix}/`)
    ? pathname.slice(prefix.length)
    : pathname
}
