import { UseFormRegister } from "react-hook-form";

type TValues = {
  id: string;
  labelName: string;
  placeholder: string;
  type: string;
  icon?: string;
  register: UseFormRegister<any>;
  error: string | undefined;
};

export default function InputForm(Values: TValues) {
  const { id, labelName, placeholder, type, icon, error, register } = Values;
  return (
    <div>
      <label className="font-medium" htmlFor={id}>
        {labelName}
      </label>
      <div className="relative">
        <input
          className="w-full min-h-10 bg-[#F2F6FB] rounded-3xl shadow-custom p-4 box-border"
          type={type}
          id={id}
          placeholder={placeholder}
          {...register(id)}
        />
        {icon && (
          <img
            className="absolute top-1/2 -translate-y-1/2 right-4 "
            src={icon}
            alt=""
          />
        )}
      </div>
      {error && <span className="text-red-700">{error}</span>}
    </div>
  );
}
