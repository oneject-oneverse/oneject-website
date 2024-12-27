"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, Building2, User, Package } from 'lucide-react'

// Define the Icons object with proper typing
const Icons = {
  mail: Mail,
  phone: Phone,
  building: Building2,
  user: User,
  package: Package
} as const

// If you don't actually need the renderIcon function, you can remove it
// Otherwise, update the type definition:
type IconName = keyof typeof Icons

const renderIcon = (iconName: IconName) => {
  const IconComponent = Icons[iconName]
  return IconComponent ? <IconComponent className="h-4 w-4 mr-0.5" /> : null
}

export function EBeamContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    product: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, product: value }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            className="mt-1"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className="mt-1"
          />
        </div>
      </div>
      <div>
        <label htmlFor="product" className="block text-sm font-medium text-gray-700">Product</label>
        <Select onValueChange={handleSelectChange} value={formData.product}>
          <SelectTrigger className="mt-1">
            <SelectValue placeholder="Select a product" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="medical-devices">Medical Devices</SelectItem>
            <SelectItem value="pharmaceuticals">Pharmaceuticals</SelectItem>
            <SelectItem value="food-packaging">Food Packaging</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="mt-1"
          rows={4}
        />
      </div>
      <div>
        <Button type="submit" className="w-full">Submit</Button>
      </div>
    </form>
  )
}

