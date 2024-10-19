import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import Link from 'next/link'
import Image from 'next/image'
import img01 from '../public/image/free-png-bbmxs.png'
import img02 from '../public/image/01.jpg'
import img04 from '../public/image/05.jpg'
import img06 from '../public/image/07.jpg'
import hum from '../public/image/human.png'
function Home(){
  return(
    <>
        <Navbar></Navbar>
        <div className="img-bg w-[100vw] h-[650px] bg-lime-500 flex flex-row justify-center items-center">
            <div className="w-[600px] h-[200px]  flex flex-col items-center">
                <div style={{fontSize:'50px'}} className="w-[550px] h-auto  my-5">
                    <h1 className="flex flex-row justify-center text-white">راه حل های مناسب وسبز</h1>
                </div>
                <div className="text-white" style={{fontSize:'25px'}}>
                    <p>طراحی گیاهان فوقالعادی ای برای دفاتر وابارارتمان ایجاد <br />
کنید به ایده های جدید خود طراوت اضافه کنید
                    </p>
                </div>
                <div>
                    <button className="bt1 mx-5 mt-4 mr-32">
                        خواندن مقالات
                    </button>
                    <button className="text-white bt2"> 
                        ویدیو باغبانی
                    </button>
                </div>
            </div>
        </div>
        <div className="w-full h-[200px]  flex">
            <div className="w-[50%]">
                <Image className="w-[0] md:w-[450px] md:h-[450px] md:relative md:bottom-36" src={img01} alt=''></Image>
            </div>
            <div className="w-[100%] h-auto  flex flex-row justify-center items-center
            md:w-[50%]
            ">
                <h1 style={{fontSize:'25px'}} className="text-white">معرفی محصولات ما</h1>
            </div>
        </div>
        <div className='w-full h-auto flex flex-wrap  flex-col p-5'>
            <div className='border-dashed border-2 w-3/5 md:h-[350px]  bg-lime-950 rounded-lg m-auto flex flex-row flex-wrap justify-center items-center'>
                <div className='col flex flex-col items-center mx-7'>
                    <div className='w-[250px] h-[180px] mt-1 mr-2' >
                        <Image className='rounded-lg' src={img02} alt=''></Image>
                    </div>
                    <div>
                        <button className='bt1 text-white'>
                            خرید
                        </button>
                    </div>
                </div>

                <div className='col flex flex-col items-center mx-7'>
                    <div className='w-[250px] h-[180px] mt-1 mr-2' >
                        <Image className='rounded-lg' src={img04} alt=''></Image>
                    </div>
                    <div>
                        <button className='bt1 text-white'>
                            خرید
                        </button>
                    </div>
                </div>

                <div className='col flex flex-col items-center mx-7'>
                    <div className='w-[250px] h-[180px] mt-1 mr-2' >
                        <Image className='rounded-lg w-[250px] h-[170px]' src={img06} alt=''></Image>
                    </div>
                    <div>
                        <button className='bt1 text-white'>
                            خرید
                        </button>
                    </div>
                </div>

            </div>
        </div>

        <div className='w-full h-14  mt-12'>
            <div className='w-3/5 h-full m-auto text-white'>
                <h1 style={{fontSize:'25px'}}>توضیحات درباره گیاهان</h1>
            </div>
        </div>
        
        <div className='w-full h-[550px] my-20 md:h-[254px]'>
            <div className='w-3/5 h-full  m-auto flex border-dashed border-2 rounded-lg bg-slate-950'>
                <div className='w-[100%] h-[500px]  md:w-[60%]'>
                    <p style={{fontSize:'15px'}} className='text-white p-8'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
                <div className='w-0 h-0 md:w-[40%] md:h-full'>
                    <Image className='w-[330px] relative bottom-20' src={hum} alt=""></Image>
                </div>
            </div>
        </div>

        <Footer></Footer>
    </>
  )
}

export default Home