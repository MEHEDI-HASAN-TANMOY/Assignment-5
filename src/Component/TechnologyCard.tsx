import type { Technology } from "./technology";

interface TechnologyCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
}

function TechnologyCard({
  technology,
  onAdd,
}: TechnologyCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Icon + Name */}
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gray-50 p-2">
          <img
            src={technology.icon}
            alt={`${technology.name} icon`}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-bold text-gray-900">
            {technology.name}
          </h2>

          <span className="mt-1 inline-block rounded-full bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-600">
            {technology.category}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="mt-5 min-h-18 text-sm leading-6 text-gray-600">
        {technology.description}
      </p>

      {/* Rating + Difficulty */}
      <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
        <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
          <span>⭐</span>
          <span>{technology.rating}</span>
        </div>

        <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-medium text-violet-600">
          {technology.difficulty}
        </span>
      </div>

      {/* Add Button */}
      <button
        type="button"
        onClick={() => onAdd(technology)}
        className="mt-5 w-full rounded-xl  px-4 py-3 font-semibold bg-black text-white"
      >
        Add to Stack
      </button>

    </article>
  );
}

export default TechnologyCard;