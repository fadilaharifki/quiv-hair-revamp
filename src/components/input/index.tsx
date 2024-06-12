import { twMerge } from "tailwind-merge";
import { Input } from "../ui/input";
import { Control, RegisterOptions, useController } from "react-hook-form";

interface InputComponentInterface {
  type?: string;
  placeholder?: string;
  classNameInput?: string;
  name: string;
  control: Control<any>;
  rules?: Omit<
    RegisterOptions<any, any>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}

const InputComponent = ({
  type,
  placeholder,
  classNameInput,
  name,
  control,
  rules,
}: InputComponentInterface) => {
  const { field } = useController({
    name,
    control,
    rules,
  });
  return (
    <Input
      className={twMerge(
        "flex bg-light-gray border-none shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] h-12",
        classNameInput
      )}
      type={type}
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      name={field.name}
      ref={field.ref}
      placeholder={placeholder}
    />
  );
};

export default InputComponent;
