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
    <article className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

      <div className="flex items-center gap-4">
        <img
          src={technology.icon}
          alt={`${technology.name} icon`}
          className="h-12 w-12 object-contain"
        />

        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            {technology.name}
          </h2>

          <p className="text-sm text-gray-500">
            {technology.category}
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-gray-600">
        {technology.description}
      </p>

      <div className="mt-4 flex justify-between text-sm text-gray-600">
        <span>⭐ {technology.rating}</span>
        <span>{technology.difficulty}</span>
      </div>

      <button
        type="button"
        onClick={() => onAdd(technology)}
        className="mt-5 w-full rounded-xl bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 px-4 py-2.5 font-semibold text-white"
      >
        Add to Stack
      </button>

    </article>
  );
}

export default TechnologyCard;