'use client';

import { updateEntry } from '@/utils/api';
import { JournalEntry } from '@prisma/client';
import { useState } from 'react';
import { useAutosave } from 'react-autosave';

const Editor = ({ entry }: { entry: JournalEntry }) => {
  const [value, setValue] = useState(entry.content);

  useAutosave({
    data: value,
    onSave: async (_value: string) => {
      if (_value === entry.content) return;
      const updated = await updateEntry(entry.id, _value);
      setValue(updated.content);
    },
  });

  return (
    <div className="w-full h-full">
      <textarea
        className="w-full h-full p-8 text-xl outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Editor;
