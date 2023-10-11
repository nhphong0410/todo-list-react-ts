import { ArrowPathIcon } from '@heroicons/react/24/outline'

const SubmitButton = ({ title, loading, className, ...props }: any) => {
    return (
        <button
            {...props}
            disabled={loading}
            className={`flex justify-center items-center w-32 h-10 rounded-md bg-emerald-600 shadow-md shadow-emerald-500/50 text-white transition active:bg-emerald-700 disabled:bg-emerald-700 ${className}`}
        >
            {loading ? <span className='inline-block w-5 animate-spin'><ArrowPathIcon /></span> : <span>{title}</span>}
        </button>
    )
}

export default SubmitButton
