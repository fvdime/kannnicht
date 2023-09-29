"use client"

import axios from "axios";
import dynamic from "next/dynamic";
import { useCallback, useMemo, useState } from "react";
import toast from "react-hot-toast";
import "react-quill/dist/quill.bubble.css";


const Write = () => {

  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const handleSubmit = useCallback(async () => {
    try {
      setIsLoading(true);
      
      await axios.post('/api/post', {
        title, body
      });

      setIsLoading(false)

      toast.success('Post created!');
    } catch (error) {

      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  }, [title, body])

  
  return (
    <div>
       <div className="p-8 flex flex-row justify-between items-center">
        <h1 className="font-semibold text-3xl text-gray-800">Create New One</h1>
        <button 
        onClick={handleSubmit}
        className="border border-slate-500 py-1 px-8 rounded-lg text-slate-500 text-semibold hover:text-white hover:bg-slate-500 transition-all ease-in duration-300">
          Publish
        </button>
      </div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full p-8 border-none outline-none text-4xl bg-transparent text-white"
      />
      <ReactQuill
        theme="bubble"
        value={body}
        onChange={setBody}
        placeholder="Tell us about your work!"
        className="placeholder:text-4xl placeholder:text-white text-white text-2xl"
      />
    </div>
  )
}

export default Write