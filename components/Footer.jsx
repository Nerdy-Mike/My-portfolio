import Link from './Link';
import siteMetadata from '../data/siteMetadata';

export default function Footer() {
  return (
    <footer className="w-screen fixed z-50 bottom-0">
      <div className="mx-12 mt-16 flex flex-col items-center  ">

        <div className="text-md mb-2 flex space-x-2 text-gray-600 dark:text-gray-400">
          <Link href="/">{siteMetadata.author}</Link>
          <div>{' • '}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
        </div>

      </div>
    </footer>
  );
}
