'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Input } from './ui/input'

type SearchInputProps = {
  placeholder: string
}

export const SearchInput = ({ placeholder }: SearchInputProps) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams)
    const value = event.target.value

    if (value) {
      params.set('search', value)
    } else {
      params.delete('search')
    }

    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    })
  }

  return <Input placeholder={placeholder} onChange={handleSearch} />
}
