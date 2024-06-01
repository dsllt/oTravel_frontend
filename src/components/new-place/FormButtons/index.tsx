import React from 'react'

type Props = {}

function FormButtons({ }: Props) {
  return (
    <div className="flex items-center justify-center mt-4 gap-10">
      <button
        type="submit"
        className="btn btn-accent"
      >
        Cadastrar
      </button>
      <a
        href="/explore#search"
        className="btn btn-neutral"
      >
        Voltar
      </a>
    </div>
  )
}

export default FormButtons