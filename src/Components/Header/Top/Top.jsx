import cn from 'classnames';
import { Container } from '../../Layout/Container/Container'
import style from './Top.module.scss';
import { ReactComponent as Logo } from '../../../assets/logo.svg'
import { ReactComponent as Like } from '../../../assets/heart.svg'
import { ReactComponent as Search } from '../../../assets/search.svg'
import { ReactComponent as Cart } from '../../../assets/cart.svg'
import { NavLink } from 'react-router-dom';

export const Top = () => (
	<div className={style.top}>
		<Container className={style.topContainer}>
			<a className={cn(style.topLink, style.topPhone)} href="tel:89304902620">8 930 490 26 20</a>
			
			<NavLink className={style.topLogo} to="/">
				<Logo />
			</NavLink>
		
		<div className={style.topNavigation}>
			<ul className={style.topNavList}>
				<li className={style.topNavList}>
					<button className={style.topLink}>
						<Search />
					</button>
				</li>
				<li className={style.topNavList}>
					<NavLink to={'/cart'} className={style.topLink}>
						<Cart />
					</NavLink >
				</li>
				<li className={style.topNavList}>
					<NavLink to={'/favorite'} className={cn(style.topLink, style.Like)}>
						<Like />
					</NavLink>
				</li>
			</ul>
		</div>
		</Container>
	</div>
)