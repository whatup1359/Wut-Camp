import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";

const TextAreaInput = ({
  name,
  labelText,
  defaultValue,
}: {
  name: string;
  labelText?: string;
  defaultValue?: string;
}) => {
  return (
    <div>
      <Label htmlFor={name} className="capitalize mb-2">
        {labelText || name}
      </Label>
      <Textarea
        id={name}
        name={name}
        defaultValue={defaultValue}
        rows={5}
        required
      />
    </div>
  );
};
export default TextAreaInput;
