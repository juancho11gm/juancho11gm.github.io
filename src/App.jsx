import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Layout from './components/Layout/Layout';
import Projects from './components/Projects/Projects';
import './services/contentful/Contenful';

function App() {
  return (
    <div className="App">
      <Hero />
      <Layout>
        <Projects />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
