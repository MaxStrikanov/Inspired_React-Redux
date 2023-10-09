import cn from 'classnames';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../const';
import { fetchProduct } from '../../features/productSlice';
import { fetchCategory } from '../../features/goodsSlice'
import { ColorList } from '../ColorList/ColorList';
import { Container } from '../Layout/Container/Container'
import { ProductSize } from '../Product/ProductSize/ProductSize';
import { Count } from '../Count/Count';
import style from './ProductPage.module.scss'
import { Goods } from '../Goods/Goods';
import { BtnLike } from '../BtnLike/BtnLike';


export const ProductPage = () => {
	const dispatch = useDispatch();
	const { id } = useParams()

	const { product } = useSelector(state => state.product)
	const { gender, category } = product

	const [ selectedColor, setSelectedColor ] = useState('')
	const [selectedSize, setSelectedSize] = useState('')
	const [count, setCount] = useState(1)

	const handleIncrement = () => {
		setCount((prevCount) => prevCount + 1)
	}
	const handleDecrement = () => {
		if (count > 1 ) {
			setCount((prevCount) => prevCount - 1)
		}
	}

	const handleColorChange = e => {
		setSelectedColor(e.target.value)
	}
	const handleSizeChange = e => {
		setSelectedSize(e.target.value)
	}
	
	useEffect(() => {
		dispatch(fetchProduct(id))
	}, [id, dispatch])

	useEffect(() => {
		dispatch(fetchCategory({ gender, category, count: 4, top: true, exclude: id }))
	}, [gender, category, dispatch])

	return (
		<>
			<section className={style.card}>
				<Container className={style.container}>
					<img
						className={style.image}
						src={`${API_URL}/${product.pic}`}
						alt={`${product.title}`}
					/>
					<form className={style.content}>
						<h2 className={style.title}>{product.title}</h2>
						<p className={style.price}>руб {product.price}</p>
						<div className={style.vendorCode}>
							<span className={style.subTitle}>Артикул</span>
							<span className={style.id}>{product.id}</span>
						</div>
						<div className={style.color}>
							<p className={cn(style.subTitle, style.colorTitle)}>Цвет</p>
							<ColorList
								colors={product.colors}
								selectedColor={selectedColor}
								handleColorChange={handleColorChange}
							/>
						</div>

						<ProductSize
							size={product.size}
							selectedSize={selectedSize}
							handleSizeChange={handleSizeChange}
						/>

						<div className={style.description}>
							<p className={cn(style.subtitle, style.descriptionTitle)}>Описание</p>
							<p className={style.descriptionText}>{product.description}</p>
						</div>

						<div className={style.control}>
							<Count
								className={style.count}
								count={count}
								handleIncrement={handleIncrement}
								handleDecrement={handleDecrement}
							/>
							<button type="submit" className={style.addCart}>В корзину</button>

							<button
								className={style.favorire}
								aria-label='Добавить в избранное'
								type='button'
							>
								<BtnLike id={id}/>
							</button>

						</div>
					</form>
				</Container>
			</section>
			<Goods title='Вам так же может понравится'/>
		</>
		
	)
}