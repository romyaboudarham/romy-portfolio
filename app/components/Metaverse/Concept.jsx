export default function Concept() {
    return (
        <section>
          {/* Text Content*/}
          <div>
          <div className="text-2xl font-semibold opacity-90">
            Inspiration
            </div>
            <p className="mt-2 lg:text-xl text-gray-800">
            I wanted to challenge what we typically think of when we hear the word metaverse: an alternate reality that's disconnects us from our real, physical world.
            I used the metaverse as an immersive educational tool o help users understand the modern day realities of historically redlined neighborhoods in Alameda County.
            </p>
            <div className="mt-8 text-2xl font-semibold opacity-90">
            Objective
            </div>
            <p className="mt-2 lg:text-xl text-gray-800">
              To foster empathy and action towards uplifting communities by using an immersive, first person perspective to humanize the experience of living with varying access to resources.
            </p>
            <div className="mt-8 text-2xl font-semibold opacity-90">
              Research
            </div>
            <p className="mt-2 lg:text-xl text-gray-800">
                During the New Deal (1933 - 1938), Home Owners Loan Corporation created maps of “residential security”, determined by rates of “racial infiltration”.
                Maps determined who was eligible for New Deal's generously-subsidized, government-backed mortgages.
                “Desirable” and “Best” areas were outside of Oakland's city center, so the loss of urban population meant the loss of tax-base in cities, leading to fewer services and urban decay.
            </p>
            <img
                src="/media/projects/Metaverse-Redlining/segregation-by-design.png"
                alt="Segregation by design"
                className="mt-5 mx-auto w-full"
            />
            <p className="mt-5 lg:text-xl text-gray-800">
                I researched how people have
                <a 
                    href="https://ncrc.org/redlining-score/"  
                    className="text-blue-600 hover:underline" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    {" "}used census data to examine the current demography of neighborhoods,{" "}
                </a>
                highlighting how racial segregation shaped modern day residential patterns. 
            </p>
          </div>
      </section>
    );
  }
  
/*
  EDIT:
  what if someone from another city could explore the neighborhoods that aren't accessible to them. Learn why some neighborhoods have such few tress, are near highways, and fewer resources. 
  People study neighborhood health and that information isn't always readily accesible.
  Bring those findings to the user to mobilize, quesiton, get involved.
  */