import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Goods } from '../Goods/Goods'
import { fetchCategory } from '../../features/goodsSlice'
import { usePageFromSearchParams } from '../../hooks/usePageFromSearchParams';



export const FavoritePage = () => {

	const dispatch = useDispatch();
	const page = usePageFromSearchParams(dispatch);

	const favorites = useSelector(state => state.favorites)

	useEffect(() => {
		if (favorites) {
			const param = { list: favorites}

			if(page) {
				param.page = page
			}
			dispatch(fetchCategory({ list: favorites }))
		}
	}, [favorites, dispatch])

	return (
		<Goods title='Избранное' />
	)
}