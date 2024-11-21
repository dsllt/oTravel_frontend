'use client'
import NavbarButton from './navbarButton'
import NavbarLinks from './navbarLinks'
import NavbarLogo from './navbarLogo'
import useNavbar from '../../containers/useNavbar'
import { ProfileModal } from '@ui/profile/profile-modal'
import { LoginModal } from '@ui/login/login-modal'

export function Navbar() {
  const { data, callback } = useNavbar()
  console.log('navbar', data)

  return (
    <div className="navbar bg-zinc-900 h-16">
      <NavbarLogo />
      <NavbarLinks links={data.links} />
      {!data.isLogged ? (
        <NavbarButton title="Login" onClick={callback.handleOpenLogin} />
      ) : (
        <NavbarButton
          title="Menu"
          onClick={() => callback.setDisplayProfile(true)}
        />
      )}
      {data.displayLogin && (
        <LoginModal onClickCloseModal={callback.handleCloseLogin} />
      )}
      {data.displayProfile && <ProfileModal />}
    </div>
  )
}
