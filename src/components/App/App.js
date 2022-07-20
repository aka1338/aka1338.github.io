import logo from '../../logo.svg';
import './App.styles.scss';
import SideNav from '../SideNav';
import AvatarChatter from '../AvatarChatter';
import About from '../About/About';
import Blog from '../Blog';

function App() {
  return (
    <div className='container'>
      <section className='one'>
        <AvatarChatter />
      </section>
      <section className='two'>
        <SideNav />
      </section>
      <section className='three'>
        <Blog /> 
      </section>
      <section className='four'>
        <About />
      </section>
    </div>
  );
}


export default App;
