import Image from "next/image"

function How() {
  return (
    <section className="w-full py-20 md:py-32 border-t border-white/10 bg-white/5 flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-16">
              <div className="px-3 py-1 text-xs bg-white/10 text-white/70 hover:bg-white/20 border-0">
                How It Works
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Simple steps to get referred</h2>
              <p className="text-white/70 max-w-[700px]">
                ReferralAI makes it easy to create personalized referral messages in just a few simple steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Enter your details</h3>
                <p className="text-white/70">
                  Input your role, skills, target company, and preferred tone for your message.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Generate messages</h3>
                <p className="text-white/70">
                  Our AI creates personalized LinkedIn messages and emails based on your input.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-medium mb-2">Edit and send</h3>
                <p className="text-white/70">
                  Review, edit if needed, and copy your message to send to your connections.
                </p>
              </div>
            </div>

            
          </div>
        </section>
  )
}

export default How