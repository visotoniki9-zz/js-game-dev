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
    <div className=" text-[#B8B5B1] p-5 text-center flex items-center flex-col">
      <header className="max-w-screen-2xl">
        <h1 className="text-4xl px-2 mb-6">
          JsGameDev
        </h1>
        <nav className="grid grid-cols-2 md:grid-cols-5 gap-1">

          {links.map((link) => (
            <Link
              className="bg-[#363839] p-4 hover:bg-[202020]"
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
