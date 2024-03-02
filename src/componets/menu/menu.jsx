import './menu.css'

function menu(props) {
    return (
      <ul className='menuBar'>
        {props.children}
      </ul>
      
    );
}
    export default menu;