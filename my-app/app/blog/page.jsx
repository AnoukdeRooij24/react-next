import Link from 'next/link'


export default function Page() {
  return (
    <>
      <h1>Hello, blog!</h1>
      <Link href="/blog/post">Ga naar post</Link>
    </>
  )
}