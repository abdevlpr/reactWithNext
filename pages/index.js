
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
        <Link href='/comp/test'><a>nav</a></Link>
      </li>
      <li>
        <Link href='/comp/discuss'><a>discuss</a></Link>
      </li>
      <li>
        <Link href='/comp/lesson'><a>lesson</a></Link>
      </li>
      <li>
        <Link href='/comp/physics'><a>physics</a></Link>
      </li>
      
    </ul>
    </div>
  )
}
