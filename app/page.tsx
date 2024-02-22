'use client'

import { next as A } from '@automerge/automerge'

export default function Home() {
  const foo = A.init()
  return <p>Hello, world</p>
}
