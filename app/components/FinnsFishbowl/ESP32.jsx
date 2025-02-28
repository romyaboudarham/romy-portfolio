export default function ESP32({ id }) {
    return (
      <section id={id} className="mt-8 lg:mt-10">
        <div className="text-2xl font-semibold opacity-90">
            Wireless OSC Communication: Sending Data from ESP32 to p5.js
        </div>
        <p className="mt-2 lg:text-xl text-gray-800">
        I used a force-sensitive resistor to detect pressure by measuring increases in output voltage. Lower resistance indicated higher pressure, meaning the sensor detected when a person was standing on it. 
        The ESP32 sent this data to a p5.js script via OSC messaging, triggering the image fade-in. 
        To align the projection with my installation space, I calibrated the image using the p5.mapper library and projected my screen onto the ground.
        </p>
        <a
            href="https://github.com/romyaboudarham/finn-s-fishbowl/blob/main/chapter-1/arduino-ino/chapter1-esp32-FSR/chapter1-esp32-FSR.ino"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center text-blue-600 hover:underline"
            >
            <img src="/media/github-logo.png" alt="GitHub" className="w-5 h-5 mr-2" />
            ESP32 Force Sensor OSC Code
        </a>
        <a
            href="https://github.com/romyaboudarham/finn-s-fishbowl/blob/main/chapter-1/public/js/script.js"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center text-blue-600 hover:underline"
            >
            <img src="/media/github-logo.png" alt="GitHub" className="w-5 h-5 mr-2" />
            P5.js Projection Mapping Code
        </a>
  
        <div className="mt-6 relative flex flex-col md:flex-row gap-6 items-center justify-center">
          {/* GIF 1 */}
          <div className="flex flex-col items-center w-full md:w-1/2">
            <h2 className="text-xl opacity-90 mb-2">Working Prototype</h2>
            <img
              src="/media/projects/FinnsFishbowl/esp32-test.gif"
              alt="Interaction 1"
              className="w-full max-h-[500px] md:max-h-[630px] object-cover rounded-md"
            />
          </div>
  
          {/* GIF 2 */}
          <div className="flex flex-col items-center w-full md:w-1/2">
            <h2 className="text-xl opacity-90 mb-2">Final Installation</h2>
            <img
              src="/media/projects/FinnsFishbowl/esp32-final.gif"
              alt="Interaction 2"
              className="w-full max-h-[500px] md:max-h-[630px] object-cover rounded-md"
            />
          </div>
        </div>
      </section>
    );
  }