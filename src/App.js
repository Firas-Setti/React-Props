import bird from './Flying.jpg';
import Profile from './Component/Profile/Profile';
import "./app.css";
function App () {
  const handleName = name => alert(name);
  return (
    <div className="App">
      <Profile fullName="Firas Setti" bio="BIO: I am a fresh graduate student who got his Masters degree in Digital Marketing and Data Analytics, and his bachelors degree in Business English. Nowadays, I am studying at GoMyCode to become a FullStack Web Developer" profession="PROFESSION: FullStack Web Developement Student" handleName={handleName}>
      <img src={bird} alt='walker'/>
      </Profile>
    </div>
    );
}

export default App;