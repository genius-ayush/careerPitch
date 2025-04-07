import { Sparkles } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function CompanyLogo() {
  return (
    <Link href="/" className="flex items-center gap-2 flex-1">
                    <Sparkles className="h-6 w-6" />
                    <span className="font-bold text-xl">CareerPitchAI</span>
                </Link>
  )
}

export default CompanyLogo