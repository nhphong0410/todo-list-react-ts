const TextInput = ({ field, form, className, ...props }: any) => {
    return (
        <input
            {...field}
            {...props}
            className={`block outline-none w-full border-b border-emerald-600 bg-transparent focus:border-emerald-700 transition ${className}`}
        />
    )
}

export default TextInput
