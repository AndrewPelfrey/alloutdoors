import {
    MapPinIcon,
    ClockIcon,
    PhoneIcon,
  } from '@heroicons/react/24/outline';
  import { FaFacebookF, FaInstagram } from 'react-icons/fa';

  
  function Operation() {
    return (
      <section className="relative bg-black/50 backdrop-blur-sm text-white py-20" id="details">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-12" data-aos="fade-up">
            Serving Greater Cleveland
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Location */}
            <div data-aos="fade-up" data-aos-delay="100" className="text-center md:text-left">
              <MapPinIcon className="w-10 h-10 mx-auto md:mx-0 text-yellow-400 mb-2" />
              <h3 className="text-xl font-semibold mb-4 uppercase">Areas We Serve</h3>
              <ul className="space-y-2 font-body">
                <li>Cleveland</li>
                <li>Parma</li>
                <li>Lakewood</li>
                <li>Strongsville</li>
                <li>Medina</li>
                <li>Mentor</li>
              </ul>
            </div>
  
            {/* Hours */}
            <div data-aos="fade-up" data-aos-delay="200" className="text-center md:text-left">
              <ClockIcon className="w-10 h-10 mx-auto md:mx-0 text-yellow-400 mb-2" />
              <h3 className="text-xl font-semibold mb-4 uppercase">Business Hours</h3>
              <ul className="space-y-2 font-body">
                <li>Mon–Fri: 8am – 6pm</li>
                <li>Saturday: 9am – 2pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
  
            {/* Contact */}
            <div data-aos="fade-up" data-aos-delay="300" className="text-center md:text-left">
              <PhoneIcon className="w-10 h-10 mx-auto md:mx-0 text-yellow-400 mb-2" />
              <h3 className="text-xl font-semibold mb-4 uppercase">Contact Us</h3>
              <p>
                <strong>Phone:</strong>{' '}
                <a href="tel:2161234567" className="hover:underline text-yellow-400">
                  216-123-4567
                </a>
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a href="mailto:info@alloutdoorfence.com" className="hover:underline text-yellow-400">
                  info@alloutdoorfence.com
                </a>
              </p>
              <div className="flex justify-center md:justify-start space-x-4 mt-4">
                <a href="#" aria-label="Facebook" className="hover:text-flag-red text-2xl">
  <FaFacebookF />
</a>
<a href="#" aria-label="Instagram" className="hover:text-flag-red text-2xl">
  <FaInstagram />
</a>

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Operation;
  