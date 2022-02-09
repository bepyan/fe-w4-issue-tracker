export const getFormChangeHandler = <T>(
  setForm: React.Dispatch<React.SetStateAction<T>>,
) => {
  return (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((state) => ({ ...state, [name]: value }));
  };
};
