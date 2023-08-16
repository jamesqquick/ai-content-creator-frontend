import BouncingDotsLoader from '@/components/BouncingLoaderDots';
import ContentGeneratorForm from '@/components/ContentGeneratorForm';
import PageHeader from '@/components/PageHeader';
import Tweet from '@/components/Tweet';
import { useUser } from '@/hooks/useUser';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ContentGenerator() {
  const { user, loading } = useUser();
  const [tweets, setTweets] = useState<string[] | null>(null);
  const router = useRouter();

  const handleContentGenerated = (tweets: string[]) => {
    setTweets(tweets);
  };

  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
      return;
    }
  }, [user, loading, router]);

  return (
    <section className="flex mx-auto">
      <div className="flex-grow flex flex-col justify-center p-6">
        <PageHeader title="Generate Your Content Calendar" />
        <ContentGeneratorForm handleContentGenerated={handleContentGenerated} />
        <div className="mb-20"></div>
        {tweets && (
          <div className="grid gap-y-10 gap-x-4 md:grid-cols-2 grid-cols-1">
            {tweets.map((tweet, i) => (
              <Tweet key={i} text={tweet} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
