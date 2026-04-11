export function DetailsCarCharacter({ icon, name, value }) {
  return (
    <div className="bg-white flex rounded-[10px] shadow-[5px_7px_5px_rgba(0,0,0,0.28)]">
      <div className="px-2.5 py-5 text-[#497ACE]">{icon}</div>
      <div className="flex flex-col p-2.5">
        <span className="text-[#B9B9B9] text-[10px] font-bold">{name}</span>
        <span className="font-bold text-[14px]">{value}</span>
      </div>
    </div>
  );
}
