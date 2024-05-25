import Titulo from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyCard from './components/MyCard';
import Footer from './components/Footer';


function App() {
  const dogs = [
    {
      imageUrl: 'https://images.pexels.com/photos/2853130/pexels-photo-2853130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Bobby',
      description: 'listo para jugar, !Dale a Bobby el hogar amoroso que se merece!.',
      tags: [
        { text: 'Husky', bg: 'success', width: '200px'},
      ],
    },
    {
      imageUrl: 'https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Otto',
      description: 'Amigable, jugueton, Haz de Otto parte de tu familia hoy mismo!! .',
      tags: [
        { text: 'Bulldog Frances', bg: 'primary', width:'200px'},
      ],
    },
    {
      imageUrl: 'https://images.pexels.com/photos/3978352/pexels-photo-3978352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Max',
      description: 'Un perro fiel, hazte amigo de un hermoso Bulldog Ingles',
      tags: [
        { text: 'Bulldog Ingles',bg: 'danger', width:'200px'},
      ],
    },
    {
      imageUrl: 'https://images.pexels.com/photos/8415166/pexels-photo-8415166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      name: 'Max',
      description: 'Es un amigo leal, perfecto para todo hogar familiar.!',
      tags: [
        { text: 'Boston Terrier', bg: 'warning', width:'200px'},
      ],
    },
  ];

  return (
    <>
      <Titulo title="Adopta un perrito" />
      <div className="App">
        {dogs.map((dog, index) => (
          <MyCard
            key={index}
            imageUrl={dog.imageUrl}
            name={dog.name}
            description={dog.description}
            tags={dog.tags}
          />
        ))}
      </div>
      <Footer footer="Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro y bríndale una segunda oportunidad. Encuentra a tu compañero peludo para siempre."/>
    </>
  );
}

export default App;