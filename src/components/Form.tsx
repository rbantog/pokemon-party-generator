import { ReactElement, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { sanitizeString } from '../helper/sanitize';

function Form(): ReactElement {
    const [searchParams, setSearchParams] = useSearchParams();
    const qspName = searchParams.get('name');
    const [name, setName] = useState(sanitizeString(qspName));

    return (
        <form
            onSubmit={(e) => {
                setName(name);
                setSearchParams({ name });
                e.preventDefault();
            }}
        >
            <div className="form flex flex-col xxs:flex-row items-center justify-center">
                <label className="block mb-2 text-sm font-medium p-2">
                    Trainer Name
                </label>
                <div className="flex">
                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            width="20px"
                            height="20px"
                            viewBox="0 0 20 20"
                            version="1.1"
                        >
                            <g id="surface1">
                                <path d="M 10 7.015625 C 11.648438 7.015625 12.984375 8.351562 12.984375 10 C 12.984375 11.648438 11.648438 12.984375 10 12.984375 C 8.351562 12.984375 7.015625 11.648438 7.015625 10 C 7.015625 8.351562 8.351562 7.015625 10 7.015625 Z M 10 8.011719 C 8.902344 8.011719 8.011719 8.902344 8.011719 10 C 8.011719 11.097656 8.902344 11.988281 10 11.988281 C 11.097656 11.988281 11.988281 11.097656 11.988281 10 C 11.988281 8.902344 11.097656 8.011719 10 8.011719 Z M 15.746094 4.253906 C 17.269531 5.777344 18.125 7.84375 18.125 10 C 18.125 12.15625 17.269531 14.222656 15.746094 15.746094 C 14.222656 17.269531 12.15625 18.125 10 18.125 C 7.84375 18.125 5.777344 17.269531 4.253906 15.746094 C 2.730469 14.222656 1.875 12.15625 1.875 10 C 1.875 7.84375 2.730469 5.777344 4.253906 4.253906 C 5.777344 2.730469 7.84375 1.875 10 1.875 C 12.15625 1.875 14.222656 2.730469 15.746094 4.253906 Z M 6.484375 10 C 6.484375 10 2.703125 10 2.703125 10 C 2.703125 11.933594 3.472656 13.789062 4.839844 15.160156 C 6.210938 16.527344 8.066406 17.296875 10 17.296875 C 11.933594 17.296875 13.789062 16.527344 15.160156 15.160156 C 16.527344 13.789062 17.296875 11.933594 17.296875 10 C 17.296875 10 13.515625 10 13.515625 10 C 13.515625 8.058594 11.941406 6.484375 10 6.484375 C 8.058594 6.484375 6.484375 8.058594 6.484375 10 Z M 6.484375 10 " />
                            </g>
                        </svg>
                    </span>
                    <input
                        type="text"
                        className="py-3 px-4 block w-full border border-black shadow-sm rounded-none text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                        placeholder="Red"
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                        value={name}
                    />
                    <button
                        type="submit"
                        className="py-3 px-4 inline-flex flex-shrink-0 justify-center items-center gap-2 rounded-r-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-sm"
                        disabled={name === ''}
                    >
                        Submit
                    </button>
                </div>
                <button
                    onClick={() => {
                        setName('');
                        setSearchParams({});
                    }}
                    type="button"
                    className="py-3 px-4 inline-flex flex-shrink-0 justify-center items-center gap-2 rounded-r-md border-transparent font-semibold bg-transparent text-black underline focus:z-10 focus:outline-none focus:transparent text-sm"
                >
                    Clear
                </button>
            </div>
        </form>
    );
}

export default Form;
