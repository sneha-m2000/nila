import { useState } from 'react';
import { Menu, X,Facebook, Instagram, Linkedin, Twitter, MessageCircle, Youtube } from 'lucide-react';
import logo from '../../assets/Mental health app logo design.png'
import { useNavigate } from 'react-router-dom';




const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();


    return (
        <header className="  bg-bg border-b border-gray-200">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <div className="flex items-center">
                            <img src={logo} alt="NILA Logo" className="w-16 h-16 object-contain" />
                            <div className="ml-2">
                                <div className="text-xl font-bold text-[#2B2B2B">NILA</div>
                                <div className="text-xs text-[#8A8D8F]">School of Happiness</div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center text-sm space-x-8">
                        {/* <a href="#home" className="text-[#8A8D8F]  hover:text-[#24324A] transition-colors">
                            Home
                        </a>
                        <a href="#about" className="text-[#8A8D8F] hover:text-[#24324A] transition-colors">
                            About NILA
                        </a> */}
                        <div className="relative">
                            {' '}
                            <button
                                onClick={() => navigate('/experts')}
                                className="flex items-center text-[#8A8D8F] hover:text-[#24324A] transition-colors"
                            >
                                Experts
                                {/* <ChevronDown className="w-4 h-4 ml-1" /> */}
                            </button>{' '}
                        </div>

                        {/* <a href="#internship" className="text-[#8A8D8F] hover:text-[#24324A] transition-colors">
                            Internship
                        </a>
                        <a href="#happynings" className="text-[#8A8D8F] hover:text-[#24324A] transition-colors">
                            Happynings
                        </a>
                        <a href="#contact" className="text-[#8A8D8F] hover:text-[#24324A] transition-colors">
                            Contact us
                        </a> */}
                    </nav>

                    {/* Desktop Right Section */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {/* Social Icons */}
                        <div className="flex items-center space-x-3">
                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center rounded-full 
                            bg-[#D8CFC4] text-[#2F3E5C] 
                          hover:bg-[#24324A] hover:text-white 
                            transition-colors"
                            >
                                <Facebook className="w-4 h-4" />
                            </a>

                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center rounded-full 
               bg-[#D8CFC4] text-[#2F3E5C] 
               hover:bg-[#24324A] hover:text-white 
               transition-colors"
                            >
                                <Instagram className="w-4 h-4" />
                            </a>

                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center rounded-full 
                              bg-[#D8CFC4] text-[#2F3E5C] 
                            hover:bg-[#24324A] hover:text-white 
                                transition-colors"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>

                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center rounded-full 
                              bg-[#D8CFC4] text-[#2F3E5C] 
                              hover:bg-[#24324A] hover:text-white 
                                transition-colors"
                            >
                                <Twitter className="w-4 h-4" />
                            </a>

                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center rounded-full 
                              bg-[#D8CFC4] text-[#2F3E5C] 
                                hover:bg-[#24324A] hover:text-white 
                                transition-colors"
                            >
                                <MessageCircle className="w-4 h-4" />
                            </a>

                            <a
                                href="#"
                                className="w-9 h-9 flex items-center justify-center rounded-full 
                              bg-[#D8CFC4] text-[#2F3E5C] 
                              hover:bg-[#24324A] hover:text-white 
                                transition-colors"
                            >
                                <Youtube className="w-4 h-4" />
                            </a>
                        </div>

                        {/* Knowledge Hub Button */}
                        <a
                            href="#knowledge"
                            className="bg-[#2F3E5C] text-white px-6 py-2.5 rounded-full hover:bg-[#24324A] transition-colors font-medium"
                        >
                            Knowledge Hub
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="lg:hidden text-gray-700 hover:text-[#8BC34A]"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="lg:hidden py-4 border-t border-gray-200">
                        <nav className="flex flex-col space-y-4">
                            <a href="#home" className="text-gray-700 hover:text-[#24324A] transition-colors">
                                Home
                            </a>
                            <a href="#about" className="text-gray-700 hover:text-[#24324A] transition-colors">
                                About NILA
                            </a>
                            <a href="#services" className="text-gray-700 hover:text-[#24324A] transition-colors">
                                Services
                            </a>
                            <a href="#internship" className="text-gray-700 hover:text-[#24324A] transition-colors">
                                Internship
                            </a>
                            <a href="#happynings" className="text-gray-700 hover:text-[#24324A] transition-colors">
                                Happynings
                            </a>
                            <a href="#contact" className="text-gray-700 hover:text-[#24324A] transition-colors">
                                Contact us
                            </a>
                            <a
                                href="#knowledge"
                                className="bg-[#8BC34A] text-white px-6 py-2.5 rounded-full hover:bg-[#24324A] transition-colors font-medium text-center"
                            >
                                Knowledge Hub
                            </a>
                            {/* Mobile Social Icons */}
                            <div className="flex items-center space-x-4 pt-4">
                                <a href="#" className="text-gray-600 hover:text-[#24324A]">
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-gray-600 hover:text-[#24324A]">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-gray-600 hover:text-[#24324A]">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-gray-600 hover:text-[#24324A]">
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-gray-600 hover:text-[#24324A]">
                                    <MessageCircle className="w-5 h-5" />
                                </a>
                                <a href="#" className="text-gray-600 hover:text-[#24324A]">
                                    <Youtube className="w-5 h-5" />
                                </a>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
