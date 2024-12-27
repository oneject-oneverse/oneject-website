import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SubmitViolationForm() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold text-[#4DA8CF] tracking-normal">
          Whistleblowing Report Form
        </h1>

        <form className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name (Optional)</label>
            <Input type="text" id="name" name="name" className="w-full" />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <Input type="email" id="email" name="email" required className="w-full" />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <Input type="tel" id="phone" name="phone" required className="w-full" />
          </div>

          <div className="space-y-2">
            <label htmlFor="violation_type" className="block text-sm font-medium text-gray-700">Violation Type</label>
            <Select name="violation_type" required>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select violation type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fraud">Fraud</SelectItem>
                <SelectItem value="corruption">Corruption</SelectItem>
                <SelectItem value="theft">Theft</SelectItem>
                <SelectItem value="bribery">Bribery</SelectItem>
                <SelectItem value="conflict_of_interest">Conflict of Interest</SelectItem>
                <SelectItem value="gratification">Gratification</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="incident_date" className="block text-sm font-medium text-gray-700">Incident Date</label>
            <Input type="date" id="incident_date" name="incident_date" required className="w-full" />
          </div>

          <div className="space-y-2">
            <label htmlFor="incident_location" className="block text-sm font-medium text-gray-700">Incident Location</label>
            <Input type="text" id="incident_location" name="incident_location" required className="w-full" />
          </div>

          <div className="space-y-2">
            <label htmlFor="parties_involved" className="block text-sm font-medium text-gray-700">Parties Involved</label>
            <Textarea id="parties_involved" name="parties_involved" required className="w-full" rows={4} />
          </div>

          <div className="space-y-2">
            <label htmlFor="incident_details" className="block text-sm font-medium text-gray-700">Incident Details</label>
            <Textarea id="incident_details" name="incident_details" required className="w-full" rows={6} />
          </div>

          <div className="space-y-2">
            <label htmlFor="evidence" className="block text-sm font-medium text-gray-700">Evidence (if any)</label>
            <Input type="file" id="evidence" name="evidence" className="w-full" />
          </div>

          <div className="pt-4">
            <Button type="submit" className="w-full bg-[#6DC5EE] hover:bg-[#6DC5EE]/90 text-white px-10 py-4 rounded-full text-lg font-medium">
              Submit Report
            </Button>
          </div>
        </form>

        <div className="mt-8 text-sm text-gray-600">
          <p>Note:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Your report will be treated with strict confidentiality.</li>
            <li>Please provide as much detail as possible to assist in the investigation.</li>
            <li>False reporting with malicious intent may result in disciplinary action.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

