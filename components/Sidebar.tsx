import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className='items-center p-6'>
          <div className="flex flex-col items-center gap-6">
              <Image
                  src="./linkedin.svg"
                  alt="logo"
                  width={25}
                  height={25}
                  className="object-contain"
              />
              <Image
                  src="./instagram.svg"
                  alt="logo"
                  width={19}
                  height={19}
                  className="object-contain"
              />
              <Image
                  src="./twitter.svg"
                  alt="logo"
                  width={19}
                  height={19}
                  className="object-contain"
              />
          </div>
    </div>
  )
}

export default Sidebar