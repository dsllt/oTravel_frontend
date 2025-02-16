'use client';
import NavbarButton from './navbarButton';
import NavbarLinks from './navbarLinks';
import NavbarLogo from './navbarLogo';
import useNavbar from '../../containers/useNavbar';
import { ProfileModal } from '@ui/profile/profile-modal';
import { LoginModal } from '@ui/login/login-modal';

export function Navbar() {
  const { data, callback } = useNavbar();

  return (
    <div className="navbar bg-zinc-900 h-16">
      <NavbarLogo />
      <NavbarLinks links={data.links} />
      {!data.isLogged ? (
        <NavbarButton title="Login" onClick={callback.handleOpenLoginModal} />
      ) : (
        <NavbarButton
          title="Menu"
          onClick={() => callback.setDisplayProfileModal(true)}
        />
      )}
      {data.displayLoginModal && (
        <LoginModal
          onClickCloseModal={callback.onClickCloseLoginModal}
          onClickRegister={callback.onClickRegister}
          onClickLogin={callback.onClickLogin}
          loginError={data.loginError}
        />
      )}
      {data.displayMenuModal && (
        <ProfileModal
          onClickCloseModal={callback.onClickCloseMenuModal}
          onClickLogout={callback.onClickLogout}
          displayFavoritesModal={data.displayFavoritesModal}
          displayPersonalInfoModal={data.displayPersonalInfoModal}
          displayRegisterNewPlaceModal={data.displayRegisterNewPlaceModal}
          onClickCloseInnerModal={callback.handleCloseInnerModal}
          onClickDisplayCreateNewPlace={callback.handleDisplayCreateNewPlace}
          onClickDisplayFavorites={callback.handleDisplayFavorites}
          onClickDisplayPersonalInfo={callback.handleDisplayPersonalInfo}
        />
      )}
    </div>
  );
}
