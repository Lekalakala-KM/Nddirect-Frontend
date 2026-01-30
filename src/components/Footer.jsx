import React from 'react'

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    
  return (
    <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.7112181565813!2d18.41831452462499!3d-33.92283127185757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc67c979f50545%3A0xfd42b7f278cb3964!2sOHC%20LANGUAGE%20CENTER!5e0!3m2!1sen!2sza!4v1769785687787!5m2!1sen!2sza" style={{"border":0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-full h-[240px]'></iframe>

        <div className="text-center font-thin py-10 bg-[#211a44] text-[#f0ede8]">
            <p>© {year} ND Direct Marketing. All Rights Reserved.</p>
            <small className="block capitalize hover:underline underline-offset-4 transition-all duration-300">
              <a
                href="https://www.tiberiuscg.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className=" text-[#b37e56]"
              >
                Tiberius Copywriting & Graphics
              </a>
            </small>
          </div>
    </div>
    
  )
}

export default Footer