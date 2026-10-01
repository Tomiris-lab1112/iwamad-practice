import avatarImg from '../avatar.jpeg'
import LikeButton from '../components/LikeButton'

export default function HomePage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', padding: '20px' }}>
      
      {/* Твое круглое фото */}
      <img 
        src={avatarImg} 
        alt="Мое фото" 
        style={{
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '4px solid #007bff',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}
      />

      <h1>Home</h1>
      <p>Hello! My name is Oraz Tomiris</p>
      
      <div style={{ marginTop: '20px' }}>
        <LikeButton />
      </div>
    </div>
  )
}