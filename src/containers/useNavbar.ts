import { login, register } from '@lib/data'
import { on } from 'process'
import { useCallback, useEffect, useMemo, useState } from 'react'

export default function useNavbar() {
  const [displayLoginModal, setDisplayLoginModal] = useState(false)
  const [displayMenuModal, setDisplayProfileModal] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [isLogged, setIsLogged] = useState(false)

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
      displayLoginModal,
      displayMenuModal,
    }),
    [isAdmin, isLogged, links, displayLoginModal, displayMenuModal]
  )

  const handleOpenLoginModal = useCallback(() => {
    setDisplayLoginModal(true)
  }, [setDisplayLoginModal])

  const onClickCloseLoginModal = useCallback(() => {
    setDisplayLoginModal(false)
  }, [setDisplayLoginModal])

  const onClickCloseMenuModal = useCallback(() => {
    setDisplayProfileModal(false)
  }, [setDisplayProfileModal])

  const onClickRegister = useCallback(async (formData: any) => {
    const firstName = formData.get('firstName')
    const lastName = formData.get('lastName')
    const email = formData.get('email')
    const password = formData.get('password')
    return await register(firstName, lastName, email, password)
  }, [])

  const onClickLogin = useCallback(async (formData: any) => {
    const email = formData.get('email')
    const password = formData.get('password')
    const response = await login(email, password)
    if (response && response.token) {
      localStorage.setItem('token', response.token)
      setIsLogged(true)
      setDisplayLoginModal(false)
    } else {
      console.error('Falha no login:', response)
    }
  }, [])

  const onClickLogout = useCallback(() => {
    console.log(`logout`)
    localStorage.removeItem('token')
    setIsLogged(false)
    setDisplayProfileModal(false)
  }, [])

  const callback = useMemo(
    () => ({
      handleOpenLoginModal,
      onClickCloseLoginModal,
      setDisplayProfileModal,
      onClickRegister,
      onClickLogin,
      onClickCloseMenuModal,
      onClickLogout,
    }),
    [
      handleOpenLoginModal,
      onClickCloseLoginModal,
      setDisplayProfileModal,
      onClickRegister,
      onClickLogin,
      onClickCloseMenuModal,
      onClickLogout,
    ]
  )

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setIsLogged(true)
    }
  }, [])

  return { data, callback }
}
