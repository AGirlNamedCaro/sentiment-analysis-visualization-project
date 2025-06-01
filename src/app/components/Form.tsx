'use client'
import {useEffect, useState} from "react";
import axios from "axios";
import {useResult} from "@/app/contexts/ResultContext";

const Form = () => {
    const [prompt, setPrompt] = useState<string>("")
    const { handleSubmit, result, isLoading } = useResult();

    return (
        <form className='w-full' onSubmit={(e) => handleSubmit(e,prompt)}>
            <h1 className='text-6xl md:text-8xl font-semibold text-primary'>Welcome.</h1>
            <h2 className='py-4 text-4xl md:text-6xl font-semibold text-secondary'>Type your query below</h2>
            <input
                id="inputBox"
                required
                onChange={(e) => setPrompt(e.target.value)}
                className="block w-full rounded-md bg-white px-3 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6"
            />
        </form>
    )
}

export default Form