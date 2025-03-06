export default function MyInput({
  value,
  onChange,
  type,
  name,
  placeholder,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  name: string;
  placeholder: string;
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
      style={{
        background: "transparent",
        WebkitBoxShadow: "0 0 0px 1000px transparent inset",
      }}
      className="py-[1.5vh] lg:py-[2vh] w-3/5 lg:w-[74%] border-b-[1px] 
  border-text text-acsent text-base lg:text-2xl focus:outline-hidden 
placeholder:text-base lg:placeholder:text-2xl placeholder:text-text placeholder:bg-none placeholder:opacity-80 focus:bg-none"
    />
  );
}
