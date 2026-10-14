function Header({ titulo }) {
  return (
  <h1 
  className="max-w-3xl mx-auto leading-loose text-4xl lg:text-6xl font-black mb-10 text-center uppercase tracking-widest text-[#131729]"
  style={{ 
    fontFamily: '"Cinzel Decorative", serif',
    WebkitTextStroke: '1.5px #bf953f', 
    textShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)' 
  }}
>
  {titulo}
  </h1>
  );
}

// Компонент для отображения одной карточки поста
function PostItem({ post }) {
  return (
     <div 
    className="bg-white p-4 rounded-2xl border border-[#bf953f]/30 
              shadow-[0_0_20px_rgba(40,30,20,0.25),_0_15px_35px_rgba(0,0,0,0.18),_0_5px_10px_rgba(0,0,0,0.12)] 
              hover:-translate-y-5 hover:border-[#bf953f]/60 
              hover:shadow-[0_0_30px_rgba(40,30,20,0.35),_0_25px_50px_rgba(0,0,0,0.28),_0_10px_15px_rgba(0,0,0,0.15)] 
              transition-all duration-500 ease-out cursor-pointer"  
            >
      <img src={post.image} alt={post.title} className="w-ful h-auto block object-cover rounded-2xl mb-4" />
      <h2 className="text-2xl font-semibold mb-2 text-[#2c4a52]">{post.title}</h2>
      <p className="text-gray-800 text-sm mb-2">{post.created_at}</p>
      <p className="text-gray-700 font-medium mb-2">{post.description}</p>
      <p className="text-gray-800 text-sm">{post.content}</p>
    </div>
  );
}

// Главный компонент App
function App() {
  const postsData = [
    {
      id: 1,
      title: "Blancanieves",
      description: "¿Quién es la más bella del reino? ¿Cómo sobrevive Blancanieves en el bosque? ¿Quiénes son sus siete pequeños amigos y qué secreto esconde la manzana de la reina?",
      content: "Blancanieves es una joven princesa de piel blanca como la nieve. Huyendo de su malvada madrastra, encuentra refugio en una pequeña cabaña en el bosque junto a siete enanitos bondadosos. Sin embargo, la reina descubre su paradero y, disfrazada de anciana, le ofrece una manzana envenenada que sume a la princesa en un sueño profundo, del cual solo despertará con el beso de un amor verdadero.",
      created_at: "20/12/1812",
      image: "img/blancanieves.jpg"
    },
    {
      id: 2,
      title: "Caperucita roja",
      description: "¿Por qué Caperucita Roja habla con extraños en el bosque? ¿Qué planea el lobo feroz al llegar a la casa de la abuelita? ¿Logrará el cazador salvarlas a tiempo?",
      content: "Caperucita Roja es una niña que cruza el bosque para llevar una cesta de comida a su abuela enferma. En el camino, se encuentra con un lobo astuto que la engaña para llegar antes a la casa de la anciana. El lobo se devora a la abuela y se disfraza de ella para esperar a la niña. Afortunadamente, un valiente cazador escucha los gritos de auxilio y logra rescatar a ambas sanas y salvas.",
      created_at: "11/01/1697",
      image: "img/caperucita_roja.jpg"
    },
    {
      id: 3,
      title: "Cinderella",
      description: "¿Podrá una joven huérfana asistir al gran baile del palacio? ¿Qué pasa cuando el reloj marca las doce? ¿Cómo ayudará un zapato de cristal a cambiar su destino?",
      content: "Cenicienta es obligada por su malvada madrastra y hermanastras a trabajar como sirvienta. Con la ayuda de su Hada Madrina, se transforma en una hermosa princesa para asistir al baile real, bajo la condición de regresar antes de la medianoche. Al huir a toda prisa, pierde un zapato de cristal, el cual el príncipe utiliza para buscarla por todo el reino hasta encontrar al verdadero amor de su vida.",
      created_at: "11/01/1697",
      image: "img/cinderella.jpg"
    },
    {
      id: 4,
      title: "Hansel y Gretel",
      description: "¿Cómo se pierden dos hermanos en lo profundo del bosque? ¿De qué está hecha la misteriosa casa que encuentran? ¿Cómo lograrán escapar de la malvada bruja?",
      content: "Hansel y Gretel son dos hermanos abandonados en el bosque por sus padres debido a la pobreza. Siguiendo un rastro de migas de pan que desaparece, encuentran una asombrosa casa hecha de dulces y chocolate. Una anciana los invita a entrar, pero resulta ser una bruja que planea engordarlos para comérselos. Usando su ingenio, los niños logran engañar a la bruja, encerrarla en el horno y escapar con sus riquezas.",
      created_at: "20/12/1812",
      image: "img/hansel_y_gretel.jpg"
    }, 
    {
      id: 5,
      title: "La Bella",
      description: "¿Puede el amor verdadero romper una maldición eterna? ¿Por qué Bella decide quedarse en el castillo? ¿Qué misterio esconde la rosa mágica antes de perder su último pétalo?",
      content: "Bella es una joven brillante que se ofrece a ser prisionera en un castillo a cambio de la libertad de su padre. El dueño del lugar es una temible Bestia, un príncipe hechizado por su egoísmo. Con el tiempo, Bella descubre el buen corazón que se esconde tras la apariencia de la Bestia. Al enamorarse de él, rompe el poderoso hechizo justo a tiempo, devolviéndole su forma humana.",
      created_at: "01/01/1756",
      image: "img/la_bella.jpg"
    }, 
    {
      id: 6,
      title: "La Sirenita",
      description: "¿Qué está dispuesta a sacrificar una joven sirena por vivir en el mundo humano? ¿Qué trato oculta la bruja del mar? ¿Logrará conquistar el corazón del príncipe?",
      content: "Ariel es una joven sirena fascinada por el mundo de los humanos. Tras salvar a un príncipe de un naufragio, se enamora perdidamente de él. Desesperada por tener piernas, hace un pacto con Úrsula, la bruja del mar: entrega su hermosa voz a cambio de convertirse en humana. Ahora, tiene solo tres días para conseguir que el príncipe se enamore de ella sin poder emitir una sola palabra.",
      created_at: "07/04/1837",
      image: "img/la_sirenita.jpg"
    } 
  ];
  
  return (
    <div className="max-w-7xl mx-auto p-4 mt-10">
      <Header titulo="Cuentos de hadas para niños" />
      
      {/* Рендерим список постов с помощью .map() */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {postsData.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );    
} 

const container = document.getElementById('cuerpo');
const cuerpo = ReactDOM.createRoot(container);
cuerpo.render(<App />);
