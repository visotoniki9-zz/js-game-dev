import { Link, Outlet } from 'react-router-dom';

function App() {
  const links = [
    'SpriteAnimations',
    'Parallax',
    'NPCMovements',
    'RectangleCollisions',
    'CircleCollisions',
    'EventBasedAnim',
    'RavenGame',
    'EnemyTypes',
    'StateManagment',
    'FullGame',
  ];
  return (
    <div className=" text-white p-5 text-center flex items-center flex-col">
      <header className="max-w-screen-2xl">
        <h1 className="text-4xl px-2 mb-6">
          JsGameDev
        </h1>
        <nav className="grid grid-cols-2 md:grid-cols-5 gap-1">

          {links.map((link) => (
            <Link
              className="bg-[#282828] p-4 hover:bg-black"
              to={`/${link}`}
            >
              {link}
            </Link>
          ))}

        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default App;
