"use client"

import { getStorefrontPath } from "@lib/util/storefront-path"
import Link from "next/link"
import { useParams } from "next/navigation"
import React from "react"

/**
 * Use this component to create a Next.js `<Link />` that uses the current country, omitting the Korean URL prefix,
 * without having to explicitly pass it as a prop.
 */
const LocalizedClientLink = ({
  children,
  href,
  ...props
}: {
  children?: React.ReactNode
  href: string
  className?: string
  onClick?: () => void
  passHref?: true
  [x: string]: unknown
}) => {
  const { countryCode } = useParams<{ countryCode: string }>()

  return (
    <Link href={getStorefrontPath(href, countryCode)} {...props}>
      {children}
    </Link>
  )
}

export default LocalizedClientLink
