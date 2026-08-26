import Navbar from './components/Navbar';
import EditProfile from './pages/EditProfile';

function App() {
  return (
    <>
      <Navbar />

      <main className='p-6'>
        <EditProfile />
      </main>
    </>
  );
}

export default App;
