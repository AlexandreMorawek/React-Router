import { Link, Outlet } from 'react-router'
import './App.css'

function App() {


  return (
    <>
      <nav className='navBar'>
        <Link to="/"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link>
        <Link to="/articles/1"><button>Article 1</button></Link>
        <Link to="/articles/2"><button>Article 2</button></Link>
        <Link to="/articles/3"><button>Article 3</button></Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default App
