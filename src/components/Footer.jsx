import { Github, Linkedin, Twitter, Heart } from "lucide-react";



export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Logo & Copyright */}
          <div className="text-center">
            <a href="#" className="text-xl font-bold tracking-tight">
              NC<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Made by Nivesh 😎
            </p>
          </div>


        </div>
      </div>
    </footer>
  );
};