import { Download, Github, Linkedin, Mail, SmileIcon } from "lucide-react"
import Button from "../components/Button"
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Background*/}
        <div className="absolute inset-0">
            <img src="/bg.png" alt="" 
            className="w-full h-full object-cover opacity-45"/>

            <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/60 to-background"></div>
        </div>

        {/*Red dots */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {[...Array(30)].map((_,i)=>(
                <div className="absolute h-1.5 w-1.5 rounded-full opacity-60" style={{backgroundColor:"red" ,
                    left:`${Math.random()*100}%`,
                    top:`${Math.random()*100}%`,
                    animation:`slow-drift ${15 + Math.random()*20}s ease-in-out infinite`,
                    animationDelay:`${Math.random()*3}s`
                }}>
                </div>
            ))}
        </div>

        {/* Main content */}
        <div className="container mx-auto px-6 pt-28 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center p-5"> 

                {/* LEft  */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                       <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary"> <span className="w-2 h-2 bg-primary/90 rounded-full animate-pulse"/>Full stack developer</span>
                    </div>

                    {/* Headline  */}
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-100">
                            Engineering Thoughtful <br /> <span className="text-primary/90 glow-text">Digital Products </span> That <br /> Grow with 
                            <span className="font-serif italic font-normal text-white"> you</span>
                        </h1>

                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-300">
                            Hi I’m Nivesh, a Full-Stack JavaScript Developer passionate about crafting clean, scalable systems. I turn complex ideas into intuitive digital experiences — designed with intention and built for growth.
                        </p>
                    </div>

                    {/* Buttons for contact and resume */}
                    <div className="flex flex-wrap gap-3 animate-fade-in animation-delay-500">
                        <Button size='lg'>Get in Touch <SmileIcon className="w-5 h-5"/></Button>
                        <button className="p-5 flex items-center bg-primary-foreground/70 text-primary font-semibold rounded-full text-sm hover:bg-primary-foreground/90">Download Resume  <Download size={20}/></button>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-500 px-2">
                        <span className="text-sm text-muted-foreground">Follow me</span>
                        {[
                            {icon:Github,href:"#"},
                            {icon:Linkedin,href:"#"},
                            {icon:Mail,href:"#"}
                        ].map((social,idx)=>(
                            <a href={social.href} key={idx} className="rounded-full p-2 glass hover:bg-primary/10 hover:text-primary/70 transition-all duration-300">{<social.icon className="w-5 h-5"/>}</a>
                        ))}
                    </div>

                </div>

                {/* Right image area  */}
                <div className="relative animate-fade-in animation-delay-100">
                    {/* Profile image */}
                    <div className="relative max-w-md mx-auto">
                        <div className="relative glass rounded-3xl p-2 glow-border">
                            <img src="/selfie.png" className="w-full aspect-4/5 object-cover rounded-2xl" alt="Nivesh Chaudhary" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Hero