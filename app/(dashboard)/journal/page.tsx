import EntryCard from '@/components/entry-card';
import NewEntryCard from '@/components/new-entry-card';
import { getUserByClerkId } from '@/utils/auth';
import { prisma } from '@/utils/db';
import Link from 'next/link';

const getEntries = async () => {
  const { id } = await getUserByClerkId();
  const entries = await prisma.journalEntry.findMany({
    where: {
      userId: id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return entries;
};

const Journal = async () => {
  const entries = await getEntries();

  return (
    <div className="p-10 bg-zinc-400/10 h-full">
      <h2 className="text-2xl mb-8 font-bold">Journal</h2>
      <div className="grid grid-cols-3 gap-4">
        <NewEntryCard />
        {entries.map((entry) => (
          <Link key={entry.id} href={`/journal/${entry.id}`}>
            <EntryCard entry={entry} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Journal;
