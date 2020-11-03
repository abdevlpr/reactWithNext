import Link from "next/link"

export default function Home() {
  return (
    <div>
    <h1>professor app</h1>
    <ul>
      <li>
        <Link href='/signin'><a>sign in</a></Link>
      </li>
      <li>
        <Link href='/signup'><a>sign up</a></Link>
      </li>
      <li>
        <Link href='/recover'><a>recover</a></Link>
      </li>
      <li>
        <Link href='dashboard'><a>dashboard</a></Link>
      </li>
    </ul>
    </div>
  )
}
