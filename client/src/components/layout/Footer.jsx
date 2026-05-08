export default function Footer() {
  return (
    <footer className="border-t border-border mt-16 bg-background">
      
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand */}
        <div>
          <h3 className="font-bold text-lg text-foreground mb-2">
            StyleHub
          </h3>
          <p className="text-muted-foreground">
            Your style, your identity.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:border-l md:pl-8">
          <h4 className="font-semibold text-foreground mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-muted-foreground">
            <li className="hover:text-foreground cursor-pointer">Home</li>
            <li className="hover:text-foreground cursor-pointer">Salons</li>
            <li className="hover:text-foreground cursor-pointer">Styles</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:border-l md:pl-8">
          <h4 className="font-semibold text-foreground mb-3">
            Contact
          </h4>
          <p className="text-muted-foreground">
            support@stylehub.com
          </p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-border text-center py-4 text-sm text-muted-foreground">
        © {new Date().getFullYear()} StyleHub
      </div>
    </footer>
  );
}