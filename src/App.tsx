import { Header } from './components/Header';
import { ProfileCard } from './components/ProfileCard';
import { Footer } from './components/Footer';
import type { Skill } from './components/SkillBadge';
import avatarImage from './avatar.jpeg';
import './App.css';

const SKILLS_DATA: Skill[] = [
  { id: 1, label: 'React' },
  { id: 2, label: 'TypeScript' },
  { id: 3, label: 'HTML & CSS' },
  { id: 4, label: 'Git & GitHub' },
];

export function App() {
  return (
    <div className="app-container">
      <Header 
        title="Student Profile" 
        subtitle="IWaMAD Course Practice Work" 
      />
      
      <main>
        <ProfileCard
          name="Oraz Tomiris"
          role="IT Management Student"
          avatarUrl={avatarImage}
          bio="Passionate about web development and cloud technologies."
          skills={SKILLS_DATA}
        />
      </main>

      <Footer 
        year={new Date().getFullYear()} 
        author="Oraz" 
      />
    </div>
  );
}

export default App;