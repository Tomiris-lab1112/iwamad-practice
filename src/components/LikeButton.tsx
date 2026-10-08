import { useLikes } from '../context/LikesContext'
import { Button } from './ui/Button'

export default function LikeButton() {
  const { likes, addLike } = useLikes()

  return (
    <Button variant="primary" aria-label="Like" onClick={addLike}>
      ❤️ Likes: {likes}
    </Button>
  )
}