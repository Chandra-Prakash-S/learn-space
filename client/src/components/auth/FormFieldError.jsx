function FormFieldError({ error }) {
  if (!error) return null;

  return (
    <p className="mt-1 text-sm font-medium text-red-400">
      {error.message}
    </p>
  );
}

export default FormFieldError;