'use client'
import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from "axios";

interface ResultContextType {
    result: Result | null
    setResult: React.Dispatch<React.SetStateAction<Result | null>>
    loading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
    handleSubmit: (prompt: string) => void
}

interface Result {
    positive: number
    negative: number
}

const ResultContext = createContext<ResultContextType | undefined>(undefined);

export const ResultProvider: React.FC<{children: React.ReactNode }> = ({children}) => {
    const [result, setResult] = useState<Result | null>(null)
    const [loading, setIsLoading] = useState<boolean>(false)

    const handleSubmit = (e,prompt) => {
        e.preventDefault()
        axios.post('/api/hugging_face', {text: prompt})
            .then((res) => setResult(res.data))
            .catch((err) => console.error(err))
    }

    const value = {
        result,
        setResult,
        loading,
        setIsLoading,
        handleSubmit
    }


    return(
        <ResultContext.Provider value={value}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResult = () => {
    const context = useContext(ResultContext);
    if (context === undefined) {
        throw new Error('useResult must be used within a ResultProvider');
    }
    return context;
};