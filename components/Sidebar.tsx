import Image from 'next/image';

const Sidebar = () => {
  return (
    <div className='items-center'>
          <div className="flex flex-col items-center gap-6 p-6 border-[#414141] rounded-lg border-4">
              <Image
                  src="./linkedin.svg"
                  alt="logo"
                  width={28}
                  height={28}
                  className="object-contain animate-pulse cursor-pointer
                  hover:animate-none
                  hover:scale-150
                  hover:border-blue-500
                  hover:border-2 hover:rounded-md
                  transition duration-200
                  "
              />
              <Image
                  src="./instagram.svg"
                  alt="logo"
                  width={25}
                  height={25}
                  className="object-contain  animate-pulse cursor-pointer
                  hover:animate-none
                  hover:scale-150
                  hover:border-lime-400
                  hover:border-2
                  hover:rounded-md
                  transition duration-200"
              />
              <Image
                  src="./twitter.svg"
                  alt="logo"
                  width={25}
                  height={25}
                  className="object-contain  animate-pulse cursor-pointer
                  hover:animate-none
                  hover:scale-150
                  hover:border-teal-600
                  hover:border-2
                  hover:rounded-md
                  transition duration-200"
              />
              <Image
                  src="./github.svg"
                  alt="logo"
                  width={25}
                  height={25}
                  className="object-contain  animate-pulse cursor-pointer
                  hover:animate-none
                  hover:scale-150
                  hover:border-red-600
                  hover:border-4 hover:rounded-xl
                  transition duration-200"
              />
          </div>
    </div>
  )
}

export default Sidebar