import ContentGeneratorForm from '@/components/ContentGeneratorForm';
import PageHeader from '@/components/PageHeader';
import { useUser } from '@/hooks/useUser';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ContentGenerator() {
  const { user, loading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/content-generator');
      return;
    }
  }, [user, loading, router]);

  return (
    <section className="flex max-w-2xl mx-auto">
      <div className="flex-grow flex flex-col justify-center p-6">
        <PageHeader title="Generate Your Content Calendar" />
        <ContentGeneratorForm />
      </div>
    </section>
  );
}
