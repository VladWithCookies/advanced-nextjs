import Link from 'next/link';

const HomePage = () => {
  return (
    <>
      <div>
        <Link href='/static'>
          <a>
            Static page
          </a>
        </Link>
      </div>
      <div>
        <Link href='/server-side'>
          <a>
            Sever side rendered page
          </a>
        </Link>
      </div>
      <div>
        <Link href='/static-with-data-fetch'>
          <a>
            Static page with data fetch
          </a>
        </Link>
      </div>
      <div>
        <Link href='/using-sass'>
          <a>
            Using sass
          </a>
        </Link>
      </div>
      <div>
        <Link href='/using-api'>
          <a>
            Using API route
          </a>
        </Link>
      </div>
      <div>
        <Link href='/using-dynamic-import'>
          <a>
            Using dynamic import
          </a>
        </Link>
      </div>
      <div>
        <Link href='/not-found'>
          <a>
            Custom error page
          </a>
        </Link>
      </div>
      <div>
        <Link href='/css-in-js'>
          <a>
            Using custom babel config & custom document for Styled Components integration
          </a>
        </Link>
      </div>
    </>
  )
}

export default HomePage
