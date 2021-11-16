import Image from "next/image"
const Hello = ()=> {
    return (
        <section className="black" id="Welcome">
            <header>
                <h1 id="Hello">
                <span  className="red">&#60;</span>Hello
                </h1>
                </header>
                <main>
                    <div className="flex-div">
                    <h2 className="red">
                
                &#60;Full-Stack Developer
                <br />
                
            </h2>
            <p><span className="red">
            location= </span>"Miami, Florida"</p>
            
            <p><span className="red">description=</span> "I am a self-taught full-stack web developer who works as a freelancer, mainly with Django in the back-end and Nextjs in the front-end. I love  building everything custom: having fun implementing every feature and creating the most reliable, scalable, and personalized solutions out of my customers’ needs." <span className="red">/&#62;</span></p>
       <Image src="/ShortArrow.svg" height="54" width="54"/>
                    </div>
                
           </main>

        </section>
    )
}

export default Hello