import ReactDom from 'react-dom';
import App from './Components/App';
import './global_css.css';

const root = document.querySelector('.root');

ReactDom.render(<App />, root)
