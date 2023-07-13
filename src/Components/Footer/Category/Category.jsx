import style from './../../Footer/Footer.module.scss'
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Category = () => {
	const { activeGender, genderList, categories } = useSelector(state => state.navigation);

	return (
		<div className={style.category}>
			<h2 className={cn(style.title, style.categoryTitle)}></h2>

			<ul className={style.categoryList}>
				{genderList.map((gender) => (
					
					<li key={gender} className={style.categoryItem}>
						<h3 className={style.categorySubtitle}>
							<NavLink to={`/catalog/${gender}`} className={style.link} >{categories[gender].title}</NavLink>
						</h3>
						
						<ul className={style.categorySublist}>
							{categories[gender]?.list?.map((item) => (
								<li key={item.slug}>
									<NavLink className={style.link} to={`/catalog/${activeGender}/${item.slug}`}>{item.title}</NavLink>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	)
	
}

