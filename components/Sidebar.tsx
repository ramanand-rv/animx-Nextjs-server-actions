import Image from 'next/image';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <div className='items-center'>
            <div className="flex flex-col items-center gap-6 p-6">
                <div className="hover:scale-150
                 transition duration-150 hover:border-l-2 hover:border-t-2 hover:border-white p-2 hover:animate-spin ">
                    <Link href={"https://www.linkedin.com/in/ramanand-rv/"}>
                        <Image
                            src="./linkedin.svg"
                            alt="logo"
                            width={28}
                            height={28}
                            className="object-contain 
                        "/>
                    </Link>
                </div>

                <div className="hover:scale-150 transition duration-150 hover:border-l-2 hover:border-b-2 hover:border-white p-2 hover:animate-spin ">
                    <Link href={"https://www.instagram.com/ramanand_rv/"}>
                        <Image
                            src="./instagram.svg"
                            alt="logo"
                            width={28}
                            height={28}
                            className="object-contain 
                        "/>
                    </Link>
                </div>

                <div className="hover:scale-150 transition duration-150 hover:border-t-2 hover:border-r-2 hover:border-white border-spacing-4 p-2 hover:animate-spin ">
                    <Link href={"https://twitter.com/pyaracetamol0mg"}>
                        <Image
                            src="./twitter.svg"
                            alt="logo"
                            width={28}
                            height={28}
                            className="object-contain 
                        "/>
                    </Link>
                </div>

                <div className="hover:scale-150 
                transition duration-150 hover:border-l-2 hover:border-b-2 hover:border-white border-spacing-4 p-2 hover:animate-spin ">
                    <Link href={"https://github.com/ramanand-rv"}>
                        <Image
                            src="./github.svg"
                            alt="logo"
                            width={28}
                            height={28}
                            className="object-contain 
                        " />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar