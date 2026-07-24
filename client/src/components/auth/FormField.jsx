import { Label } from "@/components/ui/label";
import FormFieldError from "./FormFieldError";

function FormField({
  id,
  label,
  error,
  children,
}) {
  return (
    <div className="space-y-2">
      <Label
        htmlFor={id}
        className="text-slate-200"
      >
        {label}
      </Label>

      {children}

      <FormFieldError error={error} />
    </div>
  );
}

export default FormField;