'use client'
import Image from "next/image"
import Form from "@/app/components/Form"
import Footer from "@/app/components/Footer";

export default function Home() {
    return (
        <div
            className="grid md:grid-rows-[20px_1fr_20px] md:items-center md:justify-items-center min-h-screen px-4 md:p-8 md:pb-20 md:gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 sm:items-start w-full">
                <Form/>
            </main>
            <Footer/>
        </div>
    );
}
