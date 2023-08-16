import { useState } from 'react';
import type { FormEvent } from 'react';
import { useAlert } from '@/hooks/useAlert';
import { functions } from '@/utils/appwrite';
import { useUser } from '@/hooks/useUser';
import BouncingDotsLoader from './BouncingLoaderDots';

interface HandleContentGeneratedFunction {
  (tweets: string[]): void;
}
interface ContentGeneratorFormProps {
  handleContentGenerated: HandleContentGeneratedFunction;
}
const ContentGeneratorForm = ({
  handleContentGenerated,
}: ContentGeneratorFormProps) => {
  const [topic, setTopic] = useState('');
  const { user } = useUser();
  const { addAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    setLoading(true);
    if (!user) return;
    const data = JSON.stringify({ topic, email: user.email });
    try {
      const { response } = await functions.createExecution(
        process.env.NEXT_PUBLIC_APPWRITE_FUNCTION_ID || '',
        data
      );
      const tweets = JSON.parse(response);
      handleContentGenerated(tweets);
      addAlert('Content generated succesfully!');
      setTopic('');
    } catch (error) {
      console.error(error);
      addAlert('Failed to generate content plan', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="block mt-6" htmlFor="topic">
        {' '}
        What is something that you learned last week or are working on this
        week?
      </label>
      <input
        id="topic"
        className="w-full p-4 placeholder-gray-400 text-gray-700 bg-white text-lg border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-gray-900"
        type="text"
        required={true}
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <div className="mt-6">
        <button
          type="submit"
          disabled={!topic}
          className="mx-auto mt-4 py-4 px-16 font-semibold rounded-lg shadow-md bg-gray-800 text-white border hover:border-gray-900 hover:bg-gray-900 hover:text-white focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed h-16 w-54"
        >
          {loading ? <BouncingDotsLoader /> : 'Generate'}
        </button>
      </div>
    </form>
  );
};

export default ContentGeneratorForm;
