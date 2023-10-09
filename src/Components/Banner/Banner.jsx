import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useMedia } from 'react-use';
import { API_URL } from '../../const';
import { Container } from '../Layout/Container/Container';
import style from './Banner.module.scss';

export const Banner = ({data}) => {
	const isMobile = useMedia('(max-width: 540px)');
	const isTablet = useMedia('(max-width: 768px)');
	const isLaptop = useMedia('(max-width: 1024px)')

	const [bgURL, setBgURL] = useState('')
	useEffect(() => {
		if (isMobile) {
			setBgURL(`${API_URL}/${data?.bg.mobile}`)
		} else if (isTablet) {
			setBgURL(`${API_URL}/${data?.bg.tablet}`)
		} else if (isLaptop) {
			setBgURL(`${API_URL}/${data?.bg.laptop}`)
		} else {
			setBgURL(`${API_URL}/${data?.bg.desktop}`)
		}
	}, [isMobile, isTablet, isLaptop, data])

	// const [bgURL, setBgURL] = useState('')
	// useEffect(() => {
	// 	const responseBg = () => {
	// 		const width = document.documentElement.clientWidth;
	// 		if (width < 540) {
	// 			setBgURL(`${API_URL}/${data?.bg.mobile}`)
	// 		} else if (width < 768) {
	// 			setBgURL(`${API_URL}/${data?.bg.tablet}`)
	// 		} else if (width < 1024) {
	// 			setBgURL(`${API_URL}/${data?.bg.laptop}`)
	// 		} else {
	// 			setBgURL(`${API_URL}/${data?.bg.desktop}`)
	// 		}
	// 	}
	// 	window.addEventListener('resize', responseBg);
	// 	responseBg();
	// 	return () => {
	// 		window.removeEventListener('resize', responseBg)
	// 	}
	// }, [data])

	return (
		data &&
		<section
			className={style.banner}
			style={{
				backgroundImage: `url(${bgURL})`
			}}
		>
			<Container>
				<div className={style.content}>
					<h2 className={style.title}>{data.description}</h2>
					<NavLink
						className={style.link}
						to={`/product/${data.id}`}
					>Перейти</NavLink>
				</div>
			</Container>
		</section>
	)
}