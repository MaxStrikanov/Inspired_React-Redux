import { useSelector } from 'react-redux';
import { Container } from '../Layout/Container/Container'
import { Pagination } from '../Pagination/Pagination';
import { Product } from '../Product/Product';
import style from './Goods.module.scss';

export const Goods = ({title}) => {
	const { goodsList } = useSelector(state => state.goods)

	return (
		<section className={style.goods}>
			<Container >
				<h2 className={style.title}>{title ?? 'новинки'}</h2>

				<ul className={style.list}>
					{goodsList.map(item => <li key={item.id}>
						<Product  {...item} /></li>)}
				</ul>
				<Pagination />
			</Container>
		</section>	
	)
}

