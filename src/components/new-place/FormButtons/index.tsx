import Link from 'next/link'
import React from 'react'

type Props = {}

function FormButtons({ }: Props) {
  return (
    <div className="flex items-center justify-center mt-4 gap-10">
      <button
        type="submit"
        className='rounded-lg px-5 py-2 flex items-center gap-2 justify-center bg-primary text-primary-content text-sm font-semibold'
      >
        Cadastrar
      </button>
      <Link
        href="/explore#search"
        className="rounded-lg px-5 py-2 flex items-center gap-2 justify-center bg-zinc-900 text-neutral-content text-sm font-semibold "
      >
        Voltar
      </Link>
    </div>
  )
}

export default FormButtons