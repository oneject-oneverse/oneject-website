"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronRight, Package, Building2, Users, Phone, Mail, Info, Factory, Award, Shield, Settings, Newspaper, Leaf, Globe, Scale, Briefcase, ShieldAlert, Droplets, Heart, Microscope, Stethoscope, ScanLine, History, Target, Warehouse, CheckCircle, Zap, FileText, Search, UserPlus, GraduationCap, Syringe, BadgeCheck, Radiation, MessageCircleWarning, TestTube } from 'lucide-react'
import Image from "next/image";

import { cn } from "@/lib/utils"
import { navigationItems } from "@/lib/navigation-data"
import type { NavigationItems } from "@/lib/navigation-data"

const Icons = {
  chevronDown: ChevronDown,
  chevronRight: ChevronRight,
  package: Package,
  building2: Building2,
  users: Users,
  phone: Phone,
  mail: Mail,
  info: Info,
  factory: Factory,
  award: Award,
  shield: Shield,
  settings: Settings,
  newspaper: Newspaper,
  leaf: Leaf,
  globe: Globe,
  scale: Scale,
  briefcase: Briefcase,
  shieldAlert: ShieldAlert,
  droplets: Droplets,
  heart: Heart,
  microscope: Microscope,
  stethoscope: Stethoscope,
  scanLine: ScanLine,
  history: History,
  target: Target,
  warehouse: Warehouse,
  checkCircle: CheckCircle,
  zap: Zap,
  fileText: FileText,
  search: Search,
  userPlus: UserPlus,
  graduationCap: GraduationCap,
  syringe: Syringe,
  badgeCheck: BadgeCheck,
  radiation: Radiation,
  messageCircleWarning: MessageCircleWarning,
  testTube: TestTube
} as const

type IconName = keyof typeof Icons

