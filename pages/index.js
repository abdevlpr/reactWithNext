
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
        <Link href='/comp/discuss'><a>discuss</a></Link>
      </li>
      <li>
        <Link href='/comp/frame50'><a>frame50</a></Link>
      </li>
      <li>
        <Link href='/comp/lesson'><a>lesson</a></Link>
      </li>
      <li>
        <Link href='/comp/physics'><a>physics</a></Link>
      </li>
      <li>
        <Link href='/comp/search'><a>search</a></Link>
      </li>
      <li>
        <Link href='/comp/settings'><a>settings</a></Link>
      </li>
      <li>
        <Link href='/comp/test'><a>test</a></Link>
      </li>
      <li>
        <Link href='dashboard'><a>dashboard</a></Link>
      </li>

      
    </ul>
    </div>
  )
}
