interface Props {
  search: string;
  setSearch: (search: string) => void;
}
export const Filter = ({ search, setSearch }: Props) => {
  return (
    <div className="w-full p-6 mb-5 shadow-sm bg-white rouded-md">
      <input value={search} onChange={(e: any) => setSearch(e)} />
    </div>
  );
};
