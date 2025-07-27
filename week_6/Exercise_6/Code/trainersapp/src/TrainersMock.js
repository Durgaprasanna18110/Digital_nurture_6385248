// src/TrainersMock.js
import Trainer from './trainer';

const trainers = [
  new Trainer(1, "Alice", "alice@example.com", "1234567890", "React", "Hooks, JSX, Redux"),
  new Trainer(2, "Bob", "bob@example.com", "0987654321", "Java", "Spring Boot, Hibernate"),
  new Trainer(3, "Charlie", "charlie@example.com", "1122334455", "Python", "Django, Flask"),
];

export default trainers;
