import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setActiveGender } from '../../features/navigationSlice';
import { Container } from '../Layout/Container/Container';
import { Category } from './Category/Category';
import { Contacts } from './Contacts/Contacts';
import { Copyright } from './Copyright/Copyright';
import { Development } from './Development/Development';
import style from './Footer.module.scss'
import { Social } from './Social/Social';

export const Footer = () => {
	const dispatch = useDispatch();
	const location = useLocation()
	const gender = location.pathname.split('/')[1] || 'women'

	useEffect(() => {
		dispatch(setActiveGender(gender))
	}, [gender, dispatch])

	return (
		<footer >
			<Container className={style.container}>
				<Category />
				<Social />
				<Contacts />
				<Development />
				<Copyright />
			</Container>
		</footer>
	)
	
}
