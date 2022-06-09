// When using JSX, React must be in scope
import './MenuList.css'
import MenuListItem from '../MenuListItem/MenuListItem';

function MenuList(props) {
  return (
      <div  className="MenuList">
        {props.menuItems.map((m, idx) =>
          <MenuListItem name={m.name} price={m.price} emoji={m.emoji} key={idx} />)}
      </div>
  );
}

export default MenuList;