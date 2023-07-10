import { Container } from '../Layout/Container/Container';
import { Category } from './Category/Category';
import { Contacts } from './Contacts/Contacts';
import { Copyright } from './Copyright/Copyright';
import { Development } from './Development/Development';
import style from './Footer.module.scss'
import { Social } from './Social/Social';

export const Footer = () => (
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
