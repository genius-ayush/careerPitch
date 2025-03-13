import { Badge, MessageSquare, Users, Zap } from "lucide-react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"

function Features() {
  return (
    <section className=" w-full py-20 md:py-42">
      <div className="text-center text-xl pb-4  ">Features</div>
      <p className="text-center text-5xl font-semibold">Everything you need to get referred</p>
      <div className="flex justify-center">
      <p className="text-center text-xl mt-4 font-light w-1/3 text-gray-400">ReferralAI provides all the tools you need to create personalized messages that get responses and land you referrals.</p>
      </div>
    </section>
  )
}

export default Features