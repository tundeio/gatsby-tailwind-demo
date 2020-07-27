import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const DemoPage = () => (
    <Layout>
        <SEO title="Tailwind Demo" />
        <h1 className="heading">What's up, my people!</h1>
        <p className="tracking-wide">Ain't this sweet?</p>
        <button className="font-bold py-2 px-4 rounded bg-green-500 text-white hover:bg-green-700 block mb-8">Yaaassssss!</button>
        <h2 className="inline-block md:hidden text-xl">Small screen size (full width paragraph)</h2>
        <h2 className="hidden lg:hidden md:inline-block text-xl">Medium screen size (3/4 width paragraph)</h2>
        <h2 className="hidden lg:inline-block text-xl">Large screen size (1/2 width paragraph)</h2>
        <p className="w-full md:w-3/4 lg:w-1/2">
            Look at me! I am a really long paragraph to demonstrate how Tailwind handles responsive layouts. Unfortunately, I have run out of things to say so will now revert to everyone's favourite: <a className="font-bold underline" href="https://baconipsum.com/">Bacon Ipsum!!!!</a> Bacon ipsum dolor amet tail beef ribs prosciutto tenderloin. Leberkas brisket sausage landjaeger shoulder filet mignon. Chislic tail andouille strip steak, short loin turducken pork leberkas prosciutto burgdoggen sausage alcatra bresaola tongue. Kielbasa turkey tongue ground round meatloaf venison.
        </p>
    </Layout>
)

export default DemoPage