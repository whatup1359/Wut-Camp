import { Input } from "../ui/input";
import { Label } from "../ui/label";

type FormInputProps = {
    name: string
    type: string
    label?: string
    defaultValue?: string
    placeholder?: string
}

const FormInput = (props: FormInputProps) => {
    const { name, type, label, defaultValue, placeholder } = props
  return (
    <div className="space-y-2">
      <Label htmlFor={name}> {label} </Label>
      <Input
        id="firstName"
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full"
        defaultValue={defaultValue}
      />
    </div>
  );
};
export default FormInput;
