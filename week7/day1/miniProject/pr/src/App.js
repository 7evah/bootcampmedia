import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Header from './components/Header';
import InfoCard from './components/InfoCard';
import Contact from './components/Contact';

const App = () => {
  const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...`;

  return (
    <div>
      <Header />
      <InfoCard icon="building" title="About the Company" text={lorem} />
      <InfoCard icon="globe" title="Our Values" text={lorem} />
      <InfoCard icon="university" title="Our Mission" text={lorem} />
      <Contact />
    </div>
  );
};

export default App;