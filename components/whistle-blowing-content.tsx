import { Button } from "@/components/ui/button"
import Link from "next/link"

export function WhistleBlowingContent() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-[#4DA8CF] tracking-normal">
          Oneject Whistleblowing System
        </h1>

        <div className="space-y-6 text-[#4DA8CF] leading-relaxed">
          <p>
            As part of Good Corporate Governance practices that fosters trust with our internal and external stakeholders, PT Oneject Indonesia provides a communication platform that can be used by our employees, customers, and partners to report violation or fraudulent acts through our Whistleblowing System.
          </p>

          <p>
            We guarantee confidentiality of the Whistleblower's identity for him / her to feel secure in providing information on the alleged wrongdoings. Report submitted would be those that are fraudulent in nature or in violation of the Law, or relates to a violation of our Code of Ethics, Company Regulation, ABAC Policy, Gift, Entertainment, and Hospitality Policy. The Whistleblower would need to provide his / her active phone number or email for correspondence purposes with us, with name being optional (anonymous allowed).
          </p>

          <p>
            The report is encouraged to at least provide an explanation of what has happened (what), the parties involved (who), time of the incident (when), place of the incident (where), and how it happened (how). We expect that the report that is submitted are not of personal complaint or bad faith/defamation.
          </p>

          <p>
            Thank you for your concern and trust in us.
          </p>

          <div className="flex justify-center pt-8">
            <Link href="/esg/governance/whistle-blowing/submit-violation">
              <Button 
                size="lg"
                className="bg-[#6DC5EE] hover:bg-[#6DC5EE]/90 text-white px-10 py-4 rounded-full text-lg font-medium"
              >
                Submit Violations
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

