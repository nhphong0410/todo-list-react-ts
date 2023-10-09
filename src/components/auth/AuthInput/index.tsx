const AuthInput = ({ field, form, className, ...props }: any) => {
    return (
        <input
            {...field}
            {...props}
            className={`block outline-none w-full border-b border-emerald-600 bg-transparent ${className}`}
        />
    )
}

export default AuthInput

export type InputProps = {
    type?: string,
    key?: string
}
