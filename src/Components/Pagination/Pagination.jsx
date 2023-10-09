import cn from 'classnames';
import style from './Pagintaion.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom'
import { setPage } from '../../features/goodsSlice';
import { useEffect, useState } from 'react';


export const Pagination = () => {
	const [pagePagination, setPagePagination] = useState('')
	const pathname = useLocation();
	const { page, pages } = useSelector(state => state.goods);
	
	const dispatch = useDispatch();

	useEffect(() => {
		setPagePagination(page)
	}, [page, setPagePagination])

	const handlePageChange = (newPage) => {
		setPagePagination(newPage)
	}
	const handlePrevPage = () => {
		if (pagePagination > 1) {
			handlePageChange(pagePagination - 1)
		}			
	}
	const handleNextPage = () => {
		if (pagePagination < pages) {
			handlePageChange(pagePagination + 1)
		}		
	}

	const renderPaginationItems = () => {
		const paginationItems = [];

		let startPage = Math.max(1, pagePagination - 1);
		let endPage = Math.min(startPage + 2, pages)

		for(let i = startPage; i <= endPage; i++) {
			paginationItems.push(
				<li key={i} className={style.item}>
					<NavLink
						to={`${pathname}?page=${i}`}
						className={cn(style.link, i === +page ?? style.linkActive)}
						onClick={(i) => handlePageChange(i)}
					>{i}</NavLink>
				</li>
			)
		}
		return paginationItems
	}

	return (
		<div className={style.pagination}>
			<button 
				className={style.arrow} 
				onClick={handlePrevPage}
				disabled={pagePagination <= 2}
				>&lt;
			</button>
			<ul className={style.list}>
				{renderPaginationItems()}
			</ul>
			<button 
				className={style.arrow} 
				onClick={handleNextPage}
				disabled={pagePagination >= pages - 1 || pages <= 3}
				>&gt;
			</button>
		</div>
		
	)
}