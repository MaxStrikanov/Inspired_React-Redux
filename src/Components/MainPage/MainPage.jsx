import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchGoods } from '../../features/goodsSlice';
import { Container } from '../Layout/Container/Container'
import { Product } from '../Product/Product';
import style from './MainPage.module.scss';

export const MainPage = () => {
	const { gender = 'women', category } = useParams();
	const dispatch = useDispatch();
	const { goodsList } = useSelector(state => state.goods)

	useEffect(() => {
		dispatch(fetchGoods(gender))
	}, [gender, dispatch])
	
	return(
		<section className={style.goods}>
			<Container>
				<h2 className={style.title}>новинки</h2>
				
				<ul className={style.list}>
					{goodsList.map(item => <li key={item.id}><Product  {...item} /></li>)}
				</ul>
			</Container>
		</section>		
	)
}