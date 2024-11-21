import { useCallback, useMemo, useState } from 'react'

export default function useNavbar() {
  const [displayLogin, setDisplayLogin] = useState(false)
  const [displayProfile, setDisplayProfile] = useState(false)

  const isAdmin = false
  const isLogged = false

  const links = useMemo(
    () => [
      { name: 'Explorar', href: '/explore', display: true },
      { name: 'Mapa', href: '/map', display: true },
      { name: 'Incluir café', href: '/new-place', display: isAdmin },
    ],
    [isAdmin]
  )

  const data = useMemo(
    () => ({
      isAdmin,
      isLogged,
      links,
      displayLogin,
      displayProfile,
    }),
    [isAdmin, isLogged, links, displayLogin, displayProfile]
  )

  const handleOpenLogin = useCallback(() => {
    setDisplayLogin(true)
  }, [setDisplayLogin])
  const handleCloseLogin = useCallback(() => {
    setDisplayLogin(false)
  }, [setDisplayLogin])

  const callback = useMemo(
    () => ({ handleOpenLogin, handleCloseLogin, setDisplayProfile }),
    [handleOpenLogin, handleCloseLogin, setDisplayProfile]
  )

  return { data, callback }
}
