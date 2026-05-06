function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto py-10 px-6 grid grid-cols-3 gap-8">
        
        <div>
          <h3 className="font-bold text-lg mb-2">StyleHub</h3>
          <p className="text-gray-600">Your style, your identity.</p>
        </div>

        <div className="border-l pl-6">
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-gray-600">
            <li>Home</li>
            <li>Salons</li>
            <li>Styles</li>
          </ul>
        </div>

        <div className="border-l pl-6">
          <h4 className="font-semibold mb-2">Contact</h4>
          <p className="text-gray-600">support@stylehub.com</p>
        </div>

      </div>

      <div className="border-t text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} StyleHub
      </div>
    </footer>
  );
}

export default Footer;