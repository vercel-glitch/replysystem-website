import Link from "next/link";
import Button from "@/components/ui/Button";
import {
  CheckCircleIcon,
  ClockIcon,
  CogIcon,
  ChartBarIcon,
  InboxIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const benefits = [
    {
      icon: InboxIcon,
      title: "Unified Request Management",
      description: "Capture and organize all client requests from any channel in one centralized system.",
      details: "Email, web forms, chat, phone calls, and integrations all flow into a single, organized queue.",
      metric: "100% visibility"
    },
    {
      icon: CogIcon,
      title: "Intelligent Automation",
      description: "Reduce manual work with smart workflows that handle routine tasks automatically.",
      details: "Auto-assignment, deadline tracking, escalations, and custom triggers save hours every day.",
      metric: "75% time saved"
    },
    {
      icon: UserGroupIcon,
      title: "Branded Client Experience",
      description: "Provide clients with a professional, self-service portal that matches your brand.",
      details: "Custom branding, real-time updates, file sharing, and approval workflows in your colors.",
      metric: "40% fewer emails"
    },
    {
      icon: ChartBarIcon,
      title: "Actionable Analytics",
      description: "Make data-driven decisions with comprehensive reporting and real-time dashboards.",
      details: "Track response times, satisfaction scores, team performance, and business trends.",
      metric: "Real-time insights"
    },
    {
      icon: ShieldCheckIcon,
      title: "Enterprise Security",
      description: "Keep your data safe with bank-level security and compliance standards.",
      details: "SOC 2 compliance, role-based access, audit trails, and data encryption built-in.",
      metric: "99.9% uptime"
    },
    {
      icon: ArrowTrendingUpIcon,
      title: "Scalable Growth",
      description: "Grow your business without growing your support headaches or team size.",
      details: "Handle 10x more requests with the same team through automation and efficiency.",
      metric: "10x capacity"
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-yellow-200 to-yellow-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="mx-auto max-w-2xl py-6 sm:py-8 lg:py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Managed Support. Customized for Every Client.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Each company can use ReplySystem.com to manage and support its own
              clients.
            </p>
            <p className="mt-4 text-base leading-7 text-gray-500">
              Consolidate requests, automate tasks, and deliver faster support
              with a system that adapts to your business.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/demo">
                <Button size="lg">Get a Live Demo</Button>
              </Link>
              <Link href="/solutions">
                <Button variant="outline" size="lg">
                  Explore Solutions
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-yellow-300 to-yellow-500 opacity-15 sm:w-[72.1875rem]" />
        </div>
      </div>

      {/* Enhanced Key Benefits Section */}
      <div className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-yellow-600">
              Key Benefits
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Transform your client support experience
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Stop juggling emails, spreadsheets, and phone calls. Our platform centralizes everything 
              so you can focus on delivering exceptional service that makes clients love working with you.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.title} 
                  className="group relative bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-xl hover:border-yellow-300 transition-all duration-300 hover:-translate-y-2"
                >
                  {/* Icon and Metric */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-500 group-hover:bg-yellow-400 group-hover:scale-110 transition-all duration-300">
                      <benefit.icon className="h-7 w-7 text-black" aria-hidden="true" />
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full">
                        {benefit.metric}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-yellow-600 transition-colors mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {benefit.description}
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {benefit.details}
                    </p>
                  </div>
                  
                  {/* Hover Effect Accent */}
                  <div className="absolute inset-x-0 -bottom-px h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom Stats */}
          <div className="mt-20 border-t border-gray-200 pt-12">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Happy Businesses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">1M+</div>
                <div className="text-sm text-gray-600">Requests Managed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">&lt;2min</div>
                <div className="text-sm text-gray-600">Avg Response</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-yellow-600">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What our clients say
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <blockquote className="text-gray-900">
                <p className="text-lg leading-7">
                  &ldquo;ReplySystem transformed how we handle client support. What
                  used to take hours now takes minutes, and our clients love the
                  transparency.&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500">
                  <span className="text-sm font-semibold text-black">SJ</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Sarah Johnson
                  </div>
                  <div className="text-sm text-gray-600">
                    CEO, TechFlow Solutions
                  </div>
                </div>
              </figcaption>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <blockquote className="text-gray-900">
                <p className="text-lg leading-7">
                  &ldquo;The automation features saved us 15 hours per week. Our team
                  can now focus on strategic work instead of managing tickets
                  manually.&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500">
                  <span className="text-sm font-semibold text-black">MC</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Michael Chen
                  </div>
                  <div className="text-sm text-gray-600">
                    Operations Director, BuildCorp
                  </div>
                </div>
              </figcaption>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <blockquote className="text-gray-900">
                <p className="text-lg leading-7">
                  &ldquo;Our client satisfaction scores increased by 40% after
                  implementing ReplySystem. The portal gives clients exactly
                  what they need.&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500">
                  <span className="text-sm font-semibold text-black">ER</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Emily Rodriguez
                  </div>
                  <div className="text-sm text-gray-600">
                    Founder, Creative Agency Plus
                  </div>
                </div>
              </figcaption>
            </div>
          </div>

          {/* Additional testimonials row */}
          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* Testimonial 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <blockquote className="text-gray-900">
                <p className="text-lg leading-7">
                  &ldquo;Finally, a support system that scales with us. We&apos;ve grown
                  from 50 to 500 clients without adding support staff.&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500">
                  <span className="text-sm font-semibold text-black">DT</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    David Thompson
                  </div>
                  <div className="text-sm text-gray-600">CTO, CloudStart</div>
                </div>
              </figcaption>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <blockquote className="text-gray-900">
                <p className="text-lg leading-7">
                  &ldquo;The reporting features help us identify trends and improve
                  our service quality. Our response times dropped by 60%.&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500">
                  <span className="text-sm font-semibold text-black">LW</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Lisa Wang</div>
                  <div className="text-sm text-gray-600">
                    Head of Support, FinTech Pro
                  </div>
                </div>
              </figcaption>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="bg-yellow-500">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              Ready to Transform Your Client Support?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-yellow-900">
              Join hundreds of businesses already saving time and delighting
              clients with ReplySystem. Get a personalized demo tailored to your
              specific needs.
            </p>

            {/* Value Props */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-center justify-center gap-x-2 text-yellow-900">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">Free 30-day trial</span>
              </div>
              <div className="flex items-center justify-center gap-x-2 text-yellow-900">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">
                  Setup in under 1 week
                </span>
              </div>
              <div className="flex items-center justify-center gap-x-2 text-yellow-900">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">
                  No credit card required
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-x-6">
              <Link href="/demo">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <svg
                    className="mr-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-10V7a3 3 0 01-3 3H6a3 3 0 01-3-3V4a3 3 0 013-3h12a3 3 0 013 3z"
                    />
                  </svg>
                  Get a Live Demo
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-black text-black hover:bg-black hover:text-yellow-500"
                >
                  Talk to Sales
                </Button>
              </Link>
            </div>

            {/* Trust Signal */}
            <p className="mt-8 text-sm text-yellow-800">
              Trusted by 500+ businesses • Average 4.9/5 rating • 24/7 support
              included
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
