import cn from 'classnames';
import { Container } from '../../Layout/Container/Container'
import s from './Top.module.scss';
import logo from './logo.svg'

export const Top = () => (
	<div className={s.top}>
		<Container className={s.topContainer}>
			<a className={cn(s.topLink, s.topPhone)} href="tel:89304902620">8 930 490 26 20</a>
			<a className={s.topLogo} href="/">
				<img src={logo} alt="Логотип" />
			</a>
		
		<div className={s.topNavigation}>
			<ul className={s.topNavList}>
				<li className="topNavItem">
					<button className="topLink">
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.875 18.75C15.2242 18.75 18.75 15.2242 18.75 10.875C18.75 6.52576 15.2242 3 10.875 3C6.52576 3 3 6.52576 3 10.875C3 15.2242 6.52576 18.75 10.875 18.75Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
							<path d="M16.4431 16.4438L20.9994 21.0002" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</button>
				</li>
				<li className="topNavItem">
					<button className="topLink">
						<svg width="22" height="17" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M18.5787 1.75H3.42122C3.23665 1.75 3.05856 1.81806 2.92103 1.94115C2.7835 2.06425 2.69619 2.23373 2.67581 2.41718L1.34248 14.4172C1.33083 14.522 1.34143 14.6281 1.37357 14.7286C1.40572 14.829 1.4587 14.9216 1.52904 15.0002C1.59939 15.0788 1.68553 15.1417 1.78182 15.1847C1.87812 15.2278 1.98241 15.25 2.08789 15.25H19.912C20.0175 15.25 20.1218 15.2278 20.2181 15.1847C20.3144 15.1417 20.4005 15.0788 20.4708 15.0002C20.5412 14.9216 20.5942 14.829 20.6263 14.7286C20.6585 14.6281 20.6691 14.522 20.6574 14.4172L19.3241 2.41718C19.3037 2.23373 19.2164 2.06425 19.0789 1.94115C18.9413 1.81806 18.7632 1.75 18.5787 1.75Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>

					</button>
				</li>
				<li className="topNavItem">
					<button className="topLink">
						<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11 18.25C11 18.25 1.625 13 1.625 6.62501C1.62519 5.49826 2.01561 4.40635 2.72989 3.53493C3.44416 2.66351 4.4382 2.06636 5.54299 1.84501C6.64778 1.62367 7.79514 1.79179 8.78999 2.32079C9.78484 2.84979 10.5658 3.70702 11 4.74673L11 4.74673C11.4342 3.70702 12.2152 2.84979 13.21 2.32079C14.2049 1.79179 15.3522 1.62367 16.457 1.84501C17.5618 2.06636 18.5558 2.66351 19.2701 3.53493C19.9844 4.40635 20.3748 5.49826 20.375 6.62501C20.375 13 11 18.25 11 18.25Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
					</button>
				</li>
			</ul>
		</div>
		</Container>
	</div>
)