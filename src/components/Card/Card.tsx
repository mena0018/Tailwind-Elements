import PaperPlane from "../../assets/svg/paper-plane.svg";
import Venise from "../../assets/images/venise.jpg";

function Card() {
  return (
    <div className="h-screen bg-slate-800 flex items-center justify-center">
      <section className="bg-gray-100 relative container mx-auto rounded">
        <img
          src={Venise}
          alt="venise"
          className="w-full h-72 object-cover rounded sm:w-1/2 sm:absolute sm:h-full"
        />
        <div className="p-10 sm:w-1/2 sm:ml-auto">
          <h2 className="text-4xl mb-5">Your next trip to Italy 🍝</h2>
          <p className="font-thin text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur deserunt officia nam magni nesciunt ad quam quis
            repellat recusandae voluptate!
          </p>
          <a
            href="#"
            className="ring-1 ring-slate-300 bg-gradient-to-r from-red-300 to-orange-300 rounded-md
                       shadow-md inline-flex items-center gap-3 mt-10 mb:mt-20 p-3"
          >
            <span>Take a ticket</span>
            <img src={PaperPlane} alt="paper plane svg" className="w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}

export default Card;
