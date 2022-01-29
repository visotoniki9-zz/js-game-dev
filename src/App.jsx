import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className=" text-white p-5 text-center">
      <header>
        <h1 className="text-4xl px-2 mb-4">
          JsGameDev
        </h1>
        <nav className="grid grid-cols-5 gap-1">
          <Link
            className="bg-[#282828] p-4 hover:bg-black"
            to="/SpriteAnimations"
          >
            SpriteAnimations

          </Link>
          <Link
            className="bg-[#282828] p-4 hover:bg-black"
            to="/Parallax"
          >
            Parallax

          </Link>
          <Link
            className="bg-[#282828] p-4 hover:bg-black"
            to="/SpriteAnimations"
          >
            NpcMovements

          </Link>
          <Link
            className="bg-[#282828] p-4 hover:bg-black"
            to="/SpriteAnimations"
          >
            RectangleCollision

          </Link>
          <Link
            className="bg-[#282828] p-4 hover:bg-black"
            to="/SpriteAnimations"
          >
            CircleCollision

          </Link>
          <Link
            className="bg-[#282828] p-4 hover:bg-black"
            to="/SpriteAnimations"
          >
            EventBasedAnim

          </Link>
          <Link
            className="bg-[#282828] p-4 hover:bg-black"
            to="/SpriteAnimations"
          >
            RavenGame

          </Link>
          <Link
            className="bg-[#282828] p-4 hover:bg-black"
            to="/SpriteAnimations"
          >
            EnemyTypes

          </Link>
          <Link
            className="bg-[#282828] p-4 hover:bg-black"
            to="/SpriteAnimations"
          >
            StateManagment

          </Link>
          <Link
            className="bg-[#282828] p-4 hover:bg-black"
            to="/SpriteAnimations"
          >
            FullSideScrollerGame

          </Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
