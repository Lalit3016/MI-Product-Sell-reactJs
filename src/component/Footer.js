import React from 'react'
import "../styles/PreFooter.css"
import "../styles/Footer.css"


const repeatIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 44q-3.75 0-7.025-1.4-3.275-1.4-5.725-3.85Q8.8 36.3 7.4 33.025 6 29.75 6 26h3q0 6.25 4.375 10.625T24 41q6.25 0 10.625-4.375T39 26q0-6.25-4.25-10.625T24.25 11H23.1l3.65 3.65-2.05 2.1-7.35-7.35 7.35-7.35 2.05 2.05-3.9 3.9H24q3.75 0 7.025 1.4 3.275 1.4 5.725 3.85 2.45 2.45 3.85 5.725Q42 22.25 42 26q0 3.75-1.4 7.025-1.4 3.275-3.85 5.725-2.45 2.45-5.725 3.85Q27.75 44 24 44Z" /></svg>

const shieldIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m21.8 30.65 11.4-11.4-2.1-2.05-9.15 9.15-5.05-5.05-2.2 2.2Zm2.2 13.3q-7-1.75-11.5-8.125T8 21.85V9.95l16-6 16 6v11.9q0 7.6-4.5 13.975T24 43.95Zm0-3.1q5.75-1.9 9.375-7.175T37 21.85v-9.8l-13-4.9-13 4.9v9.8q0 6.55 3.625 11.825Q18.25 38.95 24 40.85ZM24 24Z" /></svg>

const mapIcon = <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M14.25 36V12h3v24Zm8.25 8V4h3v40ZM6 28v-8h3v8Zm24.75 8V12h3v24ZM39 28v-8h3v8Z" /></svg>



const youtubeIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" /></svg>



const twitterIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" /></svg>

const facebookIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" /></svg>

const instagramIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>








const Footer = ({footer}) => {
  return (
     <>
          <div className="PreFooter">
              <div>
                     {repeatIcon}
                  <p> <b>Hassle-free replacement</b> <br/>
                  10-day easy replacement policy on mi.com
                  </p>
              </div>
              <div>{shieldIcon} 
              <p> <b>100% secure payments</b> <br /> We support Cards, Wallets, EMI and COD</p></div>
              <div>{mapIcon} <p> <b>Vast service network</b> <br /> 1000 Mi service-centers across 600 cities</p></div>
          </div>

          <div className="PreFooter2">
              <div> <p>LET'S STAY IN TOUCH</p><span>Get updates on sales specials and more</span></div>

              <div>
                  <div>
                      <input type="email" name="email" placeholder="Enter Email Address" />
                      <button>›</button>
                  </div>
                  <span>Thanks. You're on our email list for special offers.</span>
              </div>

              <div>
                  <p>FOLLOW MI</p>
                  <span>We want to hear from you!</span>
              </div>

              <div>
                 {facebookIcon}  {youtubeIcon} {instagramIcon} {twitterIcon}
              </div>
          </div>


         {/* ******* footer ******* */}


          <div className="footer">
              <div>
                  <p> SUPPORT</p>
                  {footer.support.map((item, index) => (
                      <a key={item.url} href={item.url}>{item.name}</a>

                  ))}
              </div>

              <div>
                  <p> SHOP AND LEARN</p>
                  {footer.shopAndLearn.map((item, index) => (
                      <a key={item.url} href={item.url}>{item.name} </a>

                  ))}

              </div>
              <div>
                  <p> RETAIL STORE</p>
                  {footer.retailStore.map((item, index) => (
                      <a key={item.url} href={item.url}>{item.name}</a>

                  ))}
              </div>

              <div>
                  <p>  ABOUT</p>
                  {footer.aboutUS.map((item, index) => (
                      <a key={item.url} href={item.url}>{item.name}</a>

                  ))}
              </div>

              <div>
                  <p> CONTACT US</p>
                  {footer.contactUs.map((item, index) => (
                      <a key={item.url} href={item.url}>{item.name}</a>

                  ))}
              </div>

              <div>
                  <div>Chat with our Virtual AI Bot(24/7 Live Agent Support)</div><button>CHAT NOW</button>
              </div>



          </div>
          <div className="footerBorder">
              <div> Copyright © 2022 - 2070 Gurjar-Store. All Rights Reserved</div>
          </div>

          </>

  )
}

export default Footer