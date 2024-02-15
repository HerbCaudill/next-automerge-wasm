import { next as A } from '@automerge/automerge'

export default function Home() {
  const doc = A.from({ message: 'Hello, world' })
  return <div>{doc.message}</div>
}
