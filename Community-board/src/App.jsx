import './App.css';
import Card from './components/Card.jsx';

const gymResources = [
  {
    title: 'Yoga Class',
    description: 'Join our morning yoga sessions to improve flexibility and reduce stress.',
    image: '/assets/yoga-class.webp',
    url: 'https://en.wikipedia.org/wiki/Yoga'
  },
  {
    title: 'Weight Training 101',
    description: 'Learn the basics of weight training with our certified instructors.',
    image: '/assets/weight-training.jpeg',
    url: 'https://en.wikipedia.org/wiki/Weight_training'
  },
  {
    title: 'HIIT Workout',
    description: 'High-Intensity Interval Training to burn calories fast.',
    image: '/assets/hiit-workout.jpeg',
    url: 'https://en.wikipedia.org/wiki/High-intensity_interval_training'
  },
  {
    title: 'New Treadmills',
    description: 'We’ve added new state-of-the-art treadmills to our gym.',
    image: '/assets/treadmill.jpeg',
    url: 'https://en.wikipedia.org/wiki/Treadmill'
  },
  {
    title: 'Spinning Class',
    description: 'Burn calories with our fun and energetic spinning classes.',
    image: '/assets/spinning-class.jpeg',
    url: 'https://en.wikipedia.org/wiki/Indoor_cycling'
  },
  {
    title: 'Pilates Workshop',
    description: 'Improve your core strength and posture with our Pilates workshop.',
    image: '/assets/pilates-workshop.jpeg',
    url: 'https://en.wikipedia.org/wiki/Pilates'
  },
  {
    title: 'Boxing Training',
    description: 'Learn boxing techniques and improve cardiovascular health.',
    image: '/assets/boxing-training.jpeg',
    url: 'https://en.wikipedia.org/wiki/Boxing'
  },
  {
    title: 'Zumba Dance',
    description: 'Join our fun Zumba dance class to burn calories while dancing.',
    image: '/assets/zumba-dance.jpeg',
    url: 'https://en.wikipedia.org/wiki/Zumba'
  },
  {
    title: 'CrossFit Basics',
    description: 'Get started with CrossFit, a high-intensity strength and conditioning workout.',
    image: '/assets/crossfit-basics.jpeg',
    url: 'https://en.wikipedia.org/wiki/CrossFit'
  },
  {
    title: 'Swimming Pool Access',
    description: 'Relax and unwind with access to our indoor swimming pool.',
    image: '/assets/swimming-pool.jpeg',
    url: 'https://en.wikipedia.org/wiki/Swimming_pool'
  }
];


const App = () => {
  return (
    <div className="App">
      <h1>Gym Community Board</h1>
      <p>Join our community of like-minded individuals who are passionate about fitness and are eager to learn more about the gym.</p>
      <div className="card-grid">
        {gymResources.map((resource, index) => (
          <Card
            key={index}
            title={resource.title}
            description={resource.description}
            image={resource.image}
            url={resource.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
