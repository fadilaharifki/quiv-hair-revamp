import { twMerge } from "tailwind-merge";
import { Textarea } from "../ui/textarea";
import { Control, RegisterOptions, useController } from "react-hook-form";

interface TextareaComponentInterface {
  placeholder?: string;
  classNameTextarea?: string;
  rows?: number;
  name: string;
  control: Control<any>;
  rules?: Omit<
    RegisterOptions<any, any>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
}

const TextareaComponent = ({
  placeholder,
  classNameTextarea,
  rows,
  name,
  control,
  rules,
}: TextareaComponentInterface) => {
  const { field } = useController({
    name,
    control,
    rules,
  });
  return (
    <Textarea
      rows={rows}
      className={twMerge(
        "flex bg-light-gray border-none shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]",
        classNameTextarea
      )}
      placeholder={placeholder}
      onChange={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      name={field.name}
      ref={field.ref}
    />
  );
};

export default TextareaComponent;
