'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export function SearchHeader() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('query', term)
    } else {
      params.delete('query')
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false })
  }, 300);

  return (
    <div className="navbar bg-base-100 px-8">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Busque por um local</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Busque por um local"
            className="input input-bordered w-32 md:w-auto mr-10"
            defaultValue={searchParams.get('query')?.toString()}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  )
}