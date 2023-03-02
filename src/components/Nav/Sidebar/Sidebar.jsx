import s from './Sidebar.module.css'

const Sidebar = (props) => {
	return (
		<div className={s.sidebar__item}>
			<div className={s.img}>
				<img src={props.img} alt="" />
			</div>
			<div className={s.name}>
				{props.name}
			</div>
		</div >
	)
};
export default Sidebar;