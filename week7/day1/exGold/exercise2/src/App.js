import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
   const planets = ['Mars', 'Venus', 'Jupiter', 'Earth', 'Saturn', 'Neptune'];
  return (
     <div className="d-flex justify-content-center mt-5">
      <ul className="list-group" style={{ width: '300px' }}>
        {planets.map((planet, index) => (
          <li key={index} className="list-group-item">
            {planet}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
