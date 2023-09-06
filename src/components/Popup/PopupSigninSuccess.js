import { Link } from 'react-router-dom';
import PopupWithForm from './PopupWithForm';

const PopupSigninSuccsess = ({ handleAuth, title }) => {
 return (
  <PopupWithForm title={title} handleAuth={handleAuth} type='signupSuccess'>
   <Link className='popup__text-link'>Selamat Datang di News Explorer</Link>
  </PopupWithForm>
 );
};

export default PopupSigninSuccsess;
