"use client";

import { useId, useState } from "react";

/**
 * File input with visible filename for FormSubmit (`name="attachment"`).
 */
export default function FileField() {
  const id = useId();
  const [fileName, setFileName] = useState("");

  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-neutral-800">
        Attach A File (optional)
      </label>
      <div className="mt-2">
        <input
          id={id}
          name="attachment"
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt,.csv,.png,.jpg,.jpeg,.webp"
          className="block w-full text-sm text-neutral-700 file:mr-4 file:rounded-md file:border-0 file:bg-brand-surface file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-brand-dark hover:file:bg-brand-surface/80"
          onChange={(e) => setFileName(e.target.files?.[0]?.name ?? "")}
        />
      </div>
      <p className="mt-2 text-xs leading-5 text-neutral-500">
        PDF, Office, images, or CSV. Large files may be rejected by the email gateway—if something does not go through,
        we will tell you and suggest another channel.
      </p>
      {fileName ? (
        <p className="mt-2 text-xs font-medium text-neutral-700" aria-live="polite">
          Selected: {fileName}
        </p>
      ) : null}
    </div>
  );
}