export function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null)
  const [activeProduct, setActiveProduct] = useState<{
    title: string;
    href: string;
    icon: string;
  } | null>(null)
  const megaMenuRef = useRef<HTMLDivElement>(null)

  const renderIcon = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons];
    return IconComponent ? <IconComponent className="h-4 w-4 mr-0.5" /> : null;
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
        setActiveSubMenu(null);
        setActiveProduct(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLearnMoreClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    e.stopPropagation();
    setActiveMenu(null);
    setActiveSubMenu(null);
    setActiveProduct(null);
    window.location.href = href;
  };

  return (
    <nav className="hidden lg:block" ref={megaMenuRef}>
      <ul className="flex items-center space-x-8">
        {Object.entries(navigationItems).map(([key, value]) => (
          <li
            key={key}
            className="relative"
            onMouseEnter={() => setActiveMenu(key)}
            onMouseLeave={() => {
              setActiveMenu(null)
              setActiveSubMenu(null)
              setActiveProduct(null)
            }}
          >
            {value.href ? (
              <Link
                href={value.href}
                className="flex items-center space-x-0.5 text-sm font-medium text-[#6DC5EE] hover:text-[#3F8F81]"
              >
                {renderIcon(value.icon as string)}
                <span>{key}</span>
              </Link>
            ) : (
              <button className="flex items-center space-x-1 text-sm font-medium text-[#6DC5EE] hover:text-[#3F8F81]">
                {renderIcon(value.icon as string)}
                <span>{key}</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
            )}

            <AnimatePresence>
              {activeMenu === key && value.items && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "fixed left-0 right-0 top-16 z-50 bg-white shadow-lg",
                    key === "Product" ? "h-[calc(100vh-4rem)] overflow-y-auto" : "max-w-screen-xl rounded-lg border p-6 mx-auto"
                  )}
                >
                  {key === "Product" ? (
                    <div className="relative">
                      {/* Circular Design Element */}
                      <div className="absolute right-0 top-0 pointer-events-none">
                        <Image
                          src="https://beehive.web.id/oji/website-asset/Logogram-Oneject-New.png"
                          alt="Oneject Logogram"
                          width={450}
                          height={450}
                          className="opacity-50"
                        />
                      </div>                      
                      <div className="container mx-auto max-w-screen-xl px-8 py-8">
                        <h2 className="mb-8 text-4xl font-bold text-[#3F8F81]">
                          The Smart Choice for Safety
                          <br />
                          Products that Protect
                        </h2>
                        
                        <div className="flex flex-col lg:flex-row gap-8">
                          {/* Categories List */}
                          <div className="w-full lg:w-1/5 space-y-2 overflow-y-auto pr-2">
                            {value.items?.map((category, index) => (
                              <div
                                key={index}
                                className={cn(
                                  "cursor-pointer rounded-lg p-3 transition-colors",
                                  activeSubMenu === category.title
                                    ? "bg-[#6DC5EE]/10"
                                    : "hover:bg-gray-50"
                                )}
                                onMouseEnter={() => {
                                  setActiveSubMenu(category.title)
                                  setActiveProduct(null)
                                }}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center space-x-3">
                                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6DC5EE] text-white">
                                      {renderIcon(category.icon as string)}
                                    </div>
                                    <div>
                                      <h3 className="font-semibold text-[#3F8F81]">
                                        {category.title}
                                      </h3>
                                      {category.items && (
                                        <p className="text-xs text-gray-600">
                                          {category.items.length} products
                                        </p>
                                      )}
                                    </div>
                                  </div>
                                  <ChevronRight className="h-4 w-4 text-gray-400" />
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Products List */}
                          <div className="w-full lg:w-1/3 overflow-y-auto border-x px-6">
                            {value.items?.map((category) => {
                              if (category.title === activeSubMenu && category.items) {
                                return (
                                  <div key={category.title} className="space-y-6">
                                    <div className="flex items-center space-x-3">
                                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6DC5EE] text-white">
                                        {renderIcon(category.icon as string)}
                                      </div>
                                      <h3 className="text-xl font-semibold text-[#3F8F81]">
                                        {category.title}
                                      </h3>
                                    </div>
                                    <div className="grid gap-2">
                                      {category.items.map((item, itemIndex) => (
                                        <div
                                          key={itemIndex}
                                          className={cn(
                                            "cursor-pointer rounded-lg border p-3 transition-all hover:border-[#6DC5EE] hover:bg-[#6DC5EE]/5",
                                            activeProduct?.title === item.title ? "border-[#6DC5EE] bg-[#6DC5EE]/5" : ""
                                          )}
                                          onMouseEnter={() => setActiveProduct(item)}
                                        >
                                          <div className="flex items-center space-x-0.5">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-600">
                                              {renderIcon(item.icon as string)}
                                            </div>
                                            <span className="font-medium text-gray-700">
                                              {item.title}
                                            </span>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )
                              }
                              return null
                            })}
                          </div>

                          {/* Product Preview */}
                          <div className="w-full lg:w-[45%] overflow-y-auto rounded-lg bg-gray-50 p-6">
                            {activeProduct ? (
                              <div className="space-y-6">
                                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-white">
                                  <img
                                    src={activeProduct.title === "Smart Syringe" ? "https://beehive.web.id/oji/website-asset/Product/Syringe/Smart-Syringe-1.png" : 
                                      activeProduct.title === "Auto Disable Syringe" ? "https://beehive.web.id/oji/website-asset/Product/Syringe/ADS-1.png" :
                                      activeProduct.title === "Safety Syringe" ? "https://beehive.web.id/oji/website-asset/Product/Syringe/Safeject-Safety-Syringe-2.png" :
                                      activeProduct.title === "Disposable Syringe" ? "https://beehive.web.id/oji/website-asset/Product/Syringe/Safeject-Disposable-Syringe-1.png" :
                                      activeProduct.title === "Safeject Hypodermic Needle" ? "https://beehive.web.id/oji/website-asset/Product/Syringe/safeject-needle.png" :
                                      activeProduct.title === "Safety Needle" ? "https://beehive.web.id/oji/website-asset/Product/Syringe/safety-needle.png" :
                                      activeProduct.title === "Safety Box" ? "https://beehive.web.id/oji/website-asset/Product/Safety%20Box/Safety-Box.png" :
                                      
                                      activeProduct.title === "Blood Collection Tube" ? "https://beehive.web.id/oji/website-asset/Product/Blood%20Collection%20System/BCT.png" :
                                      activeProduct.title === "Blood Bag" ? "https://beehive.web.id/oji/website-asset/Product/Blood%20Collection%20System/Blood-Bag.png" :
                                      
                                      activeProduct.title === "HD Machine" ? "https://beehive.web.id/oji/website-asset/Product/Blood%20Purification/Hemodialysis.png" :
                                      activeProduct.title === "Acid Concentrate" ? "https://beehive.web.id/oji/website-asset/Product/Blood%20Purification/Acid-Concentrate.png" :
                                      activeProduct.title === "Sodium Bicarbonate Cartridge" ? "https://beehive.web.id/oji/website-asset/Product/Blood%20Purification/Sodium-Bicarbonate.png":
                                      activeProduct.title === "Dialyzer" ? "https://beehive.web.id/oji/website-asset/Product/Blood%20Purification/Dialyzer.png" :
                                      activeProduct.title === "Bloodline" ? "https://beehive.web.id/oji/website-asset/Product/Blood%20Purification/Bloodline.png" :
                                      activeProduct.title === "AV Fistula Needle" ? "https://beehive.web.id/oji/website-asset/Product/Blood%20Purification/AV-Fistula-Needle.png" :
                                      
                                      activeProduct.title === "Urine Analyzer" ? "https://beehive.web.id/oji/website-asset/Product/In%20Vitro%20Diagnostic%20Instrument/Urine-Analyzer.png" :
                                      activeProduct.title === "Blood Analyzer" ? "https://beehive.web.id/oji/website-asset/Product/In%20Vitro%20Diagnostic%20Instrument/Blood-Analyzer.png" :
                                      activeProduct.title === "Chemistry Analyzer" ? "https://beehive.web.id/oji/website-asset/Product/In%20Vitro%20Diagnostic%20Instrument/Urine-Analyzer.png" :
                                      
                                      activeProduct.title === "Urine Bag" ? "" :
                                      
                                      activeProduct.title === "X-ray" ? "https://beehive.web.id/oji/website-asset/Product/Radiology/X-Ray-1.png" :
                                       
                                      "/placeholder.svg"}
                                    alt={activeProduct.title}
                                    className="h-full w-full object-contain mx-auto"
                                  />
                                </div>
                                <div className="space-y-4">
                                  <h3 className="text-2xl font-bold text-[#3F8F81] bg-gray-100 p-2 rounded-md">
                                    {activeProduct.title}
                                  </h3>
                                  <p className="text-gray-600 bg-gray-50 p-2 rounded-md font-sans">
                                    Experience superior quality and safety with our {activeProduct.title.toLowerCase()}. 
                                    Designed with precision and care, this product meets the highest standards in medical equipment.
                                  </p>
                                  <button
                                    className="inline-flex items-center space-x-2 text-[#6DC5EE] hover:text-[#3F8F81]"
                                    onClick={(e) => handleLearnMoreClick(e, activeProduct.href)}
                                  >
                                    <span>Learn more</span>
                                    <ChevronRight className="h-4 w-4" />
                                  </button>
                                </div>
                              </div>
                            ) : (
                              <div className="flex h-full items-center justify-center text-gray-400">
                                <p>Select a product to view details</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex w-full justify-between">
                      {value.items?.map((item, index) => (
                        <div key={index} className="space-y-4 flex-1">
                          {item.href ? (
                            <Link
                              href={item.href}
                              className="text-sm font-semibold text-[#6DC5EE] flex items-center hover:text-[#3F8F81]"
                            >
                              {renderIcon(item.icon as string)}
                              <span>{item.title}</span>
                            </Link>
                          ) : (
                            <>
                              <h3 className="text-sm font-semibold text-[#6DC5EE] flex items-center">
                                {renderIcon(item.icon as string)}
                                {item.title}
                              </h3>
                              <ul className="space-y-2">
                                {item.items?.map((subItem, subIndex) => (
                                  <li key={subIndex}>
                                    <Link
                                      href={subItem.href ?? '#'}
                                      className="flex items-center space-x-0.5 text-sm font-medium text-[#3F8F81] hover:text-[#6DC5EE]"
                                    >
                                      {renderIcon(subItem.icon as string)}
                                      <span>{subItem.title}</span>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </nav>
  )
}

