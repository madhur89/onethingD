import Image from "next/image";


export default function Home() {
  return (
    <>
{/* navbar */}
      <div class="parent container-fluid mx-auto bg-white">
        <header class="text-gray-600 body-font bg-white">
          <div class="container mx-auto  flex flex-wrap p-6 px-10 flex-col md:flex-row items-center">
            <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span class="ml-3 text-xl font-bold">AFC<span class="font-">Inc</span></span>
            </a>
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
              <a class="mr-5 hover:text-gray-900">Track Application</a>
              <a class="mr-5 hover:text-gray-900">Manage My Card</a>
              <a class="mr-5 hover:text-gray-900">FAQs</a> 
             
            </nav>
            <button class="inline-flex font-medium items-center bg-red-400 border-0 py-2 rounded-xl px-3 focus:outline-none hover:bg-orange-200 rounded text-white mt-4 md:mt-0">
            Get started
            </button>
          </div>
        </header>
{/* navend */}


{/* section1 */}

<section class="text-gray-600 body-font bg-white">
  <div class="container mx-auto flex px-10 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left animate-fade-right mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font  sm:text-4xl text-3xl mb-4 font-bold  text-gray-900 animate-fade-right ">Build a Credit Card
        <br class="hidden lg:inline-block"/>That is Definitely Yours
      </h1>
      <p class="mb-8 leading-relaxed">With the OneSync Credit Card you can customise your card the way you want</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white rounded-xl  bg-red-400 border-0 py-2 px-6 
        focus:outline-none hover:bg-indigo-600 rounded text-lg">Get Started <img className="ms-2 animate-spin animate-infinite animate-delay-3000 animate-normal" src="https://i.imghippo.com/files/PCrTl1707684828.png" width={"30px"}/></button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 xl:me-8">
      {/* <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/> */}
      <Image class="object-cover object-center rounded animate-fade-left " alt="hero" width ={720} height={600} src={"/heroimg.png"}/>

    </div>
  </div>
</section>


{/* section2 */}


<section class="text-gray-600 body-font sec-2 animate-fade animate-thrice animate-ease-in animate-alternate animate-fill-both">
  <div class="container  py-24 mx-auto flex flex-wrap">
    <h2 class="sm:text-3xl text-2xl text-white font-medium title-font mb-2 px-10 md:w-2/5">The Freedom to Create The Credit Card You Want</h2>
    <div class="md:w-3/5 md:pl-6 sec_para px-11">
      <p class="leading-relaxed text-white">That's why it comes with benefits & rewards chosen by you. Available in 
      multiple designs, your card comes in a style selected by you. You can come back each year, to edit your benefits 
      or update your style.</p>
      <p class="leading-relaxed text-white mt-5">Your OneSync Credit Card stays true to you, year after year. <br/>It’s the only card you’ll ever need.</p>
      <a class="text-white  underline">Get Started</a>
    </div>
    
  </div>
</section>


{/* section3 */}  


<section class="text-gray-600 body-font section3_1" style={{"background":"url(/oo.png)", 
"backgroundRepeat":"no-Repeat","backgroundSize":"cover"}}  >
  <div class="container px-5 py-24 mx-auto flex flex-wrap items-center  ">
   
    <div class="lg:w-2/6 md:w-1/2  rounded-lg p-8 flex flex-col md:ml-auto w-full mt-5 md:mt-0 section3_1"  >
      
      <div class="relative mb-8 ">
       
        <input type="text" id="full-name" name="full-name" placeholder="Enter your phone number" class="w-full border-none shadow-md bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-8">
        <input type="email" id="email" name="email" placeholder="Enter your PAN number" class="w-full shadow-md bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-8">
        <input type="email" id="email" name="email" placeholder="Enter your Address" class="w-full shadow-md bg-white  rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      
     
    </div>
     
    <div class="lg:w-3/5 md:w-1/2 md:pl-16 lg:pl-5 ml-11 pl-8">
    <span class="flex justify-center"><img className="animate-ping animate-thrice animate-delay-1000 animate-ease-linear animate-normal" src={"/insurance 1.png"} /></span>
      <h2 class="title-font font-medium text-3xl text-gray-900 flex md:justify-center">Fill Eligibility Form</h2>
      <p class="leading-relaxed mt-4 flex lg:justify-center">Tell us about yourself, to find out if <br/>  you’re eligible to apply.</p>
    </div>

  </div>
</section>


{/* section4 */}
<section class="bg-rose-100 ">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <img src="https://i.imghippo.com/files/adcgH1707676473.png" className="ms-3"/>
            <h1 class="max-w-2xl mb-4 px-5 text-4xl font-medium tracking-tight leading-none md:text-5xl xl:text-6xl text-black">Choose Your Rewards</h1>
            <p class="max-w-2xl px-5 mb-6  font-light text-black lg:mb-8 md:text-lg lg:text-xl">Match your card to your lifestyle. We’ve got benefits from across brands & categories for you to choose from. Each benefit has an attached fee. Just add the ones you like to your card.</p>
  
        
        </div>
<div class=" lg:mt-0 lg:col-span-5 lg:flex">
<div className="carousel carousel-center  max-w-md p-4 space-x-4  rounded-box" data-bs-interval="true">
  <div className="carousel-item">
    <img src="https://i.imghippo.com/files/Gx8xy1707675251.png" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://i.imghippo.com/files/Gx8xy1707675251.png" className="rounded-box" />
  </div> 
  <div className="carousel-item">
    <img src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" className="rounded-box" />
  </div> 
  
</div>
        </div>                
    </div>
</section>

<section class="bg-violet-50">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://i.imghippo.com/files/kRCrg1707678818.png" alt="mockup"/>    
      </div>
      
        
                  
        <div class="ml-auto place-self-center lg:col-span-7">
        <img className="mb-1" src="https://i.imghippo.com/files/JFIRV1707678590.png"/>
            <h1 class="max-w-2xl mb-4 text-4xl font-medium tracking-tight leading-none md:text-5xl xl:text-6xl text-black">Select Your Style</h1>
            <p class="max-w-2xl mb-6 font-light text-black lg:mb-8 md:text-lg lg:text-xl">Match your card to your personality. Whether you like a minimal look or something that catches everyone’s eyes, we’ve got a style for you. You can update your style every year, for a small fee </p>
            
        </div>
              
    </div>
    
</section>


{/* sectionaccord */}

<div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen my-8">
	<div class="flex flex-col items-center">
		<h2 class="font-bold text-5xl mt-5 tracking-tight text-black">
			FAQs
		</h2>
		<p class="text-neutral-500 text-xl mt-3">
			Frequenty asked questions
		</p>
	</div>
	<div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8 text-red-400">
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> What is a SAAS platform?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
					 SAAS platform is a cloud-based software service that allows users to access
					and use a variety of tools and functionality.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> How does  billing work?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
					We offers a variety of billing options, including monthly and annual subscription plans,
					as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit
					card or other secure online payment method.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> Can I get a refund for my subscription?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
					We offers a 30-day money-back guarantee for most of its subscription plans. If you are not
					satisfied with your subscription within the first 30 days, you can request a full refund. Refunds
					for subscriptions that have been active for longer than 30 days may be considered on a case-by-case
					basis.
				</p>
			</details>
		</div>
		<div class="py-5">
			<details class="group">
				<summary class="flex justify-between items-center font-medium cursor-pointer list-none">
					<span> How do I cancel my subscription?</span>
					<span class="transition group-open:rotate-180">
                <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
</svg>
              </span>
				</summary>
				<p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
					To cancel your We subscription, you can log in to your account and navigate to the
					subscription management page. From there, you should be able to cancel your subscription and stop
					future billing.
				</p>
			</details>
		</div>
	</div>
</div>

{/* footer */}

<div className="hero h-max bg-slate-900 py-10">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-3xl font-medium text-white ">OneSync Credit Card</h1>
      <p className="py-2">Experience Freedom</p>
      <button className="btn btn-primary rounded-full px-8 text-white">Get Started</button>
    </div>
    
  </div>
  
</div>


<hr class="w-1/3  bg-gray-400 mx-auto"/>







<footer className="footer   p-10 bg-slate-900 text-neutral-content">
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Contact</a>
    
  </nav>

  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Contact</a>
    
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Contact</a>
    
  </nav>
</footer>



      </div>
      
    </>
  );
}
