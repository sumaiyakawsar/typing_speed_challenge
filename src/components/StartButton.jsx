export default function StartButton({ startTest }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
            <div className="pointer-events-auto text-center">
                <button
                    onClick={() => {
                        startTest();
                        inputRef.current.focus();
                    }}
                    className="bg-blue-500 hover:bg-blue-600  px-6 py-3 rounded-lg font-semibold shadow-xl  cursor-pointer
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                    Start Typing Test
                </button>
                <p className="mt-3 text-gray-300 text-sm">
                    Or click the text and start typing
                </p>
            </div>
        </div>
    );
}
