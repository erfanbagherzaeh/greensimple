import Image from 'next/image'
import logo from '../../public/image/logo.jpg'
import Link from 'next/link'
function Navbar(){
    return(
        <>
        {/* stable */}
        <div className=" w-full h-14 nav flex shadow-xl">
            <div className="right w-full h-full flex flex-row justify-center items-center
            md:w-[50%] md:h-full md:flex md:justify-start">
                <div className="w-[20%] h-full ">
                    <Image className='logo w-[90%] h-[90%]  rounded-md mt-0.5 mr-1' src={logo} alt=''/>
                </div>
                <div className="w-[80%] h-full  flex flex-row justify-center items-center text-white
                md:justify-start">
                    <Link href={'/'}>
                        <div style={{fontSize:'12px'}} className="md:mx-5 mx-2 hover:border-b-2 border-yellow-300">صفحه  اصلی</div>
                    </Link>
                    
                    <Link href={'/shoping'}>
                        <div style={{fontSize:'12px'}} className="md:mx-5 mx-2 hover:border-b-2 border-yellow-300">فروشگاه</div>
                    </Link>
                    
                    <Link href={'/about'}>
                        <div style={{fontSize:'12px'}} className="md:mx-5 mx-2 hover:border-b-2 border-yellow-300">درباره ما</div>
                    </Link>
                    
                </div>
            </div>

            {/* in medium size */}
            <div className="left w-0 h-0 
            md:w-[50%] md:h-full  md:flex md:flex-row md:justify-end md:pl-16">
                <div className="w-[200px] h-[40px]  mt-2 flex">
                    <div className="w-[20%]  h-full bg-white rounded-lg">
                    <span style={{fontSize:'20px'}} className="material-symbols-outlined mt-2 mr-2 bg-white border rounded-full cursor-pointer">
                    search
                    </span>
                    </div>
                    <div className="w-[80%] h-full ">
                        <input className="w-[150px] h-[40px] rounded-lg" type="text" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar