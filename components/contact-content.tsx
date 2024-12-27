"use client"

import { useState } from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
  }

  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="relative mb-12 inline-block text-4xl font-bold text-[#4DA8CF]">
          Contact Us
          <div className="absolute -top-4 left-0 h-1 w-16 bg-[#6DC5EE]" />
        </h1>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Form and Address */}
          <div className="space-y-12">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[150px]"
                  required
                />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>

            {/* Contact Information */}
            <div className="space-y-8 pt-8 border-t">
              <div>
                <h2 className="mb-4 text-xl font-semibold text-[#3F8F81]">Office / Factory:</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="mb-2 font-medium">Sentul Factory:</h3>
                    <div className="flex items-start space-x-2 text-gray-600">
                      <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#6DC5EE]" />
                      <span>
                        Jl. Olympic Raya Blok B9
                        <br />
                        Kawasan Industri Sentul
                        <br />
                        Bogor 16810, Indonesia
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-medium">Bekasi Factory:</h3>
                    <div className="flex items-start space-x-2 text-gray-600">
                      <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#6DC5EE]" />
                      <span>
                        Jl. Anggrek VII No. 41
                        <br />
                        Kawasan Industri Terpadu Indonesia China (KITIC)
                        <br />
                        Kab. Bekasi, 17337, Indonesia
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone className="h-5 w-5 shrink-0 text-[#6DC5EE]" />
                  <span>+62-21-8792-1883
                    <br /> +62-21-8790-2761 (Fax)
                  </span>
                  
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Mail className="h-5 w-5 shrink-0 text-[#6DC5EE]" />
                  <span>customercare@oneject.co.id</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13336.463802970527!2d107.1668256129503!3d-6.399876215335539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699916c727fc61%3A0xae3ea49cb5247ac5!2sPT%20Oneject%20Indonesia%20(Bekasi%20Factory)!5e0!3m2!1sen!2sid!4v1734925138752!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '600px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

