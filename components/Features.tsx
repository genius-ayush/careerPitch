"use client";
import { Badge, MessageSquare, Users, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

function Features() {
  return (
    <section id="features" className="w-full py-16 md:py-24 px-4 sm:px-8">
      {/* Title */}
      <div className="text-center text-lg sm:text-xl pb-4">Features</div>
      <p className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold">
        Everything you need to get referred
      </p>

      {/* Description */}
      <div className="flex justify-center">
        <p className="text-center text-base sm:text-lg md:text-xl mt-4 font-light text-gray-400 w-full sm:w-3/4 md:w-2/3 lg:w-1/3">
          ReferralAI provides all the tools you need to create personalized messages that get responses and land you referrals.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full sm:w-4/5 lg:w-3/4 mx-auto mt-12">
        <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
          <CardContent className="p-6">
            <MessageSquare className="h-10 w-10 mb-4 text-white/80" />
            <h3 className="text-lg sm:text-xl font-medium mb-2">AI-Powered Messages</h3>
            <p className="text-white/70">
              Generate personalized LinkedIn messages and emails tailored to your skills and the company you're targeting.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
          <CardContent className="p-6">
            <Zap className="h-10 w-10 mb-4 text-white/80" />
            <h3 className="text-lg sm:text-xl font-medium mb-2">Multiple Tone Options</h3>
            <p className="text-white/70">
              Choose from formal, casual, enthusiastic, or professional tones to match your personal style and the company culture.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
          <CardContent className="p-6">
            <Users className="h-10 w-10 mb-4 text-white/80" />
            <h3 className="text-lg sm:text-xl font-medium mb-2">Message History</h3>
            <p className="text-white/70">
              Save and organize all your messages for different companies and roles, making it easy to track your referral requests.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Features;
