import type { Technology } from "./technology";

interface YourStackProps {
  selectedTechnologies: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

function YourStack({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: YourStackProps) {
  return (
    <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Your Stack
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {selectedTechnologies.length} technologies selected
          </p>
        </div>

        {selectedTechnologies.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-sm font-medium text-red-500 hover:text-red-600"
          >
            Remove All
          </button>
        )}
      </div>

      {/* Empty State */}
      {selectedTechnologies.length === 0 && (
        <div className="mt-6 rounded-xl bg-gray-50 p-6 text-center">
          <div className="text-3xl">🧩</div>

          <h3 className="mt-3 font-semibold text-gray-800">
            Your stack is empty
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Add technologies from the list to build your ideal
            development stack.
          </p>
        </div>
      )}

      {/* Selected Technologies */}
      {selectedTechnologies.length > 0 && (
        <div className="mt-6 space-y-3">
          {selectedTechnologies.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3"
            >
              <img
                src={technology.icon}
                alt={`${technology.name} icon`}
                className="h-10 w-10 object-contain"
              />

              <div className="min-w-0 flex-1">
                <h3 className="truncate font-semibold text-gray-800">
                  {technology.name}
                </h3>

                <p className="text-xs text-gray-500">
                  {technology.category}
                </p>
              </div>

              <button
                onClick={() => onRemove(technology.id)}
                className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 transition hover:bg-red-100 hover:text-red-500"
                aria-label={`Remove ${technology.name}`}
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}

export default YourStack;