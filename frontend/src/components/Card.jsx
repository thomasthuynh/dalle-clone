import { download } from "../assets";
import { downloadImage } from "../utils";

const Card = ({ _id, name, prompt, photo }) => {
  return (
    <div className="group relative rounded-xl">
      <img src={photo} alt={prompt} />
      <div className="absolute bottom-0 left-0 right-0 m-2 hidden max-h-[94.5%] flex-col rounded-md bg-black p-4 opacity-80 group-hover:flex">
        <p className="text-sm text-white">{prompt}</p>

        <div className="mt-5 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-green-700 object-cover text-xs font-bold text-white">
              {name[0]}
            </div>
            <p className="text-sm text-white">{name}</p>
          </div>
          <button
            type="button"
            onClick={() => downloadImage(_id, photo)}
            className="border-none bg-transparent outline-none"
          ><img src={download} alt="Download" className="w-6 h-6 object-contain invert"/></button>
        </div>
      </div>
    </div>
  );
};

export default Card;
