import Image from 'next/image'
import Products from './components/products'
import Navbar from './components/navbar'

export default function Home() {
  return (
    // <h1 className='text-center text-lg'>Hello from SazimStore!</h1>
    <div>
      <div>
        <Navbar/>
      </div>
      <div className='flex justify-center'>
        <Image
          src="/cover-photo.jpg"
          width={700}
          height={500}
          alt="Cover photo" 
          />
      </div>

      <div>
        <Products/>
      </div>
    </div>
    
    
  )
}
