'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  CheckIcon,
  MapPinIcon 
} from '@heroicons/react/24/outline';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  workEmail: z.string().email('Please enter a valid email address'),
  company: z.string().min(2, 'Company name is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data)
      // });
      // 
      // if (!response.ok) {
      //   throw new Error('Failed to send message');
      // }
      
      // Simulate API call for now
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Contact form data:', data);
      
      setIsSubmitted(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-6 sm:py-8 lg:py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Talk to us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Have questions? Tell us what you need and we&apos;ll get back to you.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          {/* Contact Form */}
          <div className="lg:col-span-1">
            {isSubmitted && (
              <div className="mb-6 rounded-md bg-green-50 p-4">
                <div className="flex">
                  <CheckIcon className="h-5 w-5 text-green-400" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">
                      Thanks! We&apos;ll reply within one business day.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {submitError && (
              <div className="mb-6 rounded-md bg-red-50 p-4">
                <div className="flex">
                  <div className="ml-3">
                    <p className="text-sm font-medium text-red-800">
                      {submitError}
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="text-center">
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Send us a message
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">
                    We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                  </p>
                </div>

                {/* Name and Email Row */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <Input
                    label="Name"
                    placeholder="Your full name"
                    {...register('name')}
                    error={errors.name?.message}
                  />

                  <Input
                    label="Work Email"
                    type="email"
                    placeholder="your.email@company.com"
                    {...register('workEmail')}
                    error={errors.workEmail?.message}
                  />
                </div>

                {/* Company Field */}
                <Input
                  label="Company"
                  placeholder="Your company name"
                  {...register('company')}
                  error={errors.company?.message}
                />

                {/* Message Field */}
                <Textarea
                  label="Message"
                  placeholder="Tell us about your needs, questions, or how we can help..."
                  rows={6}
                  {...register('message')}
                  error={errors.message?.message}
                />

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="mr-2 h-4 w-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send Message
                      </>
                    )}
                  </Button>
                </div>

                {/* Privacy Note */}
                <p className="text-xs text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy. We&apos;ll never share your information.
                </p>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Get in touch
                </h3>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500">
                      <EnvelopeIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900">Email</h4>
                      <p className="mt-1 text-sm text-gray-600">
                        Send us an email anytime
                      </p>
                      <a
                        href="mailto:support@replysystem.com"
                        className="mt-2 text-sm font-medium text-yellow-600 hover:text-yellow-700"
                      >
                        support@replysystem.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500">
                      <PhoneIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900">Phone</h4>
                      <p className="mt-1 text-sm text-gray-600">
                        Call us during business hours
                      </p>
                      <a
                        href="tel:+1234567890"
                        className="mt-2 text-sm font-medium text-yellow-600 hover:text-yellow-700"
                      >
                        +1 (XXX) XXX-XXXX
                      </a>
                    </div>
                  </div>

                  {/* Office */}
                  <div className="flex items-start gap-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500">
                      <MapPinIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900">Office</h4>
                      <p className="mt-1 text-sm text-gray-600">
                        Visit us at our headquarters
                      </p>
                      <p className="mt-2 text-sm text-gray-900">
                        123 Business Ave<br />
                        Suite 100<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-yellow-50 rounded-lg p-6">
                <h4 className="text-base font-semibold text-yellow-900 mb-2">
                  Response Time
                </h4>
                <p className="text-sm text-yellow-800">
                  We typically respond to all inquiries within one business day. For urgent matters, please call us directly.
                </p>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-base font-semibold text-gray-900 mb-2">
                  Business Hours
                </h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p>Saturday: 10:00 AM - 2:00 PM PST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom spacing */}
      <div className="pb-24"></div>
    </div>
  );
}

