export default function Unreal() {
  return (
      <section>
       <h2 className="mt-8 text-2xl font-semibold opacity-90">3D Render of Oakland</h2>  
        <p className="mt-2 lg:text-xl text-gray-800">
        I used Cesium Ion's UE5 Plugin with its PhotoRealistic 3D Tileset to render a realistic, immersive 3D model of Oakland. 
        By leveraging Cesium's coordinate system and UE5's blueprints, I mapped the user to a census tract aligned with their selected race and income and spawned them in the neighborhood they would likely be living in.
        This lead to a stark contrast between a lush, green neighborhood with the sounds of birds chirping or houses next to noisy bart tracks and highways without a park in site.
        </p>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 md:h-96"
              src="https://www.youtube.com/embed/LEaYI-MB3Sc"
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="mb-2 text-center text-md lg:text-lg text-gray-600">Demo of a predominantly black, income below average neighborhood</p>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-64 md:h-96"
              src="https://www.youtube.com/embed/2mXmvn01z9s"
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="mb-2 text-center text-md lg:text-lg text-gray-600">Demo of a predominantly white, income above average neighborhood</p>
          </div>
        </div>
        <h2 className="mt-8 text-2xl font-semibold opacity-90">User Interactions with Information Tokens</h2>  
        <p className="mt-2 lg:text-xl text-gray-800">
        Interactive icons present facts about the neighborhood as well as highlighting the community efforts being made on the ground that's not always visible from top-down maps.
        Users learn about how neighborhoods were physically redlined by highways and bart tracks and the disruptive consequences they had on the community it torn through.
        </p>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-80 md:h-96"
              src="https://www.youtube.com/embed/BZJUgE7ovKc"
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="mb-2 text-center text-md lg:text-lg text-gray-600">Demo of information tokens in a predominantly black, income below average neighborhood</p>
          </div>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-80 md:h-96"
              src="https://www.youtube.com/embed/pehOI5GI2mw"
              title="YouTube video player"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <p className="mb-2 text-center text-md lg:text-lg text-gray-600">Demo of information tokens in a predominantly white, income above average neighborhood</p>
          </div>
        </div>
    </section>
  );
}
