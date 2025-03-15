import { Card, CardContent } from "./ui/card"

function Testimonials() {
  return (
    <section className="w-full py-20 md:py-32 border-t border-white/10 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-16">
              <div className="px-3 py-1 text-xs bg-white/10 text-white/70 hover:bg-white/20 border-0">
                Testimonials
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">What our users say</h2>
              <p className="text-white/70 max-w-[700px]">
                Don't just take our word for it. Here's what job seekers have to say about ReferralAI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <p className="text-white/70 italic mb-6">
                    "ReferralAI helped me craft the perfect message to a connection at Google. I got a response within
                    hours and secured a referral for my dream role!"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-white/10" />
                    <div>
                      <p className="font-medium">Sarah J.</p>
                      <p className="text-sm text-white/50">Software Engineer at Google</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <p className="text-white/70 italic mb-6">
                    "I was struggling to get responses to my cold messages. ReferralAI's personalized approach made all
                    the difference. I've now secured 3 referrals!"
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-white/10" />
                    <div>
                      <p className="font-medium">Ayush</p>
                      <p className="text-sm text-white/50">Product Manager at Microsoft</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <p className="text-white/70 italic mb-6">
                    "As a career changer, I wasn't sure how to approach people for referrals. ReferralAI made it easy to
                    highlight my transferable skills in a compelling way."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-white/10" />
                    <div>
                      <p className="font-medium">Jessica L.</p>
                      <p className="text-sm text-white/50">UX Designer at Amazon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
  )
}

export default Testimonials