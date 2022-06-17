import logo from '../../logo.svg';
import './App.styles.scss';
import SideNav from '../SideNav';
// TODO: Implement AvatarChatter component 
import AvatarChatter from '../AvatarChatter';

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
        <h1> Third Page </h1>
      </section>
      <section className='four'>
        <h1> Love love love</h1>
      </section>
    </div>
  );
}


export default App;
