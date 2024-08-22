import styles from './Input.module.css';



export const TextInput = ({
  label,
  className = '',
  register,
  defaultValue = '',
}) => {
  return (
    <div
      className={` flex flex-col w-full my-2 relative ${className}`}
    >
      <label className="bg-white absolute top-[-12px] left-2 text-sm">
        {label}
      </label>
      <input
        className={`${styles.Input} w-full text-base pl-2 font-medium h-10`}
        type="text"
        {...register}
        defaultValue={defaultValue}
      />
    </div>
  );
};


export const DateInput = ({ label, className = '', register }) => {
  return (
    <div
      className={` flex flex-col w-full my-2 relative ${className}`}
    >
      <label className="bg-white absolute top-[-12px] left-2 text-sm">
        {label}
      </label>
      <input
        className={`${styles.Input} w-full text-base pl-2 font-medium h-10`}
        type="date"
        {...register}
      />
    </div>
  );
};
