import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Phone, MessageCircle, Menu, X } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663467696585/FNdz7y4A5xTfGaLkczK9qe/logo_viewton_03e48bc7.png";

interface NavLink {
  label: string;
  href: string;
  isRoute?: boolean;
}

const navLinks: NavLink[] = [
  { label: "หน้าแรก", href: "#hero" },
  { label: "บ้านขาย", href: "#listings" },
  { label: "คำนวณสินเชื่อ", href: "#calculator" },
  { label: "ทำไมต้องเรา", href: "#why-us" },
  { label: "ขั้นตอนซื้อ", href: "#how-to" },
  { label: "ติดต่อ", href: "#contact" },
  { label: "บทความ", href: "/blog", isRoute: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderNavLink = (link: NavLink, isMobile = false) => {
    const baseClass = isMobile
      ? "block py-2 text-gray-700 font-medium hover:text-[#C41E3A] transition-colors"
      : "text-sm font-medium text-gray-700 hover:text-[#C41E3A] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#C41E3A] after:transition-all hover:after:w-full";

    if (link.isRoute) {
      return (
        <Link
          key={link.href}
          href={link.href}
          className={baseClass}
          onClick={() => isMobile && setMobileOpen(false)}
        >
          {link.label}
        </Link>
      );
    }

    return (
      <a
        key={link.href}
        href={link.href}
        className={baseClass}
        onClick={() => isMobile && setMobileOpen(false)}
      >
        {link.label}
      </a>
    );
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img
            src={LOGO_URL}
            alt="วิวต้น โฮม"
            className="h-12 md:h-16 w-auto"
          />
          <div className="hidden sm:block">
            <div className="text-base font-bold text-[#C41E3A] leading-tight" style={{ fontFamily: "'Kanit', sans-serif" }}>วิวต้น โฮม</div>
            <div className="text-[10px] text-gray-400 leading-tight">ซื้อบ้านสวย มีเงินเหลือ</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => renderNavLink(link))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:0812345678"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#C41E3A] text-white text-sm font-semibold rounded-lg hover:bg-[#a01830] transition-colors shadow-md"
          >
            <Phone className="w-4 h-4" />
            โทรเลย
          </a>
          <a
            href="https://line.me/ti/p/~viewtonhome"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#06C755] text-white text-sm font-semibold rounded-lg hover:bg-[#05a847] transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            LINE
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-gray-700"
          aria-label="เมนู"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="container py-4 space-y-3">
            {navLinks.map((link) => renderNavLink(link, true))}
            <div className="flex gap-3 pt-3 border-t border-gray-100">
              <a
                href="tel:0812345678"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#C41E3A] text-white font-semibold rounded-lg"
              >
                <Phone className="w-4 h-4" />
                โทรเลย
              </a>
              <a
                href="https://line.me/ti/p/~viewtonhome"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#06C755] text-white font-semibold rounded-lg"
              >
                <MessageCircle className="w-4 h-4" />
                LINE
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
