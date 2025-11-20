import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-black font-bold">
                                DM
                            </div>
                            <span className="text-xl font-semibold text-white">Dent Monkey</span>
                        </div>
                        <p className="text-[#6F6F6F] text-[16px]">
                            Professional paintless dent removal services for all vehicle types.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[24px] font-medium text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2 text-[#6F6F6F] text-[16px]">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="hover:text-white transition-colors">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-white transition-colors">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#gallery" className="hover:text-white transition-colors">
                                    Gallery
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-[24px] font-medium text-white mb-4">Services</h4>
                        <ul className="space-y-2 text-[#6F6F6F] text-[16px]">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Hail Damage
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Door Dings
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Crease Removal
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Panel Damage
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-[24px] font-medium text-white mb-4">Contact</h4>
                        <ul className="space-y-2 text-[#6F6F6F] text-[16px]">
                            <li>
                                <a href="tel:5551234567" className="hover:text-white transition-colors">
                                    (555) 123-4567
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@dentmonkey.com" className="hover:text-white transition-colors">
                                    info@dentmonkey.com
                                </a>
                            </li>
                            <li>
                                123 Main Street
                                <br />
                                Anytown, ST 12345
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-200">
                    <p>&copy; 2025 Dent Monkey. All rights reserved.</p>
                </div>

                {/* Bottom Bar */}
                <div className="mt-2 flex flex-col sm:flex-row justify-center items-center gap-3 text-center font-semibold text-gray-400">
                    {/* Left: Terms & Privacy */}
                    <div className="flex gap-4 text-sm">
                        <Link
                            to="/terms"
                            className="text-gray-200 hover:text-[#6F6F6F] transition duration-300"
                        >
                            Terms & Conditions
                        </Link>
                        <span className="text-gray-200">|</span>
                        <Link
                            to="/privacy"
                            className="text-gray-200 hover:text-[#6F6F6F] transition duration-300"
                        >
                            Privacy Policy
                        </Link>
                    </div>

                    {/* Center: Powered by Ansely (unchanged) */}
                    <p className="text-center font-semibold text-gray-400">
                        Powered by{" "}
                        <a
                            href="https://www.ansely.co.uk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#6F6F6F] hover:underline"
                        >
                            Ansely
                        </a>
                    </p>
                </div>
            </div>
    </footer >
  );
}
