'use client'

import { useEffect, useState } from 'react'

export default function PageComponent() {
  const [message, setMessage] = useState<string | undefined>(undefined)
  useEffect(() => {
    import('@automerge/automerge').then(({ next: A }) => {
      const foo = A.from({ message: 'Hello, world!' })
      setMessage(foo.message)
    })
  }, [])

  return <p>{message ?? 'Loading...'}</p>
}

// import { next as A } from '@automerge/automerge'

// export default function Home() {
//   const foo = A.init()
//   return <p>Hello, world</p>
// }
