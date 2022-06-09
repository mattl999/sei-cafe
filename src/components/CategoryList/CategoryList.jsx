// import this
import './CategoryList.css';

function CategoryList(props) {
  return (
      <div>
        <ul className='CategoryList'>
        {props.menuCategories.map((c, idx) => <li key={idx}>{c}</li>)}
        </ul>
      </div>
  );
}

export default CategoryList;