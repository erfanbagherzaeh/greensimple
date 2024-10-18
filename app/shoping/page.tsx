import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import flower01 from '../../public/image/flower01.jpg'
function Shopping(){
    return(
        <>
        <Navbar></Navbar>
        <div className="img-bg w-[100vw] h-[450px] bg-lime-500 flex flex-row justify-center items-center">
            <div className="w-[500px] h-[200px]  flex flex-col items-center">
                <div style={{fontSize:'30px'}} className="w-[350px] h-auto  my-5">
                    <h1 className="flex flex-row justify-center text-white">راه حل های مناسب وسبز</h1>
                </div>
                <div className="text-white" style={{fontSize:'14px'}}>
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

        <div className='w-full h-14  mt-12'>
            <div className='w-[80%] h-full m-auto text-white'>
                <h1 style={{fontSize:'25px'}}>خرید گیاه و گلدان</h1>
            </div>
        </div>

        <div className="w-full h-auto  flex flex-wrap justify-center mt-10">
            <div className="mt-2 mb-2 w-[250px] h-[250px] border rounded-lg bg-slate-200 flex flex-col items-center mx-2">
                <div className="w-[85%] h-[80%] bg-orange-400 rounded-lg mt-1"></div>
                <div>
                    <button className="bt1 mt-2"> خرید</button>
                </div>
            </div>

            <div className="mt-2 mb-2 w-[250px] h-[250px] border rounded-lg bg-slate-200 flex flex-col items-center mx-2">
                <div className="w-[85%] h-[80%] rounded-lg bg-orange-400 mt-1"></div>
                <div>
                    <button className="bt1 mt-2"> خرید</button>
                </div>
            </div>

            <div className="mt-2 mb-2 w-[250px] h-[250px] border rounded-lg bg-slate-200 flex flex-col items-center mx-2">
                <div className="w-[85%] h-[80%] rounded-lg bg-orange-400 mt-1">
                    
                </div>
                <div>
                    <button className="bt1 mt-2"> خرید</button>
                </div>
            </div>

            <div className="mt-2 mb-2 w-[250px] h-[250px] border rounded-lg bg-slate-200 flex flex-col items-center mx-2">
                <div className="w-[85%] h-[80%] rounded-lg bg-orange-400 mt-1"></div>
                <div>
                    <button className="bt1 mt-2"> خرید</button> 
                </div>
            </div>
        </div>

        <div className='w-full h-14  mt-12'>
            <div className='w-[80%] h-full m-auto text-white'>
                <h1 style={{fontSize:'25px'}}>توضیحات درباره گیاهان</h1>
            </div>
        </div>
        
        <div className='w-full h-[280px] my-20 md:h-[154px]'>
            <div className='w-[80%] h-full  m-auto flex border-2 rounded-lg'>
                <div className='w-[100%] h-full  md:w-[100%]'>
                    <p style={{fontSize:'14px'}} className='text-white p-8'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
            </div>
        </div>

        <Footer></Footer>
        </>
    )
}

export default Shopping