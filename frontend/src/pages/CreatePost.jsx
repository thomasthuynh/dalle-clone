import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { preview } from "../assets";
import { FormField, Loader } from "../components";
import { getRandomPrompt } from "../utils";

const CreatePost = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = () => {
    const randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  const generateImg = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);

        const response = await fetch("http://localhost:8080/api/v1/dalle", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: form.prompt }),
        });

        const data = await response.json();
        console.log(data);

        setForm({...form, photo: data.photo})
      } catch (error) {
        alert(error);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert("Please enter a prompt")
    }
  };

  return (
    <section>
      <div>
        <h1 className="text-3xl font-bold">Create</h1>
        <p className="mt-2 max-w-[500px] text-neutral-600">
          Create imaginative and visually stunning images through DALL-E AI and
          share them with the community
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Name"
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            handleChange={handleChange}
          />

          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="A comic book cover of a superhero wearing headphones"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
        </div>

        <div className="relative my-5 flex h-64 w-64 items-center justify-center rounded-lg border border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500">
          {form.photo ? (
            <img
              src={form.photo}
              alt={form.prompt}
              className="h-full w-full object-contain"
            />
          ) : (
            <img
              src={preview}
              alt="Preview"
              className="h-3/4 w-3/4 object-contain opacity-40"
            ></img>
          )}

          {generatingImg && (
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black opacity-50">
              <Loader />
            </div>
          )}
        </div>

        <div className="flex gap-5">
          <button
            type="button"
            onClick={generateImg}
            className="w-full rounded-md bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white sm:w-auto"
          >
            {generatingImg ? "Generating..." : "Generate"}
          </button>
        </div>

        <div className="mt-10">
          <p className="mt-2 text-sm text-neutral-600">
            Once you have created the image you want, you can share it with
            others in the community
          </p>
          <button
            type="submit"
            className="mt-3 w-full rounded-md bg-indigo-500 px-5 py-2.5 text-center text-sm text-white sm:w-auto"
          >
            {loading ? "Sharing..." : "Share with the community"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
