import { Instagram, Facebook, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-sage text-cream py-20 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h3 className="text-3xl font-serif">The Big Tree Cafe</h3>
          <p className="text-cream/70 max-w-xs">
            Experience the harmony of nature and fine dining. 
            Gurugram's favorite escape.
          </p>
          <div className="flex gap-4">
            <Instagram className="w-6 h-6 cursor-pointer hover:text-accent transition-colors" />
            <Facebook className="w-6 h-6 cursor-pointer hover:text-accent transition-colors" />
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-xl font-serif">Location</h4>
          <div className="flex items-start gap-4 text-cream/70">
            <MapPin className="w-5 h-5 shrink-0" />
            <p>Golf Course Road, DLF Phase 5, <br />Sector 53, Gurugram, Haryana 122002</p>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-xl font-serif">Contact</h4>
          <div className="flex items-center gap-4 text-cream/70">
            <Phone className="w-5 h-5 shrink-0" />
            <p>+91 12345 67890</p>
          </div>
          <div className="flex items-start gap-4 text-cream/70">
            <Clock className="w-5 h-5 shrink-0" />
            <p>12:00 PM - 01:00 AM <br />Daily</p>
          </div>
        </div>

        <div className="space-y-6">
          <h4 className="text-xl font-serif">Newsletter</h4>
          <p className="text-cream/70">Join our community for events and updates.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-cream/10 border border-cream/20 px-4 py-2 rounded-l-md outline-none focus:border-accent w-full"
            />
            <button className="bg-accent text-charcoal px-4 py-2 rounded-r-md font-medium hover:bg-white transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-20 pt-8 border-t border-cream/10 text-center text-cream/40 text-sm">
        © {new Date().getFullYear()} The Big Tree Cafe. All rights reserved.
      </div>
    </footer>
  );
}
