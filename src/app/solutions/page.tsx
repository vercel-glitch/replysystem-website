import Link from 'next/link';
import Button from '@/components/ui/Button';
import { 
  InboxIcon,
  ArrowPathIcon,
  CogIcon,
  UserGroupIcon,
  LinkIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
  ServerStackIcon,
  ClockIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export default function Solutions() {
  const coreFeatures = [
    {
      icon: InboxIcon,
      title: 'Omnichannel Intake',
      description: 'Web, email, chat widget.',
    },
    {
      icon: ArrowPathIcon,
      title: 'Smart Routing',
      description: 'Assign by team or priority.',
    },
    {
      icon: CogIcon,
      title: 'Automations',
      description: 'Deadlines, reminders, escalations.',
    },
    {
      icon: UserGroupIcon,
      title: 'Client Portal',
      description: 'Track status, share files, get approvals.',
    },
    {
      icon: LinkIcon,
      title: 'Integrations',
      description: 'Email, calendar, storage.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security',
      description: 'Role-based access and audit logs.',
    },
  ];

  const useCases = [
    {
      icon: BuildingOfficeIcon,
      title: 'Agencies',
      description: 'Manage client requests and approvals.',
      benefits: ['Project tracking', 'Client collaboration', 'Approval workflows'],
    },
    {
      icon: WrenchScrewdriverIcon,
      title: 'Field Services',
      description: 'Job tickets and mobile updates.',
      benefits: ['Mobile access', 'Real-time updates', 'Scheduling tools'],
    },
    {
      icon: ServerStackIcon,
      title: 'B2B SaaS',
      description: 'Priority SLAs and reporting.',
      benefits: ['SLA management', 'Priority queues', 'Analytics dashboard'],
    },
  ];

  const faqs = [
    {
      question: 'How fast can we launch?',
      answer: 'Within a week.',
    },
    {
      question: 'Can you migrate our data?',
      answer: 'Yes, we can help.',
    },
    {
      question: 'Is the portal optional?',
      answer: 'Yes, add it when needed.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-6 sm:py-8 lg:py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Solutions that fit your workflow
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Whether you manage a few requests or hundreds, ReplySystem.com adapts to your process. Each business can customize how it supports its own clients.
            </p>
          </div>
        </div>
      </div>

      {/* Core Features Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-yellow-600">Core Features</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need in one platform
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Streamline your support operations with powerful features designed for modern businesses.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {coreFeatures.map((feature) => (
                <div key={feature.title} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500">
                      <feature.icon className="h-6 w-6 text-black" aria-hidden="true" />
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-yellow-600">Use Cases</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Built for your industry
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              See how ReplySystem adapts to different business models and requirements.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {useCases.map((useCase) => (
                <div key={useCase.title} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <useCase.icon className="h-5 w-5 flex-none text-yellow-600" aria-hidden="true" />
                    {useCase.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{useCase.description}</p>
                    <ul className="mt-4 space-y-2">
                      {useCase.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-x-2">
                          <ArrowRightIcon className="h-4 w-4 text-yellow-600" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Mini FAQ Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-yellow-600">Frequently Asked Questions</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Quick answers
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="space-y-10">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-yellow-500">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
              See a tailored demo
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-yellow-900">
              Ready to see how these features work for your specific use case? Book a personalized demo today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/demo">
                <Button variant="secondary" size="lg">
                  Book a Demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

