

const Pagination = ({ page, onPrev, onNext }) => {
  return (
    <div className="flex justify-center items-center gap-6 p-5">
      <button
        style={{ opacity: page == 1 ? 0.5 : 1 }}
        className="bg-amber-400 text-lg active:scale-95 cursor-pointer rounded px-4 p-2 font-semibold"
        onClick={onPrev}
        disabled={page === 1}
      >
        ← Prev
      </button>
      <h4>Page {page}</h4>
      <button
        className="bg-amber-400 text-lg active:scale-95 cursor-pointer rounded px-4 p-2 font-semibold"
        onClick={onNext}
      >
        Next →
      </button>
    </div>
  );
};

export default Pagination;
