import style from './Count.module.scss'
import cn from 'classnames';

export const Count = ({
	count,
	handleIncrement,
	handleDecrement 
}) => (
	<div className={cn(style.count, cn)}>
		<button className={style.item} type='button' onClick={handleDecrement}>-</button>
		<span className={cn(style.item, style.number)}>{count}</span>
		<button className={style.item} type='button' onClick={handleIncrement}>+</button>
	</div>
)