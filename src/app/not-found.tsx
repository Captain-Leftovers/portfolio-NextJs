import Link from 'next/link';
 
export default function NotFound() {
  return (
    <div  className='globalNotFound'>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <div>
         <Link href="/" className='globalNotFoundLinkBack' >Return Home</Link>
      </div>
    </div>
  );
}