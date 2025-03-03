import { useEffect, useState } from "react";

export default function NextSteps() {
  return (
    <section>
      {/* Text Content */}
      <div>
        <p className="mt-2 lg:text-xl text-gray-800">
          <ul class="list-disc pl-5">
            <li>Conduct more onsite user testing to enhance the map and way finding part of the experience.</li>
            <li>Finalize the app and make it accessible to the public!</li>
            <li>Make more! I'm working on an AR site tour of a brownfield central to 
              <span className="font-semibold"> Neighborship</span>'s  
            <a 
                href="https://www.seehidden.city/"  
                className="text-blue-600 hover:underline" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                {" "}bioremediation project in Oakland.{" "}
            </a>
              The AR app will be used to grow community engagement.</li>
          </ul>
        </p>
      </div>
    </section>
  );
}
