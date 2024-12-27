"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronRight, Package, Building, Users, Phone, Mail } from 'lucide-react'

import { cn } from "@/lib/utils"
import { navigationItems } from "@/lib/navigation-data"
import type { NavigationItems } from "@/lib/navigation-data"

// Define the Icons object with proper typing
const Icons = {
  chevronDown: ChevronDown,
  chevronRight: ChevronRight,
  package: Package,
  building: Building,
  users: Users,
  phone: Phone,
  mail: Mail
} as const

// Create a type for the icon names
type IconName = keyof typeof Icons

export function MegaMenu() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null)
  const [activeProduct, setActiveProduct] = useState<{
    title: string;
    href: string;
    icon: string;
  } | null>(null)

  const renderIcon = (iconName: IconName) => {
    const IconComponent = Icons[iconName]
    return IconComponent ? <IconComponent className="h-4 w-4 mr-0.5" /> : null
  }

  return (
    <nav className="hidden lg:block">
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
                {renderIcon(value.icon as IconName)}
                <span>{key}</span>
              </Link>
            ) : (
              <button className="flex items-center space-x-1 text-sm font-medium text-[#6DC5EE] hover:text-[#3F8F81]">
                {renderIcon(value.icon as IconName)}
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
                    key === "Product" ? "h-[calc(100vh-4rem)]" : "max-w-screen-xl rounded-lg border p-6 mx-auto"
                  )}
                >
                  {key === "Product" ? (
                    <div className="relative h-full">
                      {/* Circular Design Element */}
                      <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full border-2 border-[#6DC5EE]/20" />
                      <div className="absolute right-[150px] top-[150px] h-[400px] w-[400px] rounded-full border-2 border-[#6DC5EE]/20" />
                      
                      <div className="container mx-auto h-full max-w-screen-xl px-8 py-8">
                        <h2 className="mb-8 text-4xl font-bold text-[#3F8F81]">
                          The Smart Choice for Safety
                          <br />
                          Products that Protect
                        </h2>
                        
                        <div className="flex h-[calc(100vh-16rem)] gap-8">
                          {/* Categories List */}
                          <div className="w-1/5 space-y-2 overflow-y-auto pr-2">
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
                                      {renderIcon(category.icon as IconName)}
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
                          <div className="w-1/3 overflow-y-auto border-x px-6">
                            {value.items?.map((category) => {
                              if (category.title === activeSubMenu && category.items) {
                                return (
                                  <div key={category.title} className="space-y-6">
                                    <div className="flex items-center space-x-3">
                                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6DC5EE] text-white">
                                        {renderIcon(category.icon as IconName)}
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
                                              {renderIcon(item.icon as IconName)}
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
                          <div className="w-[45%] overflow-y-auto rounded-lg bg-gray-50 p-6">
                            {activeProduct ? (
                              <div className="space-y-6">
                                <div className="aspect-video w-full overflow-hidden rounded-lg bg-white">
                                  <img
                                    src="/placeholder.svg"
                                    alt={activeProduct.title}
                                    className="h-full w-full object-cover"
                                  />
                                </div>
                                <div className="space-y-4">
                                  <h3 className="text-2xl font-bold text-[#3F8F81]">
                                    {activeProduct.title}
                                  </h3>
                                  <p className="text-gray-600">
                                    Experience superior quality and safety with our {activeProduct.title.toLowerCase()}. 
                                    Designed with precision and care, this product meets the highest standards in medical equipment.
                                  </p>
                                  <Link
                                    href={activeProduct.href}
                                    className="inline-flex items-center space-x-2 text-[#6DC5EE] hover:text-[#3F8F81]"
                                  >
                                    <span>Learn more</span>
                                    <ChevronRight className="h-4 w-4" />
                                  </Link>
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
                      {value.items?.map((column, index) => (
                        <div key={index} className="space-y-4 flex-1">
                          <h3 className="text-sm font-semibold text-[#6DC5EE] flex items-center">
                            {renderIcon(column.icon as IconName)}
                            {column.title}
                          </h3>
                          <ul className="space-y-2">
                            {column.items?.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <Link
                                  href={item.href ?? '#'}
                                  className="flex items-center space-x-0.5 text-sm font-medium text-[#3F8F81] hover:text-[#6DC5EE]"
                                >
                                  {renderIcon(item.icon as IconName)}
                                  <span>{item.title}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
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

