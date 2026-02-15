import { Target, Rocket, Code2, Clock } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Career Vision",
    desc: "Focused on becoming a full-stack developer / software engineer who builds scalable and impactful digital solutions."
  },
  {
    icon: Rocket,
    title: "Current Status",
    desc: "Actively upskilling myself and seeking a full-time developer role."
  },
  {
    icon: Code2,
    title: "Technical Foundation",
    desc: "Comfortable working across frontend and backend with strong fundamentals and practical project experience."
  },
  {
    icon: Clock,
    title: "Professional Values",
    desc: "I value honesty, punctuality, and consistency, believing that reliability is as important as technical skill."
  }
];


const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto relative px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left col */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-primary/70 text-sm font-bold tracking-wider uppercase">About Me</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-primary/90 glow-text">
              Nivesh Chaudhary, {" "}
              <span className="font-serif italic font-normal text-white">turning ideas into working products</span>
            </h2>

            <div className="space-y-8 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m a Computer Science graduate who genuinely enjoys building things on the web.
                What started as curiosity about how websites work slowly turned into a strong
                interest in full-stack development — understanding both how things look and how
                they function behind the scenes.
              </p>

              <p>
                I’ve spent my days learning technologies, building projects
                that focus on clean structure, and smooth user experience.
                I like debugging. I like improving small details. And I like the feeling of
                taking something from “just an idea” to something people can actually use.
              </p>

              <p>
                Originally from Haridwar, Uttarakhand, I’m currently focused on sharpening my
                fundamentals, while actively
                looking for a full-time developer role where I can contribute, learn from
                experienced teams, and grow through real-world challenges.
              </p>

            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-400">
              <p className="text-lg font-medium italic text-foreground">“Elevate yourself through your own efforts. The mind can be your greatest friend — or your greatest enemy.”</p>
            </div>


          </div>

          {/* Right col - highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item,idx)=>(
              <div key={idx} className="glass p-6 rounded-2xl animate-fade-in" style={{animationDelay:`${(idx+1)*100}ms`}}>
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 hover:bg-primary/35">{<item.icon className="w-6 h-6 text-primary"/>}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  )
}

export default About